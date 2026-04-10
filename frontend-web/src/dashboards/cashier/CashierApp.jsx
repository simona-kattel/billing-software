// src/dashboards/cashier/CashierApp.jsx
// Self-contained Cashier (POS) dashboard router.
// Mounted at /cashier/* by the root App.jsx.
// All page imports are relative to this dashboard only.

import { CashierProvider, useCashier } from './context/CashierContext';

// Auth
import Login        from './pages/Login';
import Verification from './pages/Verification';

// Main pages
import Dashboard   from './pages/Dashboard';
import POS         from './pages/POS';
import Products    from './pages/Products';
import Transactions from './pages/Transactions';
import Profile     from './pages/Profile';
import Receipt     from './pages/Receipt';

// Settings sub-pages
import S1General      from './pages/S1General';
import S2BillingPOS   from './pages/S2BillingPOS';
import S3IoTDevices   from './pages/S3IoTDevices';
import S4Notifications from './pages/S4Notifications';
import S5Security     from './pages/S5Security';

const pageMap = {
  login:        Login,
  verification: Verification,
  dashboard:    Dashboard,
  pos:          POS,
  products:     Products,
  transactions: Transactions,
  profile:      Profile,
  receipt:      Receipt,
  s1:           S1General,
  s2:           S2BillingPOS,
  s3:           S3IoTDevices,
  s4:           S4Notifications,
  s5:           S5Security,
};

function CashierRouter() {
  const { currentPage } = useCashier();
  const Page = pageMap[currentPage] || Login;
  return <Page />;
}

export default function CashierApp() {
  return (
    <CashierProvider>
      <CashierRouter />
    </CashierProvider>
  );
}
