// src/pages/admin/Staff.jsx
import AdminLayout from '../components/layout/AdminLayout';
import { PageHeader, Badge, Button, StatCard, Avatar, Pagination } from '../../../components/common';
import { staff } from '../data/mockData';

export default function Staff() {
  return (
    <AdminLayout>
      <PageHeader
        breadcrumb="User & Role Management"
        title="Staff"
        actions={<Button variant="primary">+ Add Staff</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard label="Total Staff" value="9" />
        <StatCard label="On Shift Today" value="4" progress={44} />
        <StatCard label="Avg. Txns / Shift" value="104" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Staff Member</th>
              <th>Email</th>
              <th>Role</th>
              <th>Store</th>
              <th>Shift Today</th>
              <th>Status</th>
              <th>Last Login</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {staff.map(s => (
              <tr key={s.id}>
                <td>
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={s.initials} size="sm" color="#1e3a5f" />
                    <span className="text-sm font-semibold">{s.name}</span>
                  </div>
                </td>
                <td className="text-sm" style={{ color: '#475569' }}>{s.email}</td>
                <td><Badge status={s.role} /></td>
                <td className="text-sm mono" style={{ color: '#475569' }}>{s.store}</td>
                <td>
                  {s.shift === '—' ? (
                    <span className="text-sm" style={{ color: '#94a3b8' }}>—</span>
                  ) : (
                    <Badge status={s.shift} />
                  )}
                </td>
                <td><Badge status={s.status} /></td>
                <td className="text-sm" style={{ color: '#475569' }}>{s.lastLogin}</td>
                <td>
                  <div className="flex gap-1">
                    <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: '#e2e8f0' }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8.5 1.5l2 2-7 7H1.5v-2l7-7z" />
                      </svg>
                    </button>
                    {s.role !== 'Admin' && (
                      <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: '#e2e8f0' }}>
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#dc2626" strokeWidth="1.5">
                          <path d="M1 3h10M4 3V1.5h4V3M9.5 3l-.5 7.5H3L2.5 3" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
