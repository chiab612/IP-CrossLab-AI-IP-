import React from 'react';
import {
  Gamepad2,
  Film,
  Youtube,
  BookOpen,
  Briefcase,
  ChevronRight,
  Target,
  Sparkles,
  DollarSign,
  Compass
} from 'lucide-react';
import { IpAnalysisResult, MediaType, MediaDirectionBase } from '../types';

interface DirectionCardsProps {
  result: IpAnalysisResult;
  onExpandDirection: (mediaType: MediaType) => void;
}

export const DirectionCards: React.FC<DirectionCardsProps> = ({
  result,
  onExpandDirection
}) => {
  const directionsList: Array<{
    type: MediaType;
    plan: MediaDirectionBase;
    icon: React.FC<{ className?: string }>;
    accentColor: string;
    borderGlow: string;
    badgeBg: string;
  }> = [
    {
      type: 'game',
      plan: result.directions.game,
      icon: Gamepad2,
      accentColor: 'text-cyan-400',
      borderGlow: 'hover:border-cyan-500/60',
      badgeBg: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60'
    },
    {
      type: 'movie',
      plan: result.directions.movie,
      icon: Film,
      accentColor: 'text-indigo-400',
      borderGlow: 'hover:border-indigo-500/60',
      badgeBg: 'bg-indigo-950/80 text-indigo-400 border-indigo-800/60'
    },
    {
      type: 'youtube',
      plan: result.directions.youtube,
      icon: Youtube,
      accentColor: 'text-rose-400',
      borderGlow: 'hover:border-rose-500/60',
      badgeBg: 'bg-rose-950/80 text-rose-400 border-rose-800/60'
    },
    {
      type: 'novel',
      plan: result.directions.novel,
      icon: BookOpen,
      accentColor: 'text-emerald-400',
      borderGlow: 'hover:border-emerald-500/60',
      badgeBg: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
    },
    {
      type: 'commercial',
      plan: result.directions.commercial,
      icon: Briefcase,
      accentColor: 'text-amber-400',
      borderGlow: 'hover:border-amber-500/60',
      badgeBg: 'bg-amber-950/80 text-amber-400 border-amber-800/60'
    }
  ];

  return (
    <section className="px-4 py-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            五大跨媒體 IP 發展方案
          </h2>
          <p className="text-[11px] text-slate-400">
            同題材 5 棲跨域轉化，點選任一卡片展開完整企劃
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {directionsList.map(({ type, plan, icon: Icon, accentColor, borderGlow, badgeBg }, index) => (
          <div
            key={type}
            className={`p-4 rounded-3xl bg-slate-950/90 border border-slate-800/90 shadow-md ${borderGlow} transition-all duration-200 flex flex-col gap-3 relative overflow-hidden`}
          >
            {/* Top Row: Tag, Type & Score */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Icon className={`w-4 h-4 ${accentColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-300">
                      {index + 1}. {plan.mediaName}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${badgeBg}`}>
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white mt-0.5 tracking-tight">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="flex items-baseline justify-end gap-0.5">
                  <span className={`text-base font-black ${accentColor}`}>
                    {plan.score}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">分</span>
                </div>
              </div>
            </div>

            {/* Core Selling Point Quote */}
            <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200 font-medium">
              <span className="text-cyan-400 font-bold mr-1">✦ 核心賣點：</span>
              {plan.coreSellingPoint}
            </div>

            {/* 4 Metadata Details Grid */}
            <div className="grid grid-cols-1 gap-1.5 text-[11px]">
              <div className="flex items-start gap-1.5 text-slate-300">
                <Target className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-400 font-medium">目標受眾：</strong>
                  {plan.targetAudience}
                </span>
              </div>

              <div className="flex items-start gap-1.5 text-slate-300">
                <Compass className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-400 font-medium">內容方向：</strong>
                  {plan.contentDirection}
                </span>
              </div>

              <div className="flex items-start gap-1.5 text-slate-300">
                <DollarSign className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-emerald-400 font-medium">商業機會：</strong>
                  {plan.commercialOpportunity}
                </span>
              </div>
            </div>

            {/* Expand Plan Button */}
            <div className="pt-2 border-t border-slate-900 flex justify-end">
              <button
                type="button"
                onClick={() => onExpandDirection(type)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <span>展開企劃</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
