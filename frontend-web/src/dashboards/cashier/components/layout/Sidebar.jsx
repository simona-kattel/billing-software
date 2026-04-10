// src/components/layout/Sidebar.jsx
import { useCashier } from '../../context/CashierContext';
import logo from '../../../../assets/Full logo.png';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: DashIcon },
  { id: 'pos', label: 'POS Billing', icon: POSIcon },
  { id: 'transactions', label: 'Transactions', icon: TxnIcon },
  { id: 'products', label: 'Products', icon: ProductsIcon },
];

const bottomItems = [
  { id: 'profile', label: 'My Profile', icon: ProfileIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
  { id: 'logout', label: 'Log Out', icon: LogoutIcon },
];

function DashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}
function POSIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
    </svg>
  );
}
function TxnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
    </svg>
  );
}
function ProductsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}

export default function Sidebar() {
  const { currentPage, setCurrentPage } = useCashier();

  const handleNav = (id) => {
    if (id === 'logout') {
      setCurrentPage('login');
      return;
    }
    if (id === 'settings') {
      setCurrentPage('s1');
      return;
    }
    setCurrentPage(id);
  };

  return (
    <aside className="w-[210px] min-h-screen bg-[#111111] flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-5 pt-5 pb-4">
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <InvoLogo />
          </div>
        </button>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 pt-2">
        <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest px-2 mb-2">Main</p>
        <ul className="space-y-0.5">
          {navItems.map(item => {
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                    ${isActive
                      ? 'bg-white/10 text-white'
                      : 'text-[#888] hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#666]'}>
                    <item.icon />
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* IoT Device Status */}
      <div className="mx-3 mb-3 bg-[#1c1c1c] rounded-lg px-3 py-3">
        <p className="text-[10px] text-[#555] font-mono uppercase tracking-widest mb-1.5">IoT Device</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] status-dot"></span>
          <span className="text-[#888] text-xs font-mono">ESP32 · Active</span>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="px-3 pb-5 border-t border-[#1e1e1e] pt-3">
        <ul className="space-y-0.5">
          {bottomItems.map(item => {
            const isActive = currentPage === item.id || (item.id === 'settings' && currentPage?.startsWith('s'));
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm
                    ${isActive
                      ? 'bg-white/10 text-white'
                      : item.id === 'logout'
                        ? 'text-[#666] hover:text-red-400 hover:bg-red-500/5'
                        : 'text-[#888] hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span>
                    <item.icon />
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function InvoLogo() {
  return (
                   <img src={logo} alt="Logo" className="w-38 h-auto" />
  );
}
