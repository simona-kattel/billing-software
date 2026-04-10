// src/pages/admin/Products.jsx
import AdminLayout from '../components/layout/AdminLayout';
import { PageHeader, Badge, Button, Pagination, StatCard } from '../../../components/common';
import { products } from '../data/mockData';

export default function Products() {
  return (
    <AdminLayout>
      <PageHeader
        breadcrumb="342 products across 18 categories"
        title="Products"
        actions={
          <>
            <Button variant="secondary">↓ Export</Button>
            <Button variant="primary">+ Add Product</Button>
          </>
        }
      />

      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-4">
        <input placeholder="Search product..." className="input-field" style={{ maxWidth: 220 }} />
        <input placeholder="Category" className="input-field" style={{ maxWidth: 140 }} />
        <input placeholder="Status" className="input-field" style={{ maxWidth: 140 }} />
        <input placeholder="Supplier" className="input-field" style={{ maxWidth: 160 }} />
        <button className="btn-primary px-4 py-2 text-sm">Filter</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: 48 }}>Image</th>
              <th>Product ↕</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price ↕</th>
              <th>Stock ↕</th>
              <th>Supplier</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>
                  <div className="w-8 h-8 rounded-lg bg-gray-100" />
                </td>
                <td>
                  <span className="font-medium text-sm">{p.name}</span>
                </td>
                <td>
                  <span className="mono text-xs" style={{ color: '#94a3b8' }}>{p.sku}</span>
                </td>
                <td className="text-sm">{p.category}</td>
                <td className="text-sm font-medium">{p.price}</td>
                <td className="text-sm font-semibold">{p.stock}</td>
                <td className="text-sm" style={{ color: '#475569' }}>{p.supplier}</td>
                <td><Badge status={p.status} /></td>
                <td>
                  <div className="flex gap-1">
                    <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: '#e2e8f0' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8.5 1.5l2 2-7 7H1.5v-2l7-7z" />
                      </svg>
                    </button>
                    <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: '#e2e8f0' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#dc2626" strokeWidth="1.5">
                        <path d="M1 3h10M4 3V1.5h4V3M9.5 3l-.5 7.5H3L2.5 3" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination current={1} total={3} label="Showing 1–6 of 342 products" />
      </div>
    </AdminLayout>
  );
}
