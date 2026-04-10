// src/components/layout/Topbar.jsx
import { currentUser } from '../../data/mockData';

export default function Topbar() {
  return (
    <header className="h-[52px] bg-[#111111] flex items-center justify-between px-5 shrink-0 border-b border-[#1e1e1e]">
      {/* Left: branding */}
      <div className="flex items-center gap-3">
        <span className="text-white font-bold text-base tracking-tight">invo</span>
        <span className="text-[#444] text-xs">|</span>
        <span className="text-[#666] text-xs font-mono tracking-widest uppercase">Cashier Terminal</span>
      </div>

      {/* Right: status + user */}
      <div className="flex items-center gap-3">
        <StatusBadge label="IoT Connected" color="#22c55e" />
        <StatusBadge label="WS Live" color="#22c55e" />
        <span className="text-[#666] text-xs">{currentUser.name} · <span className="capitalize">{currentUser.role}</span></span>
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-semibold">
          {currentUser.initials}
        </div>
      </div>
    </header>
  );
}

function StatusBadge({ label, color }) {
  return (
    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
      <span className="w-1.5 h-1.5 rounded-full status-dot" style={{ backgroundColor: color }}></span>
      <span className="text-white/70 text-xs font-mono">{label}</span>
    </div>
  );
}
