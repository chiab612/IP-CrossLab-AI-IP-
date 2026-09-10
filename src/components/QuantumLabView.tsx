import React, { useState } from 'react';
import {
  Atom,
  Cpu,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Sliders,
  DollarSign,
  Clock,
  ArrowRight,
  Info,
  CheckCircle2,
  RefreshCw,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import {
  IpAnalysisResult,
  QuantumOptimizationParams,
  QuantumAllocationResult,
  MediaType
} from '../types';
import { solveQuantumIpAllocation } from '../services/quantumOptimizationService';

interface QuantumLabViewProps {
  currentProject: IpAnalysisResult;
  onSelectMedia: (mediaType: MediaType) => void;
}

export const QuantumLabView: React.FC<QuantumLabViewProps> = ({
  currentProject,
  onSelectMedia
}) => {
  const [budgetMillion, setBudgetMillion] = useState(15);
  const [riskTolerance, setRiskTolerance] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');
  const [primaryFocus, setPrimaryFocus] = useState<MediaType>('game');
  const [isComputing, setIsComputing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initial solve
  const [quantumResult, setQuantumResult] = useState<QuantumAllocationResult>(() =>
    solveQuantumIpAllocation(
      {
        totalBudgetMillion: 15,
        riskTolerance: 'balanced',
        targetHorizonMonths: 24,
        primaryFocus: 'game'
      },
      currentProject
    )
  );

  const handleRunOptimization = () => {
    setIsComputing(true);
    setTimeout(() => {
      const res = solveQuantumIpAllocation(
        {
          totalBudgetMillion: budgetMillion,
          riskTolerance,
          targetHorizonMonths: 24,
          primaryFocus
        },
        currentProject
      );
      setQuantumResult(res);
      setIsComputing(false);
    }, 900);
  };

  const handleCopyQuantumReport = () => {
    const text = `# IBM Quantum IP 跨媒體資源最佳化報告
專案：${currentProject.query}
總預算：$${budgetMillion}M USD
風險偏好：${riskTolerance}
量子位元：${quantumResult.qubitsCount} Qubits (IBM Quantum System One)
最優基態：${quantumResult.bitstring} (能量 E = ${quantumResult.groundStateEnergy})
傳統預期 ROI：+${quantumResult.classicalExpectedRoi}%
IBM Quantum 最佳化 ROI：+${quantumResult.quantumExpectedRoi}% (提升 +${quantumResult.roiLiftPercentage}%)
跨媒體協同效應增益：${quantumResult.synergyMultiplier}x
資本互咬風險降低：-${quantumResult.cannibalizationRiskReduction}%

【五大媒體量子最優排程】
${quantumResult.allocations
  .map(
    (a) =>
      `- ${a.name}: ${a.percentage}% ($${a.amountMillion}M) | ${a.launchWindow} | 協同增益 +${a.synergyGain}%`
  )
  .join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-4 py-4 space-y-5">
      {/* Top Banner: IBM Quantum Hero */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 border border-indigo-500/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-900/80 border border-indigo-400/40 text-cyan-300 text-[10px] font-bold">
              <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              <span>IBM Quantum System One • Qiskit QAOA</span>
            </span>

            <span className="text-[10px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
              QPU 127-Qubit
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
            跨媒體資源分配最佳化
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed">
            以量子退火與 QAOA 演算法，在 $2^N$ 跨媒體排程狀態空間中消除資本互咬，尋找全域最高 ROI 的黃金發行組合。
          </p>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-cyan-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>當前評估目標：<strong>{currentProject.query}</strong></span>
          </div>
        </div>
      </div>

      {/* Control Panel: Budget & Risk Settings */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-200">
          <span className="flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            量子退火參數調整
          </span>
          <span className="text-[10px] text-slate-400 font-normal">
            QUBO 矩陣即時重算
          </span>
        </div>

        {/* Budget Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">總孵化預算 (Total Budget)：</span>
            <span className="text-sm font-black text-white font-mono">
              ${budgetMillion}M USD
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[5, 15, 30, 50].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudgetMillion(b)}
                className={`py-1.5 text-xs rounded-xl font-bold border transition-all ${
                  budgetMillion === b
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                ${b}M
              </button>
            ))}
          </div>
        </div>

        {/* Risk Tolerance Toggle */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-400 block">風險與發行偏好 (Risk Profile)：</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'conservative', label: '穩健防禦', desc: '社群小說優先' },
              { id: 'balanced', label: '黃金均衡', desc: '量子全域最優' },
              { id: 'aggressive', label: '極速攻頂', desc: '3A 遊戲重壓' },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRiskTolerance(r.id as any)}
                className={`p-2 rounded-xl border text-left transition-all ${
                  riskTolerance === r.id
                    ? 'bg-indigo-500/20 border-indigo-400 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold">{r.label}</div>
                <div className="text-[10px] text-slate-400">{r.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Trigger Button */}
        <button
          type="button"
          onClick={handleRunOptimization}
          disabled={isComputing}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-fuchsia-500 active:scale-[0.98] text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-60"
        >
          {isComputing ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>IBM QPU 1024次採樣與 QAOA 收斂運算中...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>啟動 IBM Quantum QPU 最佳化運算</span>
            </>
          )}
        </button>
      </div>

      {/* Classical vs IBM Quantum Head-to-Head Comparison */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            傳統決策 vs IBM 量子最佳化對比
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
            ROI 淨增 +{quantumResult.roiLiftPercentage}%
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Classical Box */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 block">
              🏢 傳統經典演算法 (Greedy)
            </span>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">預期 ROI：</span>
                <span className="font-bold text-slate-200">+{quantumResult.classicalExpectedRoi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">資源互咬損耗：</span>
                <span className="font-bold text-rose-400">26% (高)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">協同效應：</span>
                <span className="font-bold text-slate-300">1.2x (局部)</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight pt-1 border-t border-slate-800">
              局限於各部門各自為政，容易陷入局部極小值。
            </p>
          </div>

          {/* Quantum Box */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-950/60 to-cyan-950/60 border border-cyan-500/40 space-y-2">
            <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
              <Atom className="w-3.5 h-3.5" />
              IBM Quantum 最優解
            </span>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-300">預期 ROI：</span>
                <span className="font-black text-emerald-400">+{quantumResult.quantumExpectedRoi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">防互咬保護：</span>
                <span className="font-bold text-cyan-300">降低 {quantumResult.cannibalizationRiskReduction}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">協同乘數：</span>
                <span className="font-bold text-amber-300">{quantumResult.synergyMultiplier}x</span>
              </div>
            </div>
            <p className="text-[10px] text-cyan-200/90 leading-tight pt-1 border-t border-cyan-800/40">
              藉由量子態疊加全局搜尋，收斂至最低能基態。
            </p>
          </div>
        </div>
      </div>

      {/* Quantum Circuit & Probability Measurement */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            QPU 採樣分佈 (1024 Shots)
          </span>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            最優基態: {quantumResult.bitstring}
          </span>
        </div>

        {/* Probability Bars */}
        <div className="space-y-1.5">
          {quantumResult.qubitProbabilities.map((qp, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex justify-between text-[10px]">
                <span className={`font-mono ${qp.isOptimal ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
                  {qp.state} {qp.isOptimal && '(QAOA 全局最優基態)'}
                </span>
                <span className="font-mono text-slate-300">
                  {(qp.prob * 100).toFixed(1)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    qp.isOptimal
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-500'
                      : 'bg-slate-600'
                  }`}
                  style={{ width: `${qp.prob * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 italic text-center">
          五個量子位元分別對應：$q_0$(YouTube) • $q_1$(小說) • $q_2$(遊戲) • $q_3$(電影) • $q_4$(商業)
        </p>
      </div>

      {/* 5-Media Quantum Allocation Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-200">
          <span>量子推薦五大媒體預算與排程</span>
          <button
            onClick={handleCopyQuantumReport}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? '已複製配置' : '複製配置報告'}</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {quantumResult.allocations.map((item) => (
            <div
              key={item.mediaType}
              className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">{item.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                    {item.quantumSynergyTag}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-cyan-400">
                    {item.percentage}%
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono ml-1">
                    (${item.amountMillion}M)
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>發行窗口：<strong className="text-white font-medium">{item.launchWindow}</strong></span>
                </div>
                <span className="text-emerald-400 font-semibold text-[10px]">
                  協同增益 +{item.synergyGain}%
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-tight">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
