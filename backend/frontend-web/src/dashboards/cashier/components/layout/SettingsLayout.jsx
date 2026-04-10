// src/components/layout/SettingsLayout.jsx
import MainLayout from './MainLayout';
import { useCashier } from '../../context/CashierContext';
import { Toggle } from '../../../../components/common';

const settingsTabs = [
  { id: 'General', icon: '⊞' },
  { id: 'Billing & POS', icon: '⊙' },
  { id: 'IoT Devices', icon: '⊙' },
  { id: 'Notifications', icon: '⊟' },
  { id: 'Security', icon: '⊟' },
];

export function SettingsSection({ title, description, children }) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden mb-4">
      <div className="px-6 py-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <h3 className="font-semibold text-[#0f172a] text-sm">{title}</h3>
        {description && <p className="text-xs text-[#94a3b8] mt-0.5">{description}</p>}
      </div>
      <div className="divide-y divide-[#e2e8f0]">
        {children}
      </div>
    </div>
  );
}

export function SettingsRow({ label, description, children }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>
        <p className="text-sm font-medium text-[#0f172a]">{label}</p>
        {description && <p className="text-xs text-[#94a3b8] mt-0.5">{description}</p>}
      </div>
      <div className="ml-8 shrink-0">
        {children}
      </div>
    </div>
  );
}

export default function SettingsLayout({ children }) {
  const { settingsTab, setSettingsTab } = useCashier();

  const tabToPage = {
    'General': 's1',
    'Billing & POS': 's2',
    'IoT Devices': 's3',
    'Notifications': 's4',
    'Security': 's5',
  };

  const { setCurrentPage } = useCashier();

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-[#94a3b8] font-mono mb-1">System Preferences</p>
          <h1 className="text-2xl font-bold text-[#0f172a]">Settings</h1>
        </div>

        <div className="flex gap-6">
          {/* Sidebar tabs */}
          <div className="w-48 shrink-0">
            <nav className="space-y-0.5">
              {settingsTabs.map(tab => {
                const isActive = settingsTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSettingsTab(tab.id);
                      setCurrentPage(Object.keys(tabToPage).indexOf(tab.id) === 0 ? 's1' :
                        Object.keys(tabToPage).indexOf(tab.id) === 1 ? 's2' :
                        Object.keys(tabToPage).indexOf(tab.id) === 2 ? 's3' :
                        Object.keys(tabToPage).indexOf(tab.id) === 3 ? 's4' : 's5');
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all text-left
                      ${isActive ? 'bg-[#eff6ff] border border-[#bfdbfe] text-[#1e3a5f] font-semibold' : 'text-[#94a3b8] hover:text-[#1e3a5f] hover:bg-[#f0f9ff]'}`}
                  >
                    <span className="text-[#94a3b8]">
                      {tab.id === 'General' && <GridIcon />}
                      {tab.id === 'Billing & POS' && <ClockIcon />}
                      {tab.id === 'IoT Devices' && <CircleIcon />}
                      {tab.id === 'Notifications' && <BellIcon />}
                      {tab.id === 'Security' && <ShieldIcon />}
                    </span>
                    {tab.id}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            {children}

            {/* Footer buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button className="px-5 py-2 border border-[#e2e8f0] bg-white rounded-lg text-sm text-[#475569] hover:border-[#bfdbfe] transition-colors">
                Discard
              </button>
              <button className="px-5 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm hover:bg-[#16324f] transition-colors font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function GridIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
}
function ClockIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function CircleIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>;
}
function BellIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
}
function ShieldIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
