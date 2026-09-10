import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Award,
  Clock,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { IpAnalysisResult, StrategyMatrixItem, MediaType } from '../types';

interface StrategyMatrixViewProps {
  result: IpAnalysisResult;
  onSelectMedia: (mediaType: MediaType) => void;
}

export const StrategyMatrixView: React.FC<StrategyMatrixViewProps> = ({
  result,
  onSelectMedia
}) => {
  const [selectedRow, setSelectedRow] = useState<MediaType | null>(null);

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Header Banner */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400">
          <Layers className="w-3 h-3" />
          <span>IP Strategy Matrix</span>
        </div>
        <h2 className="text-xl font-black text-white tracking-tight">
          跨媒體綜合決策矩陣
        </h2>
        <p className="text-xs text-slate-400">
          針對「{result.query}」深度對比五大媒體形態的成本、難度與商業回報率
        </p>
      </div>

      {/* Strategy Comparison Matrix Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-300">
          <span>五大媒體矩陣橫向對比</span>
          <span className="text-[10px] text-slate-500 font-normal">評分 (1-10分)</span>
        </div>

        <div className="space-y-2.5">
          {result.strategyMatrix.map((item) => {
            const isSelected = selectedRow === item.mediaType;
            return (
              <div
                key={item.mediaType}
                onClick={() => setSelectedRow(isSelected ? null : item.mediaType)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{item.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      變現：{item.monetizationSpeed}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMedia(item.mediaType);
                    }}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-0.5"
                  >
                    <span>詳情</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 5-Metrics Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-3 pt-2 border-t border-slate-800/60 text-center text-[10px]">
                  <div className="bg-slate-900/60 p-1.5 rounded-lg">
                    <span className="text-slate-400 block">市場潛力</span>
                    <span className="text-cyan-400 font-bold text-xs">{item.marketPotential}/10</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded-lg">
                    <span className="text-slate-400 block">製作難度</span>
                    <span className="text-amber-400 font-bold text-xs">{item.productionDifficulty}/10</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded-lg">
                    <span className="text-slate-400 block">成本開銷</span>
                    <span className="text-rose-400 font-bold text-xs">{item.costLevel}</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded-lg">
                    <span className="text-slate-400 block">社群傳播</span>
                    <span className="text-indigo-400 font-bold text-xs">{item.socialVirality}/10</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded-lg col-span-3 sm:col-span-1">
                    <span className="text-slate-400 block">IP 延伸性</span>
                    <span className="text-emerald-400 font-bold text-xs">{item.extensibility}/10</span>
                  </div>
                </div>

                {/* Verdict Sentence */}
                <p className="text-[11px] text-slate-300 mt-2.5 pt-2 border-t border-slate-900 leading-relaxed italic">
                  💡 {item.verdict}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Development Route (Roadmap Timeline) */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-800/50 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">
                AI 推薦發展路線 (Recommended Roadmap)
              </h3>
              <p className="text-[10px] text-indigo-300">
                最大化成功率的梯次孵化落地策略
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline Steps */}
        <div className="relative pl-6 space-y-4 border-l-2 border-indigo-800/60 ml-2">
          {result.recommendedRoadmap.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-300">
                    {step.phase}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 font-semibold">
                    {step.timeline}
                  </span>
                </div>

                <h4 className="text-xs font-black text-white">
                  {step.media}
                </h4>

                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {step.action}
                </p>

                <div className="pt-2 border-t border-slate-900 grid grid-cols-1 gap-1 text-[10px]">
                  <div className="text-emerald-400">
                    <strong>預期目標：</strong> {step.expectedOutcome}
                  </div>
                  <div className="text-slate-400">
                    <strong>風險提示：</strong> {step.riskFactor}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
