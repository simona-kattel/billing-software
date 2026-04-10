// src/pages/admin/s4.jsx  — Role Permissions
import { useState } from 'react';
import { SettingsLayout } from './Settings';
import { Toggle } from '../../../components/common';

const permissions = [
  { id: 'refunds', label: 'Cashier — Can process refunds', sub: null, default: true },
  { id: 'discounts', label: 'Cashier — Can apply discounts', sub: null, default: true },
  { id: 'voids', label: 'Cashier — Can void transactions', sub: 'Requires supervisor PIN', default: true },
];

export default function s4() {
  const [perms, setPerms] = useState(
    Object.fromEntries(permissions.map(p => [p.id, p.default]))
  );

  return (
    <SettingsLayout activeId="s4">
      <div className="px-6 py-4 border-b" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
        <h3 className="text-sm font-semibold">Role Permissions</h3>
        <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>Control what each role can access.</p>
      </div>

      {permissions.map(p => (
        <div
          key={p.id}
          className="flex items-center justify-between px-6 py-4 border-b last:border-0"
          style={{ borderColor: '#e2e8f0' }}
        >
          <div>
            <span className="text-sm font-medium block">{p.label}</span>
            {p.sub && <span className="text-xs" style={{ color: '#94a3b8' }}>{p.sub}</span>}
          </div>
          <Toggle
            on={perms[p.id]}
            onChange={val => setPerms(prev => ({ ...prev, [p.id]: val }))}
          />
        </div>
      ))}
    </SettingsLayout>
  );
}
