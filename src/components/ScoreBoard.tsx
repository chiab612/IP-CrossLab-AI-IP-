import React from 'react';
import { Gamepad2, Film, Youtube, BookOpen, Briefcase, Award, TrendingUp } from 'lucide-react';
import { IpAnalysisResult, MediaType } from '../types';

interface ScoreBoardProps {
  result: IpAnalysisResult;
  onSelectMedia: (mediaType: MediaType) => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ result, onSelectMedia }) => {
  const mediaScores: Array<{
    type: MediaType;
    label: string;
    icon: React.FC<{ className?: string }>;
    score: number;
    color: string;
    borderColor: string;
    bgColor: string;
    data: { score: number; analysis: string; keyStrength: string };
  }> = [
    {
      type: 'game',
      label: '🎮 遊戲潛力',
      icon: Gamepad2,
      score: result.potentials.game.score,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-500/10',
      data: result.potentials.game
    },
    {
      type: 'movie',
      label: '🎬 電影／影集潛力',
      icon: Film,
      score: result.potentials.movie.score,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      bgColor: 'bg-indigo-500/10',
      data: result.potentials.movie
    },
    {
      type: 'youtube',
      label: '📺 YouTube 潛力',
      icon: Youtube,
      score: result.potentials.youtube.score,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/30',
      bgColor: 'bg-rose-500/10',
      data: result.potentials.youtube
    },
    {
      type: 'novel',
      label: '📚 小說／漫畫潛力',
      icon: BookOpen,
      score: result.potentials.novel.score,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
      data: result.potentials.novel
    },
    {
      type: 'commercial',
      label: '💰 商業化潛力',
      icon: Briefcase,
      score: result.potentials.commercial.score,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      bgColor: 'bg-amber-500/10',
      data: result.potentials.commercial
    }
  ];

  return (
    <section className="px-4 py-3 flex flex-col gap-3">
      {/* Top Banner: Overall IP Opportunity Score */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-700/80 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              IP Opportunity Score
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {result.overallScore}
              </span>
              <span className="text-sm font-semibold text-slate-400">/ 100</span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              整體 IP 潛力評估
            </p>
          </div>

          <div className="text-right max-w-[170px]">
            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold mb-1">
              極高商業轉化價值
            </span>
            <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
              {result.targetMarket}
            </p>
          </div>
        </div>

        {/* One-Liner AI Verdict */}
        <div className="mt-3 pt-3 border-t border-slate-800/80">
          <p className="text-xs text-slate-200 italic leading-relaxed">
            "{result.oneLinerVerdict}"
          </p>
        </div>
      </div>

      {/* 5-Media Breakdown Cards */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            五大維度深度拆解
          </h3>
          <span className="text-[10px] text-slate-400">點選直接檢視企劃</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {mediaScores.map((item) => (
            <div
              key={item.type}
              onClick={() => onSelectMedia(item.type)}
              className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 active:scale-[0.99] transition-all cursor-pointer group flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                    {item.data.keyStrength}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-sm font-black ${item.color}`}>
                    {item.score}
                  </span>
                  <span className="text-[10px] text-slate-500">/100</span>
                </div>
              </div>

              {/* Progress Track */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${item.bgColor.replace('10', '90')} bg-cyan-400`}
                  style={{ width: `${item.score}%` }}
                />
              </div>

              {/* AI Analysis Sentence */}
              <p className="text-[11px] text-slate-400 leading-snug">
                {item.data.analysis}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
