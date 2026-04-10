// src/components/common/index.jsx
// ─────────────────────────────────────────────────────────────
// Shared UI primitives used by both Admin and Cashier dashboards.
// Import from here: import { Button, Badge, Modal } from '@/components/common';
// ─────────────────────────────────────────────────────────────

// ── Button ────────────────────────────────────────────────────
// Supports both admin CSS-class style and cashier inline-tailwind style.
// variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer transition-all duration-150';
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-sm',
  };
  const variants = {
    primary:   'bg-[#111] text-white hover:bg-[#2a2a2a]',
    secondary: 'bg-white text-[#111] border border-[#ddd] hover:bg-gray-50',
    outline:   'border border-[#ddd] text-[#444] hover:border-[#999] hover:text-[#111]',
    ghost:     'text-[#666] hover:text-[#111] hover:bg-black/5',
    danger:    'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}

// ── Input ─────────────────────────────────────────────────────
export function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  readOnly = false,
  className = '',
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs text-[#999] mb-1.5 font-mono uppercase tracking-widest">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg outline-none
          focus:border-[#aaa] focus:bg-white transition-colors
          ${readOnly ? 'text-[#999] cursor-default' : 'text-[#111]'}`}
      />
    </div>
  );
}

// ── SearchInput ───────────────────────────────────────────────
export function SearchInput({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa]"
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg outline-none focus:border-[#aaa] focus:bg-white transition-colors"
      />
    </div>
  );
}

// ── Badge ─────────────────────────────────────────────────────
const badgeStyles = {
  Active:      'bg-[#dcfce7] text-[#15803d]',
  'In Stock':  'bg-[#dcfce7] text-[#15803d]',
  Connected:   'bg-[#dcfce7] text-[#15803d]',
  Online:      'bg-[#dcfce7] text-[#15803d]',
  Healthy:     'bg-[#dcfce7] text-[#15803d]',
  Paid:        'bg-[#dcfce7] text-[#15803d]',
  Received:    'bg-[#dcfce7] text-[#15803d]',
  'On Shift':  'bg-[#dbeafe] text-[#1d4ed8]',
  Admin:       'bg-[#111] text-white',
  Registered:  'bg-[#111] text-white',
  Inactive:    'bg-[#f3f4f6] text-[#6b7280]',
  Guest:       'bg-[#f3f4f6] text-[#6b7280]',
  Cashier:     'bg-[#f3f4f6] text-[#374151]',
  Pending:     'bg-[#f3f4f6] text-[#374151]',
  Expired:     'bg-[#f3f4f6] text-[#6b7280]',
  'Low Stock': 'bg-[#fef3c7] text-[#92400e]',
  Break:       'bg-[#fef3c7] text-[#92400e]',
  Refunded:    'bg-[#fee2e2] text-[#991b1b]',
  'Out of Stock': 'bg-[#fee2e2] text-[#991b1b]',
};

export function Badge({ status }) {
  const cls = badgeStyles[status] || 'bg-[#f3f4f6] text-[#6b7280]';
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${cls}`}>
      {status}
    </span>
  );
}

// ── Toggle ────────────────────────────────────────────────────
export function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
        checked ? 'bg-[#111]' : 'bg-[#ddd]'
      }`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

// ── Modal ─────────────────────────────────────────────────────
export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.45)' }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-[#111]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[#aaa] hover:text-[#555] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
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
  return (
    <div className={`bg-white rounded-xl border border-[#e8e4df] ${className}`}>
      {children}
    </div>
  );
}

// ── StatCard ──────────────────────────────────────────────────
// progress prop → renders admin-style progress bar
// sub prop      → renders cashier-style muted sub-bar
export function StatCard({ label, value, sub, progress }) {
  return (
    <Card className="p-5 flex-1">
      <p className="text-[11px] text-[#999] font-mono uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-bold text-[#111] mb-2">{value}</p>
      {progress !== undefined && (
        <div className="h-1.5 bg-[#e8e4df] rounded-full">
          <div
            className="h-full bg-[#111] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {sub && !progress && (
        <div className="h-1.5 bg-[#e8e4df] rounded-full w-2/3" />
      )}
    </Card>
  );
}

