// src/pages/Dashboard.jsx
import MainLayout from '../components/layout/MainLayout';
import { Card, StatCard, StatusBadge, SectionHeader } from '../../../components/common';
import { hourlyData, lowStockAlerts, topProducts, recentTransactions } from '../data/mockData';
import { useCashier } from '../context/CashierContext';

function HourlyChart() {
  const max = Math.max(...hourlyData.map(d => d.value));
  return (
    <div className="relative h-28 flex items-end gap-2 px-1">
      {hourlyData.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className={`w-full rounded-sm transition-all ${i === 4 ? 'bg-[#111]' : 'bg-[#e2ddd8]'}`}
            style={{ height: `${(d.value / max) * 100}%`, minHeight: 4 }}
          />
          <span className="text-[9px] text-[#bbb] font-mono">{d.hour}</span>
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const { setCurrentPage } = useCashier();

  return (
    <MainLayout>
      <div className="p-8 max-w-[1200px]">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-[#aaa] font-mono mb-1">Sunday, 22 March 2026 · Shift #0842</p>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#111]">Today's Overview</h1>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#ddd] rounded-lg text-sm text-[#555] hover:border-[#aaa] transition-colors bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="flex gap-4 mb-6">
          <StatCard label="Today's Revenue" value="Rs 84,210" sub />
          <StatCard label="Transactions" value="128" sub />
          <StatCard label="Avg. Basket" value="Rs 658" sub />
          <StatCard label="Refunds Today" value="3" sub />
        </div>

        {/* Middle row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Hourly Sales */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111] text-sm">Hourly Sales</h2>
              <span className="text-xs text-[#999] font-mono">This Week</span>
            </div>
            <HourlyChart />
            <p className="text-xs text-[#999] mt-3 font-mono">Peak: 12:00–1:00 PM · Rs 12,400</p>
          </Card>

          {/* Recent Transactions */}
          <Card className="p-5">
            <SectionHeader
              title="Recent Transactions"
              actionLabel="View All"
              action={() => setCurrentPage('transactions')}
            />
            <div className="space-y-3">
              {recentTransactions.map((txn, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f0ede8] flex items-center justify-center text-xs text-[#888]">
                    {txn.customer === 'Walk-in Customer' ? '📧' : txn.customer[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#111] truncate">{txn.customer}</p>
                    <p className="text-xs text-[#aaa] font-mono">{txn.id} · {txn.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#111]">Rs {txn.amount.toLocaleString()}</p>
                    <StatusBadge status={txn.status} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Low Stock Alerts */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111] text-sm">Low Stock Alerts</h2>
              <span className="text-xs text-[#aaa] font-mono">7 items</span>
            </div>
            <div className="space-y-3">
              {lowStockAlerts.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0"></span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#111]">{item.name}</p>
                    <p className="text-[11px] text-[#aaa] font-mono">{item.sku}</p>
                  </div>
                  <span className="text-xs text-[#f59e0b] font-mono font-medium">{item.left} left</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Products */}
          <Card className="p-5">
            <h2 className="font-semibold text-[#111] text-sm mb-4">Top Products Today</h2>
            <div className="space-y-4">
              {topProducts.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f0ede8] rounded-lg flex items-center justify-center text-[11px] font-mono font-bold text-[#aaa]">
                    {p.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#111]">{p.name}</p>
                    <p className="text-[11px] text-[#aaa] font-mono">{p.units} units sold</p>
                  </div>
                  <p className="text-sm font-semibold text-[#111]">Rs {p.revenue.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
