import React from 'react';
import { Home, Compass, FolderKanban, User, Atom } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  hasResult: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  hasResult,
}) => {
  const navItems: Array<{ id: ActiveTab; label: string; icon: React.FC<{ className?: string }>; badge?: boolean; highlight?: boolean }> = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Matrix', icon: Compass, badge: hasResult },
    { id: 'quantum', label: 'Quantum', icon: Atom, highlight: true },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'profile', label: 'Pitch', icon: User },
  ];

  return (
    <nav className="sticky bottom-0 z-30 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/80 px-4 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
                isActive
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''} ${item.highlight && !isActive ? 'text-indigo-400' : ''}`} />
                {item.highlight && (
                  <span className="absolute -top-1.5 -right-3 text-[8px] font-bold px-1 py-0.2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full scale-90">
                    QPU
                  </span>
                )}
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 w-4 h-0.5 rounded-full bg-cyan-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
