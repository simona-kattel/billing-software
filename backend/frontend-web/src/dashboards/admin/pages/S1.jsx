// src/pages/admin/S1.jsx  — General > Display & Appearance
import { SettingsLayout } from './Settings';

function SettingRow({ label, children }) {
  return (
    <div
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ borderColor: '#e2e8f0' }}
    >
      <span className="text-sm font-medium">{label}</span>
      {children}
    </div>
  );
}

function FakeSelect({ placeholder = '···' }) {
  return (
    <div
      className="px-3 py-1.5 rounded-lg border text-sm flex items-center gap-2"
      style={{ borderColor: '#e2e8f0', minWidth: 160, color: '#94a3b8' }}
    >
      {placeholder}
      <svg className="ml-auto" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function S1() {
  return (
    <SettingsLayout activeId="S1">
      {/* Section header */}
      <div className="px-6 py-4 border-b" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
        <h3 className="text-sm font-semibold">Display & Appearance</h3>
      </div>

      <SettingRow label="Language">
        <FakeSelect placeholder="English (EN)" />
      </SettingRow>

      <SettingRow label="Date Format">
        <FakeSelect placeholder="DD/MM/YYYY" />
      </SettingRow>

      <SettingRow label="Theme">
        <FakeSelect placeholder="Light" />
      </SettingRow>

      <SettingRow label="Currency Symbol">
        <FakeSelect placeholder="Rs (NPR)" />
      </SettingRow>
    </SettingsLayout>
  );
}
