import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  isDesktopFrame: boolean;
  onToggleFrame: () => void;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  isDesktopFrame,
  onToggleFrame,
}) => {
  const currentTime = new Date().toLocaleTimeString('zh-TW', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-0 md:p-4 selection:bg-cyan-500 selection:text-white relative overflow-hidden font-sans">
      {/* Ambient background glow on desktop */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
      </div>

      {/* Desktop floating mode toggle bar */}
      <div className="hidden md:flex items-center justify-between w-full max-w-md mb-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full text-xs text-slate-400 z-50 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-200">IP CrossLab Simulator</span>
          <span className="text-slate-500 text-[10px] px-1.5 py-0.5 bg-slate-800 rounded">v1.2 MVP</span>
        </div>
        <button
          onClick={onToggleFrame}
          className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 px-2 py-0.5 rounded-full hover:bg-slate-800 transition-colors"
          title="切換手機邊框 / 滿版檢視"
        >
          {isDesktopFrame ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>滿版視野</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>手機框架</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container: either simulated smartphone or responsive sheet */}
      <div
        className={`w-full transition-all duration-300 flex flex-col relative z-10 ${
          isDesktopFrame
            ? 'max-w-[430px] h-[932px] max-h-[96vh] rounded-[48px] border-[10px] border-slate-800/90 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(6,182,212,0.15)] ring-1 ring-slate-700/50 bg-slate-900 overflow-hidden'
            : 'max-w-2xl min-h-screen md:min-h-[90vh] md:rounded-3xl border-0 md:border md:border-slate-800 bg-slate-900 shadow-2xl overflow-hidden'
        }`}
      >
        {/* Dynamic Island / Smartphone Top Bezel */}
        {isDesktopFrame && (
          <div className="w-full bg-slate-900 pt-3 pb-1 px-7 flex items-center justify-between text-[13px] font-semibold text-slate-300 select-none z-40 border-b border-slate-800/40">
            <span>{currentTime}</span>
            {/* Dynamic Pill Notch */}
            <div className="h-5 w-28 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner border border-slate-800/50">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-cyan-500/80 animate-ping" />
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-mono text-cyan-400">AI LAB</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] font-mono font-medium">5G</span>
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-4/5 bg-emerald-400 rounded-[1px]" />
              </div>
            </div>
          </div>
        )}

        {/* Scrollable App Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative scroll-smooth">
          {children}
        </div>

        {/* Mobile Home Gesture Indicator */}
        {isDesktopFrame && (
          <div className="w-full py-1.5 flex justify-center bg-slate-900 border-t border-slate-800/40 z-40">
            <div className="w-32 h-1 bg-slate-600/60 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};
