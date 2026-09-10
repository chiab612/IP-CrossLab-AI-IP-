import React, { useState } from 'react';
import { Sparkles, ArrowRight, Lightbulb, Compass, Award, Atom, Zap } from 'lucide-react';
import { PRESET_IDEAS } from '../data/demoData';

interface HeroSearchProps {
  onStartAnalysis: (query: string, market: string) => void;
  isLoading: boolean;
  initialQuery?: string;
  onOpenJudgeTour?: () => void;
  onOpenQuantumTab?: () => void;
}

const TARGET_MARKET_OPTIONS = [
  '全方位跨媒體',
  '影視優先 (院線/串流)',
  '遊戲為主 (3A/Steam/手遊)',
  '商業變現 (潮玩/品牌授權)',
  '東亞文化圈 (中日韓)',
  '全球歐美市場'
];

export const HeroSearch: React.FC<HeroSearchProps> = ({
  onStartAnalysis,
  isLoading,
  initialQuery = '',
  onOpenJudgeTour,
  onOpenQuantumTab
}) => {
  const [query, setQuery] = useState(initialQuery || '宮本武藏 × 五輪書 × 日本妖怪');
  const [selectedMarket, setSelectedMarket] = useState('全方位跨媒體');
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    onStartAnalysis(query.trim(), selectedMarket);
  };

  const handleSelectPreset = (presetText: string) => {
    setQuery(presetText);
    onStartAnalysis(presetText, selectedMarket);
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-4">
      {/* Hero Header Area */}
      <div className="text-center space-y-2 pt-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI + IBM Quantum Cross-Media IP Incubator</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          IP CrossLab
        </h1>

        <p className="text-xs sm:text-sm font-medium text-slate-300 max-w-sm mx-auto leading-relaxed">
          把一個創意，探索成<span className="text-cyan-400 font-bold">遊戲</span>、
          <span className="text-indigo-400 font-bold">電影</span>、
          <span className="text-rose-400 font-bold">YouTube</span>、
          <span className="text-emerald-400 font-bold">小說</span>與
          <span className="text-amber-400 font-bold">商業 IP</span>。
        </p>
      </div>

      {/* Top Hackathon Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Judge Tour Fast Trigger */}
        {onOpenJudgeTour && (
          <button
            type="button"
            onClick={onOpenJudgeTour}
            className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 border border-amber-500/50 hover:border-amber-400 text-left transition-all group flex items-center justify-between shadow-md active:scale-98"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/30 text-amber-300 border border-amber-500/40 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-amber-200 block">
                  🏆 評審專屬：3 分鐘 Demo 導覽
                </span>
                <span className="text-[10px] text-amber-300/80">
                  一鍵速覽痛點、五棲企劃與量子排程
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Quantum Optimization Fast Trigger */}
        {onOpenQuantumTab && (
          <button
            type="button"
            onClick={onOpenQuantumTab}
            className="p-3 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-cyan-950/80 border border-indigo-500/40 hover:border-cyan-400/60 text-left transition-all group flex items-center justify-between shadow-md active:scale-98"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/30 text-cyan-300 border border-indigo-500/40 flex items-center justify-center shrink-0">
                <Atom className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-white block">
                  ⚛️ IBM Quantum 資源分配
                </span>
                <span className="text-[10px] text-cyan-300/80">
                  Qiskit QAOA 消除資本互咬
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* 30-Second Hackathon Explainer Banner: Before vs After Toggle */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800/90 border border-slate-800 rounded-2xl p-3.5 text-xs shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            30秒理解產品價值 (Before / After)
          </span>
          <button
            type="button"
            onClick={() => setShowBeforeAfter(!showBeforeAfter)}
            className="text-[11px] text-cyan-400 hover:underline font-medium"
          >
            {showBeforeAfter ? '收合解說' : '展開對比'}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-red-900/30">
            <span className="font-bold text-red-400 block mb-1">❌ Before 傳統困境</span>
            <p className="text-slate-400 leading-snug">
              只有一句模糊靈感，跨媒體改編成本高、缺乏各載體專業企劃、商業方向不明確。
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-700/40">
            <span className="font-bold text-cyan-300 block mb-1">✅ After IP CrossLab</span>
            <p className="text-slate-300 leading-snug">
              一鍵生成 5 棲跨媒體完整企劃、IP 潛力評分矩陣與長線商業化 Roadmap！
            </p>
          </div>
        </div>
      </div>

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>輸入你的創意靈感</span>
            <span className="text-[10px] text-slate-400 font-normal">支援多元跨界題材</span>
          </label>

          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="輸入你的創意，例如：宮本武藏 × 五輪書 × 日本妖怪"
              rows={3}
              className="w-full px-3.5 py-3 rounded-2xl bg-slate-950/90 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-100 placeholder-slate-500 text-sm leading-relaxed resize-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Target Market / Focus Tag Selector */}
        <div className="space-y-1.5">
          <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            選擇目標市場／重點方向
          </span>
          <div className="flex flex-wrap gap-1.5">
            {TARGET_MARKET_OPTIONS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMarket(m)}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                  selectedMarket === m
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-semibold'
                    : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Analyze Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-fuchsia-500 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>AI 跨媒體深入分析中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>開始分析</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Preset Ideas Suggestions */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>點選範例快速體驗：</span>
        </div>

        <div className="flex flex-col gap-2">
          {PRESET_IDEAS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectPreset(item.title)}
              className="text-left p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all group flex items-start justify-between gap-2"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                    {item.title}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors mt-1 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
