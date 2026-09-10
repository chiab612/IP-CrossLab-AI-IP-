import React from 'react';
import { Sparkles, Layers, Zap, Award } from 'lucide-react';

interface HeaderBarProps {
  onQuickDemo: () => void;
  onOpenJudgeTour: () => void;
  sourceType?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  onQuickDemo,
  onOpenJudgeTour,
  sourceType
}) => {
  return (
    <header className="sticky top-0 z-30 px-3.5 py-2.5 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-0.5 shadow-md shadow-cyan-500/20 flex items-center justify-center shrink-0">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <Layers className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h1 className="font-extrabold tracking-tight text-xs sm:text-sm text-white truncate">
              IP CrossLab
            </h1>
            <span className="text-[8px] font-bold tracking-wider px-1 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0">
              QPU+AI
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight truncate">
            跨媒體 IP 策劃助手
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onOpenJudgeTour}
          className="flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 border border-amber-500/50 transition-all active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.15)] animate-pulse"
          title="黑客松評審 3 分鐘導覽"
        >
          <Award className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
          <span>3分鐘評審 Demo</span>
        </button>

        <button
          onClick={onQuickDemo}
          className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all active:scale-95"
        >
          <Zap className="w-3 h-3 text-cyan-400" />
          <span>Demo</span>
        </button>
      </div>
    </header>
  );
};
