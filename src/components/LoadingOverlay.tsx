import React, { useEffect, useState } from 'react';
import { Sparkles, Layers, Cpu, Compass } from 'lucide-react';

const LOADING_STEPS = [
  '正在分析創意題材語義與核心哲學精神...',
  '正在拆解 🎮 遊戲核心玩法循環與戰鬥機制...',
  '正在推演 🎬 電影三幕劇對抗與 Logline...',
  '正在構思 📺 YouTube 首集爆款開場與 CTR 縮圖...',
  '正在生成 📚 條漫長篇連載話數與讀者共鳴點...',
  '正在評估 💰 商業 IP 聯名授權與長青 Roadmap...',
  '正在彙整 IP Strategy Matrix 決策矩陣...'
];

export const LoadingOverlay: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      <div className="relative mb-6">
        {/* Glowing rings */}
        <div className="w-24 h-24 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="w-16 h-16 rounded-full border-2 border-indigo-500/30 border-b-indigo-400 animate-spin absolute inset-0 m-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
      </div>

      <div className="max-w-xs space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 animate-bounce" />
          <span>IP CrossLab AI Engine</span>
        </span>

        <h3 className="text-base font-extrabold text-white">
          跨媒體 IP 深度策劃運算中
        </h3>

        <div className="h-10 flex items-center justify-center">
          <p className="text-xs text-slate-300 font-medium transition-all duration-300">
            {LOADING_STEPS[stepIndex]}
          </p>
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 transition-all duration-500 rounded-full"
            style={{ width: `${((stepIndex + 1) / LOADING_STEPS.length) * 100}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-500">
          結合好萊塢故事開發模式與遊戲工業標準架構
        </p>
      </div>
    </div>
  );
};
