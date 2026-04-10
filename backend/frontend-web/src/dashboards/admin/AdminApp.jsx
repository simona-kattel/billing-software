// src/dashboards/admin/AdminApp.jsx
// Self-contained Admin dashboard router.
// Mounted at /admin/* by the root App.jsx.
// All page imports are relative to this dashboard only.

import { AdminProvider, useAdmin } from './context/AdminContext';

// Auth
import Login        from './pages/Login';
import Verification from './pages/Verification';

// Main pages
import Dashboard     from './pages/Dashboard';
import Products      from './pages/Products';
import Inventory     from './pages/Inventory';
import Customers     from './pages/Customers';
import Suppliers     from './pages/Suppliers';
import Staff         from './pages/Staff';
import Transaction   from './pages/Transaction';
import PurchaseOrders from './pages/PurchaseOrders';
import Reports       from './pages/Reports';
import Discounts     from './pages/Discounts';
import Profile       from './pages/Profile';
import AI            from './pages/AI';

// Settings sub-pages
import S1 from './pages/S1';
import S2 from './pages/S2';
import S3 from './pages/S3';
import s4 from './pages/s4';
import s5 from './pages/s5';
import s6 from './pages/s6';
import s7 from './pages/s7';

const pageMap = {
  login:            Login,
  verification:     Verification,
  dashboard:        Dashboard,
  products:         Products,
  inventory:        Inventory,
  customers:        Customers,
  suppliers:        Suppliers,
  staff:            Staff,
  transactions:     Transaction,
  'purchase-orders': PurchaseOrders,
  reports:          Reports,
  discounts:        Discounts,
  profile:          Profile,
  ai:               AI,
  settings:         S1,   // settings → S1 (General) by default
  S1, S2, S3, s4, s5, s6, s7,
};

function AdminRouter() {
  const { currentPage } = useAdmin();
  const Page = pageMap[currentPage] || Login;
  return <Page />;
}

export default function AdminApp() {
  return (
    <AdminProvider>
      <AdminRouter />
    </AdminProvider>
  );
}
