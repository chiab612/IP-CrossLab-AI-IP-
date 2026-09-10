import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Film,
  Gamepad2,
  Youtube,
  BookOpen,
  Briefcase,
  Share2,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldAlert,
  Flame,
  Clapperboard,
  Compass,
  Tag
} from 'lucide-react';
import {
  IpAnalysisResult,
  MediaType,
  MoviePlan,
  GamePlan,
  YouTubePlan,
  NovelPlan,
  CommercialPlan
} from '../types';

interface DetailedPitchModalProps {
  result: IpAnalysisResult;
  initialMediaType: MediaType;
  onClose: () => void;
  onViewRoadmap: () => void;
}

export const DetailedPitchModal: React.FC<DetailedPitchModalProps> = ({
  result,
  initialMediaType,
  onClose,
  onViewRoadmap
}) => {
  const [currentTab, setCurrentTab] = useState<MediaType>(initialMediaType);
  const [copied, setCopied] = useState(false);

  const mediaTabs: Array<{ id: MediaType; label: string; icon: React.FC<{ className?: string }> }> = [
    { id: 'movie', label: '電影／影視', icon: Film },
    { id: 'game', label: '遊戲企劃', icon: Gamepad2 },
    { id: 'youtube', label: 'YouTube', icon: Youtube },
    { id: 'novel', label: '小說／漫畫', icon: BookOpen },
    { id: 'commercial', label: '商業 IP', icon: Briefcase },
  ];

  const handleCopy = () => {
    const textToCopy = generateMarkdownPitch(result, currentTab);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end sm:justify-center p-0 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      <div className="w-full max-w-lg mx-auto bg-slate-900 border border-slate-700/80 rounded-t-[32px] sm:rounded-[32px] shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden">
        {/* Header Bar */}
        <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-slate-300">
              IP CrossLab 企劃方案詳情
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 px-2.5"
              title="複製企劃內容"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已複製' : '複製'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Media Switcher Tabs */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-950/50 border-b border-slate-800/80 overflow-x-auto no-scrollbar shrink-0">
          {mediaTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Pitch Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-slate-200 text-xs leading-relaxed">
          {currentTab === 'movie' && <MoviePitchSection plan={result.directions.movie} />}
          {currentTab === 'game' && <GamePitchSection plan={result.directions.game} />}
          {currentTab === 'youtube' && <YouTubePitchSection plan={result.directions.youtube} />}
          {currentTab === 'novel' && <NovelPitchSection plan={result.directions.novel} />}
          {currentTab === 'commercial' && <CommercialPitchSection plan={result.directions.commercial} />}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <button
            type="button"
            onClick={onViewRoadmap}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-98"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>查看整體 IP 發展路線圖 (Roadmap)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 1. Movie Section Component
function MoviePitchSection({ plan }: { plan: MoviePlan }) {
  return (
    <div className="space-y-4">
      {/* Title & Badge */}
      <div className="border-b border-slate-800 pb-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
          {plan.badge}
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">
          {plan.title}
        </h2>
        <p className="text-xs text-slate-300 italic mt-1">
          "{plan.coreSellingPoint}"
        </p>
      </div>

      {/* Logline Box */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
        <h3 className="text-xs font-bold text-indigo-400 flex items-center gap-1.5 mb-1.5">
          <Clapperboard className="w-3.5 h-3.5" />
          Logline (一句話故事梗概)
        </h3>
        <p className="text-slate-200 leading-relaxed">
          {plan.logline}
        </p>
      </div>

      {/* Story Core */}
      <div className="space-y-1.5">
        <h3 className="text-xs font-bold text-slate-300">📖 故事核心與哲學意涵</h3>
        <p className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
          {plan.storyCore}
        </p>
      </div>

      {/* Main Characters */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">👥 主要角色設定</h3>
        <div className="space-y-2">
          {plan.mainCharacters.map((char, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{char.name}</span>
                <span className="text-[10px] text-indigo-400 font-semibold">{char.role}</span>
              </div>
              <p className="text-slate-400 text-[11px]">{char.profile}</p>
              <div className="text-[11px] text-cyan-300/90 pt-1 border-t border-slate-900">
                <span className="text-slate-500 font-medium">人物弧光：</span> {char.arc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* World Setting */}
      <div className="space-y-1.5">
        <h3 className="text-xs font-bold text-slate-300">🌐 世界觀與時代舞台</h3>
        <p className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
          {plan.worldSetting}
        </p>
      </div>

      {/* Three Act Structure */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">🎭 三幕結構 (Three-Act Structure)</h3>
        <div className="space-y-2">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-indigo-400 block mb-1">第一幕 (Act I)</span>
            <p className="text-slate-300">{plan.threeActStructure.act1}</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-indigo-400 block mb-1">第二幕 (Act II)</span>
            <p className="text-slate-300">{plan.threeActStructure.act2}</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-indigo-400 block mb-1">第三幕 (Act III)</span>
            <p className="text-slate-300">{plan.threeActStructure.act3}</p>
          </div>
        </div>
      </div>

      {/* Visual Style & Target Viewers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">🎨 視覺風格</span>
          <p className="text-slate-400 text-[11px]">{plan.visualStyle}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">🎯 目標觀眾</span>
          <p className="text-slate-400 text-[11px]">{plan.targetViewers}</p>
        </div>
      </div>

      {/* Trailer Concept */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-950 border border-indigo-800/40 space-y-2">
        <h3 className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-rose-400" />
          預告片概念 (Trailer Concept)
        </h3>
        <div className="space-y-1.5 text-[11px]">
          <div>
            <strong className="text-slate-400">前 5 秒鉤子 (Hook)：</strong>
            <span className="text-slate-200">{plan.trailerConcept.hook}</span>
          </div>
          <div>
            <strong className="text-slate-400">剪輯高潮點 (Climax)：</strong>
            <span className="text-slate-200">{plan.trailerConcept.climax}</span>
          </div>
          <div>
            <strong className="text-slate-400">定格畫面 (Closing Shot)：</strong>
            <span className="text-cyan-300">{plan.trailerConcept.closingShot}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Game Section Component
function GamePitchSection({ plan }: { plan: GamePlan }) {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
          {plan.badge}
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">
          {plan.title}
        </h2>
        <p className="text-xs text-slate-300 italic mt-1">
          "{plan.coreSellingPoint}"
        </p>
      </div>

      {/* Game Concept & Genre */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-cyan-400">🎮 Game Concept</h3>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
            {plan.genre}
          </span>
        </div>
        <p className="text-slate-200 leading-relaxed">{plan.gameConcept}</p>
        <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-300">
          <strong className="text-cyan-400 font-medium">核心玩法循環：</strong> {plan.coreGameplay}
        </div>
      </div>

      {/* Player Character & World Lore */}
      <div className="grid grid-cols-1 gap-2">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">👤 玩家角色操控</span>
          <p className="text-slate-300">{plan.playerCharacter}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">📜 世界觀設定 (Lore)</span>
          <p className="text-slate-400">{plan.worldLore}</p>
        </div>
      </div>

      {/* Main Enemies */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">👹 主要敵人與首領機制</h3>
        <div className="space-y-2">
          {plan.mainEnemies.map((enemy, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{enemy.name}</span>
                <span className="text-[10px] text-cyan-400 font-semibold">{enemy.type}</span>
              </div>
              <p className="text-slate-400 text-[11px]">{enemy.mechanics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Combat System & Unique Mechanics */}
      <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 space-y-2">
        <h3 className="text-xs font-bold text-cyan-300">⚔️ 戰鬥系統與判定規則</h3>
        <p className="text-slate-200 text-xs">{plan.combatSystem}</p>
        <div className="pt-2 border-t border-cyan-900/30 space-y-1">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
            特色獨創機制
          </span>
          {plan.uniqueMechanics.map((m, idx) => (
            <div key={idx} className="text-[11px] text-slate-300 flex items-start gap-1">
              <span className="text-cyan-400">•</span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Concepts & Target Platforms */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">🗺️ 關卡概念</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {plan.levelConcepts.map((lvl, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              {lvl}
            </div>
          ))}
        </div>
        <div className="pt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-slate-400 font-medium">目標發行平台：</span>
          {plan.targetPlatforms.map((plat) => (
            <span key={plat} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
              {plat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. YouTube Section Component
function YouTubePitchSection({ plan }: { plan: YouTubePlan }) {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800">
          {plan.badge}
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">
          {plan.title}
        </h2>
        <p className="text-xs text-slate-300 italic mt-1">
          "{plan.coreSellingPoint}"
        </p>
      </div>

      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
          頻道核心定位
        </span>
        <p className="text-slate-200 text-xs font-medium">{plan.channelPositioning}</p>
      </div>

      {/* First Video Title & Hook */}
      <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-2">
        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
          第一支爆款影片企劃
        </span>
        <h4 className="text-sm font-extrabold text-white">
          {plan.firstVideoTitle}
        </h4>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
          <strong className="text-rose-400 font-medium block mb-1">⚡ 開頭 15 秒 Hook：</strong>
          "{plan.videoHook}"
        </div>
      </div>

      {/* Video Outline */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">⏱️ 影片時長大綱 (Video Outline)</h3>
        <div className="space-y-1.5">
          {plan.videoOutline.map((line, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Concept & SEO */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <span className="text-xs font-bold text-slate-300 block">🖼️ 點擊率縮圖概念 (CTR Thumbnail)</span>
        <div className="space-y-1 text-[11px] text-slate-300">
          <div><strong className="text-slate-400">畫面構圖：</strong> {plan.thumbnailConcept.visual}</div>
          <div><strong className="text-slate-400">大字文案：</strong> <span className="text-amber-400 font-bold">{plan.thumbnailConcept.textOverlay}</span></div>
          <div><strong className="text-slate-400">目標情緒：</strong> {plan.thumbnailConcept.emotion}</div>
        </div>
      </div>

      {/* Next 5 Episodes */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">📺 後續內容規劃 (Episodes Roadmap)</h3>
        <div className="space-y-1.5">
          {plan.nextEpisodes.map((ep) => (
            <div key={ep.ep} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
              <span className="text-xs font-bold text-white block">{ep.title}</span>
              <p className="text-[11px] text-slate-400">{ep.concept}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Keywords */}
      <div className="flex flex-wrap gap-1 items-center pt-2">
        <span className="text-[10px] text-slate-400 mr-1">SEO 標籤：</span>
        {plan.seoKeywords.map((k) => (
          <span key={k} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
            #{k}
          </span>
        ))}
      </div>
    </div>
  );
}

// 4. Novel Section Component
function NovelPitchSection({ plan }: { plan: NovelPlan }) {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
          {plan.badge}
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">
          {plan.title}
        </h2>
        <p className="text-xs text-slate-300 italic mt-1">
          "{plan.coreSellingPoint}"
        </p>
      </div>

      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
        <span className="text-xs font-bold text-emerald-400 block">📖 故事大綱 (Synopsis)</span>
        <p className="text-slate-200 leading-relaxed text-xs">{plan.synopsis}</p>
        <div className="pt-2 text-[11px] text-slate-400">
          <strong className="text-slate-300 font-medium">敘事視角與節奏：</strong> {plan.narrativePOV}
        </div>
      </div>

      {/* Chapter Roadmap */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">📚 連載篇章規劃</h3>
        <div className="space-y-2">
          {plan.chapterRoadmap.map((arc, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{arc.arc}</span>
                <span className="text-[10px] text-emerald-400 font-medium">{arc.chapters}</span>
              </div>
              <p className="text-slate-400 text-[11px]">{arc.keyEvent}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Art Style & Reader Appeal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">🎨 視覺美術風格</span>
          <p className="text-slate-400 text-[11px]">{plan.artStyle}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-slate-300 block mb-1">❤️ 讀者核心共鳴</span>
          <p className="text-slate-400 text-[11px]">{plan.readerAppeal}</p>
        </div>
      </div>

      {/* Merchandising Pitch */}
      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
        <span className="text-xs font-bold text-emerald-300 block mb-1">📦 實體出版與周邊賣點</span>
        <p className="text-slate-300 text-xs">{plan.merchandisingPitch}</p>
      </div>
    </div>
  );
}

// 5. Commercial Section Component
function CommercialPitchSection({ plan }: { plan: CommercialPlan }) {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
          {plan.badge}
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">
          {plan.title}
        </h2>
        <p className="text-xs text-slate-300 italic mt-1">
          "{plan.coreSellingPoint}"
        </p>
      </div>

      {/* Markets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-amber-400 text-xs block mb-1">🎯 目標市場</span>
          <p className="text-slate-300 text-xs">{plan.targetMarket}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-bold text-amber-400 text-xs block mb-1">👥 目標消費族群</span>
          <p className="text-slate-300 text-xs">{plan.targetDemographic}</p>
        </div>
      </div>

      {/* Brand Collabs */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-300">🤝 品牌跨界合作方向</h3>
        <div className="space-y-1.5">
          {plan.brandCollabDirections.map((b, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Merchandising & Licensing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
          <span className="font-bold text-slate-300 text-xs block">🎁 商品化衍生品</span>
          {plan.merchandisingDirections.map((m, idx) => (
            <p key={idx} className="text-slate-400 text-[11px]">• {m}</p>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
          <span className="font-bold text-slate-300 text-xs block">📜 授權拓銷方向</span>
          {plan.licensingDirections.map((l, idx) => (
            <p key={idx} className="text-slate-400 text-[11px]">• {l}</p>
          ))}
        </div>
      </div>

      {/* Commercial Roadmap */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-amber-400">🚀 IP 商業化 Roadmap 5階段演化</h3>
        <div className="space-y-2">
          {plan.commercialRoadmap.map((step, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-white text-xs">{step.stage} - {step.phase}</span>
                </div>
                <p className="text-slate-300 text-[11px] mt-0.5">{step.action}</p>
                <div className="text-[10px] text-emerald-400 font-medium mt-1">
                  關鍵指標：{step.keyMetric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function generateMarkdownPitch(result: IpAnalysisResult, currentTab: MediaType): string {
  const plan = result.directions[currentTab];
  return `# 【IP CrossLab 企劃案】${plan.title}
- 題材：${result.query}
- 總評分：${result.overallScore}/100
- 媒體類型：${plan.mediaName} (${plan.badge})
- 核心賣點：${plan.coreSellingPoint}
- 目標受眾：${plan.targetAudience}
- 商業機會：${plan.commercialOpportunity}
- 產生時間：${result.createdAt}

--- 由 IP CrossLab AI 跨媒體 IP 企劃助手自動生成 ---`;
}
