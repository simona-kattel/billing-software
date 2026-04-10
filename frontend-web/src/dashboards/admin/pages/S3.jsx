// src/pages/admin/S3.jsx  — Tax Configuration
import { useState } from 'react';
import { SettingsLayout } from './Settings';
import { Toggle } from '../../../components/common';

function SettingRow({ label, sub, children }) {
  return (
    <div
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ borderColor: '#e2e8f0' }}
    >
      <div>
        <span className="text-sm font-medium block">{label}</span>
        {sub && <span className="text-xs" style={{ color: '#94a3b8' }}>{sub}</span>}
      </div>
      {children}
    </div>
  );
}

export default function S3() {
  const [inclusive, setInclusive] = useState(false);
  const [printBreakdown, setPrintBreakdown] = useState(true);

  return (
    <SettingsLayout activeId="S3">
      <div className="px-6 py-4 border-b" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
        <h3 className="text-sm font-semibold">Tax Configuration</h3>
      </div>

      <SettingRow label="Default VAT Rate" sub="Applied to all taxable items">
        <input className="input-field" defaultValue="13%" style={{ width: 160 }} />
      </SettingRow>

      <SettingRow label="Tax Registration Number">
        <input className="input-field" defaultValue="PAN-00112233" style={{ width: 220 }} />
      </SettingRow>

      <SettingRow label="Tax Inclusive Pricing" sub="Prices include VAT by default">
        <Toggle on={inclusive} onChange={setInclusive} />
      </SettingRow>

      <SettingRow label="Print Tax Breakdown on Receipt">
        <Toggle on={printBreakdown} onChange={setPrintBreakdown} />
      </SettingRow>
    </SettingsLayout>
  );
}