// ── SectionCard ───────────────────────────────────────────────
export function SectionCard({ title, badge, headerRight, children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-xl border overflow-hidden ${className}`}
      style={{ borderColor: '#e5e3de' }}
    >
      {(title || headerRight) && (
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: '#e5e3de' }}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-[#111]">{title}</h3>
            {badge && (
              <span className="text-xs px-2 py-0.5 bg-[#111] text-white rounded font-mono">
                {badge}
              </span>
            )}
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
      <h2 className="font-semibold text-[#111] text-sm">{title}</h2>
      {actionLabel && (
        <button
          onClick={action}
          className="text-xs text-[#999] hover:text-[#111] transition-colors"
        >
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
        {breadcrumb && <p className="text-xs mb-0.5 text-[#9a9a9a]">{breadcrumb}</p>}
        <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">{title}</h1>
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
          <tr className="border-b border-[#e5e3de]">
            {columns.map((col) => (
              <th
                key={col.key || col.label}
                className="text-left px-4 py-3 text-xs font-medium text-[#9a9a9a] uppercase tracking-wide"
                style={{ minWidth: col.width }}
              >
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
    <div
      className="flex items-center justify-between px-4 py-3 border-t"
      style={{ borderColor: '#e5e3de' }}
    >
      <p className="text-xs text-[#9a9a9a]">{label}</p>
      <div className="flex items-center gap-1">
        <button className="w-7 h-7 flex items-center justify-center rounded border text-xs border-[#e5e3de]">
          ‹
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={`w-7 h-7 flex items-center justify-center rounded text-xs font-medium ${
              p === current ? 'bg-[#111] text-white' : 'border border-[#e5e3de] text-[#666]'
            }`}
          >
            {p}
          </button>
        ))}
        <button className="w-7 h-7 flex items-center justify-center rounded border text-xs border-[#e5e3de]">
          ›
        </button>
      </div>
    </div>
  );
}

// ── Avatar ────────────────────────────────────────────────────
export function Avatar({ initials, size = 'md', color = '#1f1f1f' }) {
  const sz =
    size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-12 h-12 text-base' : 'w-9 h-9 text-sm';
  return (
    <div
      className={`${sz} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`}
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

// ── ProgressRow ───────────────────────────────────────────────
export function ProgressRow({ label, value, pct, className = '' }) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[#0a0a0a]">{label}</span>
        <span className="text-sm font-medium text-[#0a0a0a]">{value}</span>
      </div>
      <div className="h-1.5 bg-[#e8e4df] rounded-full">
        <div className="h-full bg-[#111] rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ── BarChart ──────────────────────────────────────────────────
export function BarChart({ data, height = 120, color = '#0a0a0a' }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {data.map((d, i) => {
        const pct = (d.value / max) * 100;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: `${pct}%`,
                background: pct > 90 ? color : '#e5e3de',
                minHeight: 4,
              }}
            />
            <span className="text-[10px] text-[#9a9a9a]">{d.day || d.month || d.hour}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── MiniLineChart (sparkline) ─────────────────────────────────
export function MiniLineChart({ data, height = 80, color = '#0a0a0a' }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;
  const W = 460;
  const H = height;
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
          <stop offset="0%" stopColor={color} stopOpacity="0.08" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartFill)" />
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── FilterBar ─────────────────────────────────────────────────
export function FilterBar({ inputs = [], onFilter }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {inputs.map((inp, i) => (
        <input
          key={i}
          placeholder={inp.placeholder}
          className="px-3 py-2 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg outline-none focus:border-[#aaa] transition-colors"
          style={{ maxWidth: 180 }}
        />
      ))}
      <Button variant="primary" size="md" onClick={onFilter}>
        Filter
      </Button>
    </div>
  );
}

// ── StatusBadge (alias — cashier pages use this name) ─────────────────────
// Cashier components use this name; it delegates to Badge.
export function StatusBadge({ status }) {
  return <Badge status={status} />;
}
