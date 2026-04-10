// src/pages/Products.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { products } from '../data/mockData';
import { useCashier } from '../context/CashierContext';

function ProductCard({ product, onAdd }) {
  const isLow = product.stock > 0 && product.stock <= 5;
  const isOut = product.stock === 0;

  return (
    <div
      className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:border-[#bfdbfe] hover:shadow-sm transition-all cursor-pointer group"
      onClick={() => onAdd(product)}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-[#f1f5f9] group-hover:bg-[#e2e8f0] transition-colors flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg bg-[#e2e8f0] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>
      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-[#0f172a] truncate">{product.name}</h3>
        <p className="text-[11px] text-[#94a3b8] font-mono mb-2">{product.sku} · {product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#0f172a]">Rs {product.price}</span>
          {isOut ? (
            <span className="text-[10px] font-mono bg-[#f5f5f5] text-[#999] px-2 py-0.5 rounded">Out of stock</span>
          ) : isLow ? (
            <span className="text-[10px] font-mono bg-[#fff8e1] text-[#f59e0b] px-2 py-0.5 rounded">{product.stock} left</span>
          ) : (
            <span className="text-[10px] font-mono text-[#94a3b8]">{product.stock} in stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductRow({ product, onAdd }) {
  const isLow = product.stock > 0 && product.stock <= 5;
  const isOut = product.stock === 0;

  return (
    <div
      className="flex items-center gap-4 bg-white rounded-xl border border-[#e2e8f0] p-4 hover:border-[#bfdbfe] hover:shadow-sm transition-all cursor-pointer"
      onClick={() => onAdd(product)}
    >
      <div className="w-12 h-12 rounded-lg bg-[#f1f5f9] flex items-center justify-center shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-[#0f172a]">{product.name}</h3>
        <p className="text-[11px] text-[#94a3b8] font-mono">{product.sku} · {product.category}</p>
      </div>
      <span className="text-sm font-bold text-[#0f172a] w-20 text-right">Rs {product.price}</span>
      <div className="w-24 text-right">
        {isOut ? (
          <span className="text-[10px] font-mono bg-[#f5f5f5] text-[#999] px-2 py-0.5 rounded">Out of stock</span>
        ) : isLow ? (
          <span className="text-[10px] font-mono bg-[#fff8e1] text-[#f59e0b] px-2 py-0.5 rounded">{product.stock} left</span>
        ) : (
          <span className="text-[11px] font-mono text-[#94a3b8]">{product.stock} in stock</span>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  const { addToCart } = useCashier();
  const [view, setView] = useState('Grid');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-[#94a3b8] font-mono mb-1">Product Catalogue</p>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#0f172a]">Products</h1>
            <div className="flex bg-white border border-[#e2e8f0] rounded-lg p-0.5">
              {['Grid', 'List'].map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all
                    ${view === v ? 'bg-[#1e3a5f] text-white' : 'text-[#94a3b8] hover:text-[#0f172a]'}`}
                >
                  {v === 'Grid' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                      <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
                      <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                  )}
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none focus:border-[#1e3a5f] transition-colors"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-3 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none text-[#94a3b8]"
          >
            <option value="">All Categories</option>
            {[...new Set(products.map(p => p.category))].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select className="px-3 py-2 text-sm bg-white border border-[#e2e8f0] rounded-lg outline-none text-[#94a3b8]">
            <option value="">Price Range</option>
            <option>Under Rs 100</option>
            <option>Rs 100–500</option>
            <option>Over Rs 500</option>
          </select>
          <button className="px-5 py-2 bg-[#1e3a5f] text-white text-sm rounded-lg hover:bg-[#16324f] transition-colors font-medium">
            Apply
          </button>
        </div>

        {/* Products grid/list */}
        {view === 'Grid' ? (
          <div className="grid grid-cols-5 gap-4">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(p => (
              <ProductRow key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
