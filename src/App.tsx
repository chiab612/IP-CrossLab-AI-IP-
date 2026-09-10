/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { HeaderBar } from './components/HeaderBar';
import { BottomNav } from './components/BottomNav';
import { HeroSearch } from './components/HeroSearch';
import { ScoreBoard } from './components/ScoreBoard';
import { DirectionCards } from './components/DirectionCards';
import { DetailedPitchModal } from './components/DetailedPitchModal';
import { StrategyMatrixView } from './components/StrategyMatrixView';
import { QuantumLabView } from './components/QuantumLabView';
import { JudgeTourModal } from './components/JudgeTourModal';
import { ProjectsView } from './components/ProjectsView';
import { ProfileLabView } from './components/ProfileLabView';
import { LoadingOverlay } from './components/LoadingOverlay';
import { DEMO_MIYAMOTO_RESULT } from './data/demoData';
import { IpAnalysisResult, MediaType, ActiveTab } from './types';
import { analyzeCreativeIp, checkServerHealth } from './services/apiClient';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

const STORAGE_KEY_PROJECTS = 'ip_crosslab_saved_projects_v1';
const STORAGE_KEY_ACTIVE_ID = 'ip_crosslab_active_project_id_v1';

export default function App() {
  const [isDesktopFrame, setIsDesktopFrame] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [sourceType, setSourceType] = useState<string>('preset');
  const [isJudgeTourOpen, setIsJudgeTourOpen] = useState(false);

  // Stored projects initialized with the canonical Miyamoto Musashi demo
  const [projects, setProjects] = useState<IpAnalysisResult[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return [DEMO_MIYAMOTO_RESULT];
  });

  const [activeProjectId, setActiveProjectId] = useState<string>(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
      if (savedId) return savedId;
    } catch {
      // ignore
    }
    return DEMO_MIYAMOTO_RESULT.id;
  });

  // Current active project
  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0] || DEMO_MIYAMOTO_RESULT;

  // Modal state for detailed pitch
  const [modalMediaType, setModalMediaType] = useState<MediaType | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
      localStorage.setItem(STORAGE_KEY_ACTIVE_ID, activeProjectId);
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [projects, activeProjectId]);

  // Check server health / API key presence on startup
  useEffect(() => {
    checkServerHealth().then((health) => {
      setHasApiKey(health.hasApiKey);
    });
  }, []);

  const handleStartAnalysis = async (query: string, targetMarket: string) => {
    setIsLoading(true);
    try {
      const response = await analyzeCreativeIp(query, targetMarket);
      const newResult = response.data;
      setSourceType(response.source);

      // Save to projects
      setProjects((prev) => {
        // filter out any with same ID or query to avoid clutter
        const filtered = prev.filter((p) => p.id !== newResult.id && p.query !== newResult.query);
        return [newResult, ...filtered];
      });
      setActiveProjectId(newResult.id);
      setActiveTab('home');
    } catch (err) {
      console.error('Failed to analyze:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemo = () => {
    // Reset to the flagship Miyamoto Musashi demo immediately
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === DEMO_MIYAMOTO_RESULT.id);
      if (!exists) return [DEMO_MIYAMOTO_RESULT, ...prev];
      return prev;
    });
    setActiveProjectId(DEMO_MIYAMOTO_RESULT.id);
    setActiveTab('home');
  };

  const handleSelectMediaDetail = (mediaType: MediaType) => {
    setModalMediaType(mediaType);
  };

  const handleViewRoadmapFromModal = () => {
    setModalMediaType(null);
    setActiveTab('explore');
  };

  const handleSelectProjectFromList = (proj: IpAnalysisResult) => {
    setActiveProjectId(proj.id);
    setActiveTab('home');
  };

  const handleDeleteProject = (projId: string) => {
    setProjects((prev) => {
      const remaining = prev.filter((p) => p.id !== projId);
      if (remaining.length > 0) {
        if (activeProjectId === projId) {
          setActiveProjectId(remaining[0].id);
        }
        return remaining;
      }
      return [DEMO_MIYAMOTO_RESULT];
    });
  };

  const handleNewProject = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PhoneFrame
      isDesktopFrame={isDesktopFrame}
      onToggleFrame={() => setIsDesktopFrame(!isDesktopFrame)}
    >
      {/* Loading animation overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Top Header Bar */}
      <HeaderBar
        onQuickDemo={handleQuickDemo}
        onOpenJudgeTour={() => setIsJudgeTourOpen(true)}
        sourceType={sourceType}
      />

      {/* Main Content Sections Based on Active Tab */}
      <main className="flex-1 pb-16">
        {activeTab === 'home' && (
          <div className="flex flex-col">
            {/* 1. Creative Query Search Box */}
            <HeroSearch
              onStartAnalysis={handleStartAnalysis}
              isLoading={isLoading}
              initialQuery={currentProject.query}
              onOpenJudgeTour={() => setIsJudgeTourOpen(true)}
              onOpenQuantumTab={() => setActiveTab('quantum')}
            />

            {/* Divider */}
            <div className="px-4 py-2 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-800" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                AI 企劃分析結果
              </span>
              <div className="h-px flex-1 bg-slate-800" />
            </div>

            {/* 2. Opportunity Score */}
            <ScoreBoard
              result={currentProject}
              onSelectMedia={handleSelectMediaDetail}
            />

            {/* 3. 5-Media Direction Cards */}
            <DirectionCards
              result={currentProject}
              onExpandDirection={handleSelectMediaDetail}
            />

            {/* Quick Explore Banner at bottom of Home */}
            <div className="px-4 py-3 space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab('quantum')}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-cyan-950/70 border border-indigo-500/50 hover:border-cyan-400 text-slate-200 hover:text-white transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-2 text-left">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-cyan-300 border border-indigo-500/40 flex items-center justify-center font-bold">
                    ⚛️
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white flex items-center gap-1">
                      IBM Quantum 跨媒體資源配置最佳化
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-900 text-cyan-300 font-mono">
                        QPU QAOA
                      </span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      消除跨媒體資本互咬，預期 ROI 淨提升 +20.6%
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('explore')}
                className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-between group shadow-sm text-xs"
              >
                <span className="font-semibold text-slate-300">
                  檢視 IP Strategy Matrix 決策矩陣 (5大媒體難度與成本)
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'explore' && (
          <StrategyMatrixView
            result={currentProject}
            onSelectMedia={handleSelectMediaDetail}
          />
        )}

        {activeTab === 'quantum' && (
          <QuantumLabView
            currentProject={currentProject}
            onSelectMedia={handleSelectMediaDetail}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsView
            savedProjects={projects}
            activeProjectId={activeProjectId}
            onSelectProject={handleSelectProjectFromList}
            onDeleteProject={handleDeleteProject}
            onNewProject={handleNewProject}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileLabView
            currentProject={currentProject}
            hasApiKey={hasApiKey}
          />
        )}
      </main>

      {/* Judge Tour Guided Modal */}
      <JudgeTourModal
        isOpen={isJudgeTourOpen}
        onClose={() => setIsJudgeTourOpen(false)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
        }}
        onOpenMediaModal={(media) => {
          setModalMediaType(media);
        }}
      />

      {/* Detailed Modal Pitch */}
      {modalMediaType && (
        <DetailedPitchModal
          result={currentProject}
          initialMediaType={modalMediaType}
          onClose={() => setModalMediaType(null)}
          onViewRoadmap={handleViewRoadmapFromModal}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        hasResult={Boolean(currentProject)}
      />
    </PhoneFrame>
  );
}
