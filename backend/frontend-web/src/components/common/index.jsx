// src/components/common/index.jsx
// Shared UI primitives — Navy Blue theme

// ── Button ────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', onClick, disabled = false, className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer transition-all duration-150';
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-3 text-sm' };
  const variants = {
    primary:   'bg-[#1e3a5f] text-white hover:bg-[#16324f] hover:shadow-[0_4px_12px_rgba(30,58,95,0.35)] hover:scale-[1.03]',
    secondary: 'bg-white text-[#0f172a] border border-[#e2e8f0] hover:bg-[#eff6ff] hover:text-[#1e3a5f] hover:border-[#bfdbfe]',
    outline:   'border border-[#e2e8f0] text-[#475569] hover:bg-[#eff6ff] hover:text-[#1e3a5f] hover:border-[#bfdbfe]',
    ghost:     'text-[#475569] hover:text-[#0f172a] hover:bg-black/5',
    danger:    'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100',
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

// ── Input ─────────────────────────────────────────────────────
export function Input({ label, type = 'text', value, onChange, placeholder, readOnly = false, className = '' }) {
  return (
    <div className={className}>
      {label && <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono uppercase tracking-widest">{label}</label>}
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder} readOnly={readOnly}
        className={`w-full px-3 py-2.5 text-sm bg-[#f8fafc] border border-[#e2e8f0] rounded-lg outline-none focus:border-[#1e3a5f] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,58,95,0.1)] transition-all ${readOnly ? 'text-[#94a3b8] cursor-default' : 'text-[#0f172a]'}`}
      />
    </div>
  );
}

// ── SearchInput ───────────────────────────────────────────────
export function SearchInput({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 text-sm bg-[#f8fafc] border border-[#e2e8f0] rounded-lg outline-none focus:border-[#1e3a5f] focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,58,95,0.1)] transition-all"
      />
    </div>
  );
}

// ── Badge ─────────────────────────────────────────────────────
const badgeStyles = {
  Active:         'bg-[#dcfce7] text-[#15803d]',
  'In Stock':     'bg-[#dcfce7] text-[#15803d]',
  Connected:      'bg-[#dcfce7] text-[#15803d]',
  Online:         'bg-[#dcfce7] text-[#15803d]',
  Healthy:        'bg-[#dcfce7] text-[#15803d]',
  Paid:           'bg-[#dcfce7] text-[#15803d]',
  Received:       'bg-[#dcfce7] text-[#15803d]',
  'On Shift':     'bg-[#dbeafe] text-[#1d4ed8]',
  Admin:          'bg-[#1e3a5f] text-white',
  Registered:     'bg-[#1e3a5f] text-white',
  Inactive:       'bg-[#f3f4f6] text-[#6b7280]',
  Guest:          'bg-[#f3f4f6] text-[#6b7280]',
  Cashier:        'bg-[#f3f4f6] text-[#374151]',
  Pending:        'bg-[#fef3c7] text-[#92400e]',
  Expired:        'bg-[#f3f4f6] text-[#6b7280]',
  'Low Stock':    'bg-[#fef3c7] text-[#92400e]',
  Break:          'bg-[#fef3c7] text-[#92400e]',
  Refunded:       'bg-[#fee2e2] text-[#991b1b]',
  'Out of Stock': 'bg-[#fee2e2] text-[#991b1b]',
};

export function Badge({ status }) {
  const cls = badgeStyles[status] || 'bg-[#f3f4f6] text-[#6b7280]';
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{status}</span>;
}

// ── Toggle ────────────────────────────────────────────────────
export function Toggle({ checked, onChange, on }) {
  // Support both `checked` (new) and `on` (legacy) props
  const isOn = checked !== undefined ? checked : (on !== undefined ? on : false);
  return (
    <button
      onClick={() => onChange && onChange(!isOn)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${isOn ? 'bg-[#1e3a5f]' : 'bg-[#cbd5e1]'}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${isOn ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </button>
  );
}

// ── Modal ─────────────────────────────────────────────────────
export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-[#0f172a]">{title}</h3>
          <button onClick={onClose} className="text-[#94a3b8] hover:text-[#475569] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────
export function Card({ children, className = '' }) {
  return <div className={`bg-white rounded-xl border border-[#e2e8f0] ${className}`}>{children}</div>;
}

// ── StatCard ──────────────────────────────────────────────────
export function StatCard({ label, value, sub, progress, navy = false }) {
  if (navy) {
    return (
      <div className="p-5 flex-1 rounded-xl border border-[#1e3a5f] transition-all duration-200 cursor-default"
        style={{ background: '#1e3a5f' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#16324f'; e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,95,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#1e3a5f'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
      >
        <p className="text-[11px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</p>
        <p className="text-2xl font-bold text-white mb-2">{value}</p>
        {progress !== undefined && (
          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <div className="h-full rounded-full" style={{ width: `${progress}%`, background: 'rgba(255,255,255,0.8)' }} />
          </div>
        )}
      </div>
    );
  }
  return (
    <Card className="p-5 flex-1 transition-all duration-200 cursor-default hover:shadow-[0_8px_24px_rgba(30,58,95,0.12)] hover:-translate-y-0.5 hover:scale-[1.01]">
      <p className="text-[11px] text-[#94a3b8] font-mono uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-bold text-[#0f172a] mb-2">{value}</p>
      {progress !== undefined && (
        <div className="h-1.5 bg-[#e2e8f0] rounded-full">
          <div className="h-full bg-[#1e3a5f] rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}
      {sub && !progress && <div className="h-1.5 bg-[#e2e8f0] rounded-full w-2/3" />}
    </Card>
  );
}

// ── SectionCard ───────────────────────────────────────────────
export function SectionCard({ title, badge, headerRight, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-[0_6px_20px_rgba(30,58,95,0.08)] ${className}`} style={{ borderColor: '#e2e8f0' }}>
      {(title || headerRight) && (
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-[#0f172a]">{title}</h3>
            {badge && <span className="text-xs px-2 py-0.5 bg-[#1e3a5f] text-white rounded font-mono">{badge}</span>}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </div>
  );
}

// ── SectionHeader ─────────────────────────────────────────────
export function SectionHeader({ title, action, actionLabel }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-semibold text-[#0f172a] text-sm">{title}</h2>
      {actionLabel && (
        <button onClick={action} className="text-xs text-[#94a3b8] hover:text-[#1e3a5f] transition-colors">
          {actionLabel} →
        </button>
      )}
    </div>
  );
}

// ── PageHeader ────────────────────────────────────────────────
export function PageHeader({ breadcrumb, title, actions }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        {breadcrumb && <p className="text-xs mb-0.5 text-[#94a3b8]">{breadcrumb}</p>}
        <h1 className="text-2xl font-semibold tracking-tight text-[#0f172a]">{title}</h1>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

// ── DataTable ─────────────────────────────────────────────────
export function DataTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#e2e8f0]">
            {columns.map((col) => (
              <th key={col.key || col.label} className="text-left px-4 py-3 text-xs font-medium text-[#94a3b8] uppercase tracking-wide" style={{ minWidth: col.width }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((row, i) => renderRow(row, i))}</tbody>
      </table>
    </div>
  );
}

// ── Pagination ────────────────────────────────────────────────
export function Pagination({ current = 1, total = 1, label = '' }) {
  const pages = Array.from({ length: Math.min(total, 3) }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t" style={{ borderColor: '#e2e8f0' }}>
      <p className="text-xs text-[#94a3b8]">{label}</p>
      <div className="flex items-center gap-1">
        <button className="w-7 h-7 flex items-center justify-center rounded border text-xs border-[#e2e8f0] hover:bg-[#eff6ff] hover:border-[#bfdbfe] hover:text-[#1e3a5f] transition-all">‹</button>
        {pages.map((p) => (
          <button key={p} className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium transition-all ${p === current ? 'bg-[#1e3a5f] text-white' : 'border border-[#e2e8f0] text-[#475569] hover:bg-[#eff6ff] hover:text-[#1e3a5f]'}`}>{p}</button>
        ))}
        <button className="w-7 h-7 flex items-center justify-center rounded border text-xs border-[#e2e8f0] hover:bg-[#eff6ff] hover:border-[#bfdbfe] hover:text-[#1e3a5f] transition-all">›</button>
      </div>
    </div>
  );
}

// ── Avatar ────────────────────────────────────────────────────
export function Avatar({ initials, size = 'md', color = '#1e3a5f' }) {
  const sz = size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-12 h-12 text-base' : 'w-9 h-9 text-sm';
  return (
    <div className={`${sz} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`} style={{ background: color }}>
      {initials}
    </div>
  );
}

// ── ProgressRow ───────────────────────────────────────────────
export function ProgressRow({ label, value, pct, className = '' }) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[#0f172a]">{label}</span>
        <span className="text-sm font-medium text-[#0f172a]">{value}</span>
      </div>
      <div className="h-1.5 bg-[#e2e8f0] rounded-full">
        <div className="h-full bg-[#1e3a5f] rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ── BarChart ──────────────────────────────────────────────────
export function BarChart({ data, height = 120, color = '#1e3a5f', showToday = false }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value));
  const todayIdx = data.length - 1;
  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {data.map((d, i) => {
        const pct = (d.value / max) * 100;
        const isToday = showToday && i === todayIdx;
        const isHighlight = pct > 90 || isToday;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
            <div
              className="w-full rounded-sm transition-all duration-200 group-hover:opacity-90 chart-bar"
              style={{
                height: `${pct}%`,
                background: isToday ? '#1e3a5f' : isHighlight ? '#1e3a5f' : '#bfdbfe',
                minHeight: 4,
                animationDelay: `${i * 0.04}s`,
              }}
            />
            <span className={`text-[10px] ${isToday ? 'text-[#1e3a5f] font-semibold' : 'text-[#94a3b8]'}`}>
              {isToday ? 'Today' : (d.day || d.month || d.hour)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── MiniLineChart (sparkline) ─────────────────────────────────
export function MiniLineChart({ data, height = 80, color = '#1e3a5f' }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;
  const W = 460; const H = height;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((d.value - min) / range) * (H - 10) - 5;
    return `${x},${y}`;
  });
  const polyline = pts.join(' ');
  const areaPoints = `0,${H} ${polyline} ${W},${H}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height }}>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartFill)" />
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// ── FilterBar ─────────────────────────────────────────────────
export function FilterBar({ inputs = [], onFilter }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {inputs.map((inp, i) => (
        <input key={i} placeholder={inp.placeholder} className="input-field" style={{ maxWidth: 180 }} />
      ))}
      <Button variant="primary" size="md" onClick={onFilter}>Filter</Button>
    </div>
  );
}

// ── StatusBadge ───────────────────────────────────────────────
export function StatusBadge({ status }) { return <Badge status={status} />; }
