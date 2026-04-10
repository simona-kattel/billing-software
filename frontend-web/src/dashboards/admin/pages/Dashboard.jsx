// src/pages/admin/Dashboard.jsx
import AdminLayout from '../components/layout/AdminLayout';
import {
  StatCard, PageHeader, SectionCard, Badge, Avatar, ProgressRow, BarChart, Button
} from '../../../components/common';
import {
  dashboardStats, revenueData, staffOnShift, lowStockItems,
  topProducts, categoryBreakdown
} from '../data/mockData';

const today = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export default function Dashboard() {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs mb-0.5" style={{ color: '#94a3b8' }}>{today}</p>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-[#0f172a]">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="secondary">↓ Export Report</Button>
            <Button variant="primary">+ Add Product</Button>
          </div>
        </div>
      </div>

      {/* Top stats row — navy for revenue/key metrics */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <StatCard label="Today's Revenue" value={dashboardStats.todayRevenue} progress={72} navy />
        <StatCard label="Total Transactions" value={dashboardStats.totalTransactions} progress={45} />
        <StatCard label="Active Customers" value={dashboardStats.activeCustomers.toLocaleString()} progress={68} />
        <StatCard label="Low Stock Items" value={dashboardStats.lowStockItems} progress={30} />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard label="Monthly Revenue" value={dashboardStats.monthlyRevenue} progress={82} navy />
        <StatCard label="Total Products" value={dashboardStats.totalProducts} progress={55} />
        <StatCard label="Staff On Shift" value={dashboardStats.staffOnShift} progress={60} />
        <StatCard label="Pending Orders" value={dashboardStats.pendingOrders} progress={20} />
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Revenue chart — bar graph, Today label, no time toggle */}
        <SectionCard
          title="Revenue — Last 14 Days"
          headerRight={<span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: '#eff6ff', color: '#1e3a5f' }}>Today</span>}
          className="col-span-2"
        >
          <div className="px-5 pt-3 pb-4">
            <BarChart data={revenueData} height={130} showToday />
            <div className="flex gap-6 mt-3">
              <div>
                <p className="text-xs uppercase" style={{ color: '#94a3b8', fontSize: '10px' }}>Avg Daily</p>
                <p className="text-sm font-semibold text-[#0f172a]">Rs 72,840</p>
              </div>
              <div>
                <p className="text-xs uppercase" style={{ color: '#94a3b8', fontSize: '10px' }}>Peak Day</p>
                <p className="text-sm font-semibold text-[#0f172a]">Rs 1,01,200</p>
              </div>
              <div>
                <p className="text-xs uppercase" style={{ color: '#94a3b8', fontSize: '10px' }}>Trend</p>
                <p className="text-sm font-semibold" style={{ color: '#16a34a' }}>▲ 14.2%</p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Right panels */}
        <div className="flex flex-col gap-4">
          {/* Staff on Shift — scrollable */}
          <SectionCard title="Staff On Shift">
            <div className="px-4 py-3 space-y-3 overflow-y-auto" style={{ maxHeight: 160 }}>
              {staffOnShift.map(s => (
                <div key={s.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={s.initials} size="sm" />
                    <div>
                      <p className="text-xs font-medium text-[#0f172a]">{s.name}</p>
                      <p className="text-xs" style={{ color: '#94a3b8' }}>{s.role} · {s.id}</p>
                    </div>
                  </div>
                  <Badge status={s.status} />
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Low Stock — scrollable */}
          <SectionCard title="Low Stock" headerRight={<span className="text-xs" style={{ color: '#94a3b8' }}>7 items</span>}>
            <div className="px-4 py-3 space-y-3 overflow-y-auto" style={{ maxHeight: 160 }}>
              {lowStockItems.map(item => (
                <div key={item.sku} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    <div>
                      <p className="text-xs font-medium text-[#0f172a]">{item.name}</p>
                      <p className="text-xs" style={{ color: '#94a3b8' }}>{item.sku}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium" style={{ color: '#dc2626' }}>{item.count} left</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Top Products — scrollable */}
        <SectionCard title="Top Products This Month">
          <div className="px-4 py-3 space-y-4 overflow-y-auto" style={{ maxHeight: 220 }}>
            {topProducts.map(p => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded bg-[#eff6ff] flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-[#0f172a]">{p.name}</p>
                      <p className="text-xs" style={{ color: '#94a3b8' }}>{p.units} · {p.revenue} revenue</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1e3a5f]">{p.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Category Breakdown — scrollable */}
        <SectionCard title="Category Breakdown">
          <div className="px-4 py-3 space-y-3 overflow-y-auto" style={{ maxHeight: 220 }}>
            {categoryBreakdown.map(c => (
              <ProgressRow key={c.name} label={c.name} value={c.revenue} pct={c.pct} />
            ))}
          </div>
        </SectionCard>
      </div>
    </AdminLayout>
  );
}
