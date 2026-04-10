// src/pages/POS.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useCashier } from '../context/CashierContext';
import { products } from '../data/mockData';

function CustomerPanel({ selectedCustomer, setSelectedCustomer }) {
  const [tab, setTab] = useState('Registered');
  const [search, setSearch] = useState('');

  return (
    <div>
      {/* Tab */}
      <div className="flex mb-3 bg-[#f0ede8] rounded-lg p-0.5">
        {['Registered', 'Guest'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all
              ${tab === t ? 'bg-[#111] text-white' : 'text-[#888] hover:text-[#111]'}`}
          >
            {t === 'Registered' ? '👤 ' : '👥 '}{t}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search customer..."
          className="flex-1 px-3 py-2 text-xs bg-[#f0ede8] border border-[#e2ddd8] rounded-lg outline-none focus:border-[#aaa] transition-colors"
        />
        <button className="px-4 py-2 bg-[#111] text-white text-xs rounded-lg hover:bg-[#222] transition-colors">
          Find
        </button>
      </div>

      {/* Selected customer */}
      {selectedCustomer && (
        <div className="bg-[#f0ede8] rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#ddd] flex items-center justify-center text-sm font-bold text-[#555]">
            {selectedCustomer.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#111]">{selectedCustomer.name}</p>
            <p className="text-[11px] text-[#888] font-mono">{selectedCustomer.phone} · {selectedCustomer.orders} prev orders</p>
          </div>
          <button
            onClick={() => setSelectedCustomer(null)}
            className="text-[#aaa] hover:text-[#111] transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default function POS() {
  const {
    cart, addToCart, updateQty, removeFromCart, clearCart,
    discount, paymentMethod, setPaymentMethod,
    tendered, setTendered,
    selectedCustomer, setSelectedCustomer,
    subtotal, discountAmt, tax, total, change,
    setCurrentPage,
  } = useCashier();

  const [searchQuery, setSearchQuery] = useState('');

  const handleCharge = () => {
    setCurrentPage('receipt');
  };

  return (
    <MainLayout>
      <div className="flex h-full">
        {/* Left: Transaction area */}
        <div className="flex-1 flex flex-col border-r border-[#e2ddd8] overflow-hidden">
          {/* Transaction header */}
          <div className="px-6 py-4 bg-white border-b border-[#e8e4df] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-[#111]">New Transaction</h2>
              <span className="text-xs text-[#aaa] font-mono">#TXN-20260322-0091</span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors bg-white">
                + Discount
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors bg-white">
                ⊠ Void
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors bg-white">
                ⊟ Hold
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-6 py-3 bg-[#f8f7f5] border-b border-[#e8e4df] flex gap-3 shrink-0">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search product or scan barcode..."
              className="flex-1 px-4 py-2 text-sm bg-white border border-[#e2ddd8] rounded-lg outline-none focus:border-[#aaa] transition-colors"
            />
            <button className="px-4 py-2 text-sm border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] bg-white transition-colors">
              Browse
            </button>
          </div>

          {/* Cart items table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-[#f8f7f5] z-10">
                <tr className="border-b border-[#e8e4df]">
                  <th className="text-left px-6 py-3 text-[10px] font-mono text-[#aaa] uppercase tracking-widest w-8">#</th>
                  <th className="text-left px-2 py-3 text-[10px] font-mono text-[#aaa] uppercase tracking-widest">Product</th>
                  <th className="text-left px-2 py-3 text-[10px] font-mono text-[#aaa] uppercase tracking-widest w-28">Qty</th>
                  <th className="text-left px-2 py-3 text-[10px] font-mono text-[#aaa] uppercase tracking-widest">Unit Price</th>
                  <th className="text-right px-6 py-3 text-[10px] font-mono text-[#aaa] uppercase tracking-widest">Total</th>
                  <th className="w-8"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => (
                  <tr key={item.id} className="border-b border-[#f0ede8] hover:bg-white/50 transition-colors">
                    <td className="px-6 py-3 text-[11px] text-[#aaa] font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="px-2 py-3">
                      <p className="text-sm font-medium text-[#111]">{item.name}</p>
                      <p className="text-[11px] text-[#aaa] font-mono">{item.sku} · {item.category}</p>
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded border border-[#ddd] flex items-center justify-center text-[#555] hover:border-[#999] transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded border border-[#ddd] flex items-center justify-center text-[#555] hover:border-[#999] transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-sm text-[#555] font-mono">Rs {item.price}.00</td>
                    <td className="px-6 py-3 text-right text-sm font-semibold text-[#111] font-mono">
                      Rs {(item.price * item.qty).toLocaleString()}.00
                    </td>
                    <td className="pr-3 py-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#ccc] hover:text-[#999] transition-colors text-lg"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Discount row */}
                {discount > 0 && (
                  <tr className="border-b border-[#f0ede8]">
                    <td className="px-6 py-3"></td>
                    <td className="px-2 py-3" colSpan={2}>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#888]">Seasonal Discount</span>
                        <span className="text-[10px] font-mono bg-[#111] text-white px-2 py-0.5 rounded">
                          {discount}% OFF
                        </span>
                      </div>
                    </td>
                    <td></td>
                    <td className="px-6 py-3 text-right text-sm font-semibold text-[#e65100] font-mono">
                      −Rs {discountAmt.toFixed(2)}
                    </td>
                    <td className="pr-3 py-3">
                      <button className="text-[#ccc] hover:text-[#999] transition-colors text-lg">×</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Order summary panel */}
        <div className="w-[340px] bg-white flex flex-col shrink-0 overflow-auto">
          {/* Customer */}
          <div className="p-4 border-b border-[#f0ede8]">
            <CustomerPanel
              selectedCustomer={selectedCustomer}
              setSelectedCustomer={setSelectedCustomer}
            />
          </div>

          {/* Order summary */}
          <div className="p-4 border-b border-[#f0ede8] flex-1">
            <p className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest mb-3">Order Summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#888]">Subtotal ({cart.length} items)</span>
                <span className="font-mono text-[#111]">Rs {subtotal.toLocaleString()}.00</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#888]">Discount ({discount}%)</span>
                  <span className="font-mono text-[#e65100]">− Rs {discountAmt.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-[#888]">Tax (13% VAT)</span>
                <span className="font-mono text-[#111]">Rs {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-[#f0ede8] mt-2">
                <span>Total</span>
                <span className="font-mono">Rs {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="p-4 border-b border-[#f0ede8]">
            <p className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest mb-3">Payment Method</p>
            <div className="flex gap-2">
              {[
                { id: 'Cash', icon: '💵' },
                { id: 'Card', icon: '💳' },
                { id: 'Wallet', icon: '📱' },
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all flex flex-col items-center gap-1
                    ${paymentMethod === m.id
                      ? 'bg-[#111] text-white'
                      : 'bg-[#f0ede8] text-[#666] hover:bg-[#e8e4df]'
                    }`}
                >
                  <span className="text-base">{m.icon}</span>
                  {m.id}
                </button>
              ))}
            </div>
          </div>

          {/* Tendered + Change */}
          <div className="p-4 border-b border-[#f0ede8]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] text-[#aaa] font-mono w-16 shrink-0">Tendered</span>
              <div className="flex-1 flex items-center bg-[#f0ede8] rounded-lg border border-[#e2ddd8] px-3 py-2">
                <span className="text-xs text-[#888] mr-1">Rs</span>
                <input
                  type="number"
                  value={tendered}
                  onChange={e => setTendered(Number(e.target.value))}
                  className="flex-1 bg-transparent text-sm font-mono font-semibold text-[#111] outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] text-[#aaa] font-mono">Change Due</span>
              <span className={`text-sm font-mono font-semibold ${change >= 0 ? 'text-[#111]' : 'text-red-500'}`}>
                Rs {change.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Charge button */}
          <div className="p-4">
            <button
              onClick={handleCharge}
              className="w-full bg-[#111] text-white py-3.5 rounded-lg font-bold text-sm hover:bg-[#222] transition-colors mb-2"
            >
              CHARGE  Rs {total.toFixed(2)}
            </button>
            <div className="flex gap-2">
              <button className="flex-1 py-2 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors">
                ⊟ Hold
              </button>
              <button className="flex-1 py-2 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors">
                ⊠ Void All
              </button>
              <button className="flex-1 py-2 text-xs border border-[#e2ddd8] rounded-lg text-[#555] hover:border-[#aaa] transition-colors">
                🖨 Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
