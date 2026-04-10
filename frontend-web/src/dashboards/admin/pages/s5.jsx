// src/pages/admin/s5.jsx  — Admin Alerts / Notifications
import { useState } from 'react';
import { SettingsLayout } from './Settings';
import { Toggle } from '../../../components/common';

const alerts = [
  { id: 'daily_revenue', label: 'Daily Revenue Summary Email', sub: null, default: true },
  { id: 'low_stock', label: 'Low Stock Alerts', sub: null, default: true },
  { id: 'large_refund', label: 'Large Refund Notifications', sub: 'Refunds above Rs 1,000', default: true },
  { id: 'new_customer', label: 'New Customer Registrations', sub: null, default: false },
  { id: 'ai_forecast', label: 'AI Forecast Ready', sub: 'Notify when new forecast is generated', default: true },
];

export default function s5() {
  const [states, setStates] = useState(
    Object.fromEntries(alerts.map(a => [a.id, a.default]))
  );

  return (
    <SettingsLayout activeId="s5">
      <div className="px-6 py-4 border-b" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
        <h3 className="text-sm font-semibold">Admin Alerts</h3>
      </div>

      {alerts.map(a => (
        <div
          key={a.id}
          className="flex items-center justify-between px-6 py-4 border-b last:border-0"
          style={{ borderColor: '#e2e8f0' }}
        >
          <div>
            <span className="text-sm font-medium block">{a.label}</span>
            {a.sub && <span className="text-xs" style={{ color: '#94a3b8' }}>{a.sub}</span>}
          </div>
          <Toggle
            on={states[a.id]}
            onChange={val => setStates(prev => ({ ...prev, [a.id]: val }))}
          />
        </div>
      ))}
    </SettingsLayout>
  );
}
