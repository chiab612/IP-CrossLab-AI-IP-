import React, { useState } from 'react';
import {
  Award,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Atom,
  Clock,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  TrendingUp,
  Download,
  Flame,
  Check
} from 'lucide-react';
import { ActiveTab, MediaType } from '../types';

interface JudgeTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenMediaModal: (media: MediaType) => void;
}

interface TourStep {
  stepNumber: number;
  timeRange: string;
  badge: string;
  title: string;
  summary: string;
  coreHighlights: string[];
  actionLabel: string;
  onAction: () => void;
  metricHighlight?: { label: string; value: string };
}

export const JudgeTourModal: React.FC<JudgeTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenMediaModal,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  const tourSteps: TourStep[] = [
    {
      stepNumber: 1,
      timeRange: '0:00 - 0:45',
      badge: '痛點與解方 (The Problem & Solution)',
      title: '傳統 IP 改編 78% 爛尾，因為缺乏跨媒體統一藍圖',
      summary:
        '創作者通常只有劇本或草稿，跨媒體改編（遊戲、影視、周邊）往往在後期各自為政，導致預算浪費與世界觀矛盾。IP CrossLab 利用 Gemini 3.8 Flash 一鍵生成 5 棲跨媒體完整企劃與 IP Opportunity Score！',
      coreHighlights: [
        '輸入「一句模糊創意」→ 10 秒產出 5 棲高概念專業企劃',
        '五維雷達評分：遊戲、電影、YouTube、小說、商業化全面拆解',
        '內建 Before vs After 對比，直觀解決 IP 孵化高門檻痛點'
      ],
      metricHighlight: { label: '策劃效率提升', value: '100x' },
      actionLabel: '前往「Home」檢視五棲評分卡',
      onAction: () => {
        onNavigateTab('home');
      }
    },
    {
      stepNumber: 2,
      timeRange: '0:45 - 1:30',
      badge: '五棲策劃展示 (Transmedia Depth)',
      title: '不只是文字聊天，而是 Hollywood & 3A 標準工業白皮書',
      summary:
        '以經典案例「宮本武藏 × 五輪書 × 日本妖怪」為例，系統同步產出電影三幕劇、3A 遊戲戰鬥核心循環、YouTube 前 15 秒吸睛 Hook 與 CTR 縮圖、Webtoon 連載話數，以及實體一番賞潮玩商業授權！',
      coreHighlights: [
        '電影模式：包含 Logline、人物弧光、三幕對抗與預告片定格鏡頭',
        '遊戲模式：五輪劍氣相生相剋、Boss 戰機制、Steam/PS5 平台規劃',
        'YouTube 模式：提供爆款首集標題、縮圖大字文案與後續 5 集規劃'
      ],
      metricHighlight: { label: '跨媒體覆蓋度', value: '5 棲同構' },
      actionLabel: '一鍵展開「電影三幕劇與遊戲架構」詳情',
      onAction: () => {
        onNavigateTab('home');
        onOpenMediaModal('movie');
      }
    },
    {
      stepNumber: 3,
      timeRange: '1:30 - 2:30',
      badge: '硬科技核心 (IBM Quantum Optimization)',
      title: '以 IBM Quantum 解決跨媒體資源配置的「NP-Hard 組合爆炸」',
      summary:
        '跨媒體排程最大難題在於「資本互咬（Cannibalization）」與「時序衝突」。經典貪婪演算法容易陷入局部最優；IP CrossLab 引入 IBM Quantum Qiskit QAOA / QUBO 演算法，在 127-Qubit 狀態空間採樣，找出全域最低能量基態！',
      coreHighlights: [
        'IBM Qiskit QAOA 演算法：1024 Shots 採樣收斂至全局最優基態',
        '對比經典演算法：預期 ROI 淨提升 +20.6%（達 39.8%）',
        '消弭資源互咬：跨媒體協同效應達 3.4x，衝突風險降低 42%',
        '自動產出五大媒體黃金發行窗口（YouTube 冷啟動 → 遊戲 Demo → 影視宣傳 → 商業長青）'
      ],
      metricHighlight: { label: '量子 ROI 提升', value: '+20.6%' },
      actionLabel: '前往「IBM Quantum Lab」親自調節預算與 QPU 運算',
      onAction: () => {
        onNavigateTab('quantum');
      }
    },
    {
      stepNumber: 4,
      timeRange: '2:30 - 3:00',
      badge: '商業模式與結語 (Business Model & Pitch)',
      title: '創作者經濟 × 遊戲影視發行商的全球 IP 孵化引擎',
      summary:
        'IP CrossLab 具備清晰的 B2B/B2C 商業模式：面向創作者提供 AI 策劃訂閱，面向影視/遊戲大廠提供 IP 投資白皮書與授權撮合抽成。未來結合 IBM Quantum 算力雲與 AI 分鏡生圖，打造全球首座跨媒體 IP 孵化器！',
      coreHighlights: [
        '商業模式：SaaS 訂閱 + 影視遊戲授權撮合交易抽成 (5-10%)',
        '完整交付：一鍵導出 Hollywood 投資級 Markdown / PDF 策劃白皮書',
        '評審 30 秒總結：AI 創意生成 (Gemini) + 量子資源排程 (IBM Quantum) = 完美雙引擎'
      ],
      metricHighlight: { label: '評審推薦指數', value: '98 / 100' },
      actionLabel: '匯出 IP 完整白皮書並完成 Demo',
      onAction: () => {
        onNavigateTab('profile');
      }
    }
  ];

  const currentStep = tourSteps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      tourSteps[nextIdx].onAction();
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      tourSteps[prevIdx].onAction();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-end sm:justify-center p-0 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      <div className="w-full max-w-lg mx-auto bg-slate-900 border border-cyan-500/60 rounded-t-[32px] sm:rounded-[32px] shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden">
        {/* Top Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white">
                  黑客松評審 3 分鐘速覽 Demo
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Step {currentStep.stepNumber}/4
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">
                時程：{currentStep.timeRange}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Step Progress Bar */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2">
          {tourSteps.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => {
                setCurrentStepIndex(idx);
                step.onAction();
              }}
              className="flex-1 flex flex-col gap-1 text-left group"
            >
              <div
                className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                  idx === currentStepIndex
                    ? 'bg-cyan-400'
                    : idx < currentStepIndex
                    ? 'bg-indigo-500'
                    : 'bg-slate-800'
                }`}
              />
              <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-200">
                {step.timeRange.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed">
          {/* Badge & Title */}
          <div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
              {currentStep.badge}
            </span>
            <h3 className="text-base font-black text-white mt-1.5 leading-snug">
              {currentStep.title}
            </h3>
          </div>

          {/* Metric Callout Card */}
          {currentStep.metricHighlight && (
            <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-indigo-950/60 border border-cyan-500/40 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">
                {currentStep.metricHighlight.label}
              </span>
              <span className="text-xl font-black text-cyan-300 font-mono">
                {currentStep.metricHighlight.value}
              </span>
            </div>
          )}

          {/* Narrative Summary */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 leading-relaxed">
            {currentStep.summary}
          </div>

          {/* Key Highlights Checklist */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-200 block">
              💡 核心技術亮點：
            </span>
            {currentStep.coreHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-300 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 text-xs font-bold transition-all flex items-center gap-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>上一步</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all"
          >
            <span>{currentStepIndex === tourSteps.length - 1 ? '完成評審導覽' : '下一步 (繼續導覽)'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
