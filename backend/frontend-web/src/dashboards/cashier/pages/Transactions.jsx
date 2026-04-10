// src/pages/Transactions.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { transactions } from '../data/mockData';
import { StatusBadge } from '../../../components/common';

export default function Transactions() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const filtered = transactions.filter(t =>
    t.customer.toLowerCase().includes(search.toLowerCase()) ||
    t.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-[#94a3b8] font-mono mb-1">All Transactions</p>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#0f172a]">Transaction History</h1>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm text-[#475569] hover:border-[#bfdbfe] transition-colors bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-4">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by customer or ID..."
            className="flex-1 px-4 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none focus:border-[#1e3a5f] transition-colors"
          />
          <input
            type="date"
            className="px-3 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none text-[#94a3b8]"
          />
          <select className="px-3 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none text-[#94a3b8]">
            <option value="">All Status</option>
            <option>Paid</option>
            <option>Refunded</option>
            <option>Pending</option>
          </select>
          <input
            placeholder="Payment method"
            className="px-3 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none text-[#94a3b8] w-36"
          />
          <button className="px-5 py-2 bg-[#1e3a5f] text-white text-sm rounded-lg hover:bg-[#16324f] transition-colors font-medium">
            Apply
          </button>
          <button className="px-4 py-2 text-sm border border-[#e2e8f0] bg-white rounded-lg text-[#475569] hover:border-[#bfdbfe] transition-colors">
            Reset
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                {['TXN ID', 'Customer', 'Date & Time', 'Items', 'Payment', 'Amount', 'Status', ''].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-[10px] font-mono text-[#94a3b8] uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((txn, i) => (
                <tr
                  key={i}
                  className="border-b border-[#e2e8f0] last:border-0 hover:bg-[#eff6ff] transition-colors"
                >
                  <td className="px-5 py-3.5 text-sm font-mono text-[#475569]">{txn.id}</td>
                  <td className="px-5 py-3.5">
                    <p className="text-sm font-medium text-[#0f172a]">{txn.customer}</p>
                    {txn.phone && txn.phone !== 'Guest' && (
                      <p className="text-[11px] text-[#94a3b8] font-mono">{txn.phone}</p>
                    )}
                    {txn.phone === 'Guest' && (
                      <p className="text-[11px] text-[#94a3b8]">Guest</p>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#475569] font-mono">{txn.date}, {txn.time}</td>
                  <td className="px-5 py-3.5 text-sm text-[#475569]">{txn.items} items</td>
                  <td className="px-5 py-3.5 text-sm text-[#475569]">{txn.payment}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold font-mono text-[#0f172a]">
                    Rs {txn.amount.toLocaleString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={txn.status} />
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs text-[#94a3b8] hover:text-[#0f172a] transition-colors font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-[#e2e8f0]">
            <span className="text-xs text-[#94a3b8] font-mono">Showing 1–6 of 128 transactions</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center text-sm text-[#94a3b8] hover:text-[#0f172a] rounded">‹</button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-7 h-7 flex items-center justify-center text-sm rounded transition-colors
                    ${page === n ? 'bg-[#1e3a5f] text-white' : 'text-[#475569] hover:bg-[#f1f5f9]'}`}
                >
                  {n}
                </button>
              ))}
              <button className="w-7 h-7 flex items-center justify-center text-sm text-[#94a3b8] hover:text-[#0f172a] rounded">›</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
