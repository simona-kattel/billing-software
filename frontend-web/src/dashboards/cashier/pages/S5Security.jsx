// src/pages/S5Security.jsx
import { useState } from 'react';
import SettingsLayout, { SettingsSection, SettingsRow } from '../components/layout/SettingsLayout';
import { Toggle } from '../../../components/common';

function SessionRow({ icon, name, sub, isCurrent, onRevoke }) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-[#f5f4f0] last:border-0">
      <div className="w-9 h-9 rounded-lg bg-[#f0ede8] flex items-center justify-center text-sm shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#111]">{name}</p>
        <p className="text-xs text-[#aaa] font-mono">{sub}</p>
      </div>
      {isCurrent ? (
        <span className="text-[10px] font-mono bg-[#f0ede8] text-[#888] px-2.5 py-1 rounded">Current</span>
      ) : (
        <button
          onClick={onRevoke}
          className="text-[10px] font-mono border border-[#ddd] text-[#555] px-2.5 py-1 rounded hover:border-red-300 hover:text-red-500 transition-colors"
        >
          Revoke
        </button>
      )}
    </div>
  );
}

export default function S5Security() {
  const [requirePinVoid, setRequirePinVoid] = useState(true);
  const [requirePinRefund, setRequirePinRefund] = useState(true);

  return (
    <SettingsLayout>
      <SettingsSection title="Session & Access Control">
        <SettingsRow label="Auto Logout (Idle)" description="Lock terminal after inactivity">
          <div className="w-36 px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg text-[#aaa]" />
        </SettingsRow>
        <SettingsRow label="Require PIN for Void" description="Supervisor PIN needed to void orders">
          <Toggle checked={requirePinVoid} onChange={setRequirePinVoid} />
        </SettingsRow>
        <SettingsRow label="Require PIN for Refunds">
          <Toggle checked={requirePinRefund} onChange={setRequirePinRefund} />
        </SettingsRow>
        <SettingsRow label="Audit Log Retention">
          <div className="w-36 px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg text-[#aaa]" />
        </SettingsRow>
      </SettingsSection>

      <SettingsSection title="Active Sessions">
        <SessionRow
          icon="💻"
          name="Current Session — Chrome · Windows 11"
          sub="103.22.18.x · Kathmandu, NP · 22 Mar 2026, 08:14"
          isCurrent
        />
        <SessionRow
          icon="📱"
          name="Mobile App — React Native · Android"
          sub="192.168.1.xx · 18 Mar 2026, 11:40"
          isCurrent={false}
          onRevoke={() => {}}
        />
      </SettingsSection>
    </SettingsLayout>
  );
}
