import React from 'react';
import { FolderKanban, Plus, Clock, Award, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { IpAnalysisResult } from '../types';

interface ProjectsViewProps {
  savedProjects: IpAnalysisResult[];
  activeProjectId: string;
  onSelectProject: (project: IpAnalysisResult) => void;
  onDeleteProject: (projectId: string) => void;
  onNewProject: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  savedProjects,
  activeProjectId,
  onSelectProject,
  onDeleteProject,
  onNewProject
}) => {
  return (
    <div className="px-4 py-4 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
            <FolderKanban className="w-3 h-3 text-cyan-400" />
            <span>IP Repository</span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight mt-1">
            企劃專案案庫
          </h2>
          <p className="text-xs text-slate-400">
            已儲存的跨媒體 IP 策劃方案 ({savedProjects.length})
          </p>
        </div>

        <button
          onClick={onNewProject}
          className="p-2.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-lg shadow-cyan-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>新建企劃</span>
        </button>
      </div>

      <div className="space-y-3">
        {savedProjects.map((proj) => {
          const isActive = proj.id === activeProjectId;
          return (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                isActive
                  ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                  : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white truncate">
                      {proj.query}
                    </span>
                    {isActive && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold shrink-0">
                        目前檢視中
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                    {proj.oneLinerVerdict}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-black text-cyan-400 block">
                    {proj.overallScore} <span className="text-[9px] text-slate-500 font-normal">分</span>
                  </span>
                </div>
              </div>

              {/* Tag and Date */}
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/70 text-[10px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {proj.targetMarket}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3" />
                    {proj.createdAt}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {savedProjects.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteProject(proj.id);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                      title="刪除企劃"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <span className="text-cyan-400 font-semibold flex items-center group-hover:translate-x-0.5 transition-transform">
                    載入 <ArrowRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
