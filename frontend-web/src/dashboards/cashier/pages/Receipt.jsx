// src/pages/Receipt.jsx
import { useCashier } from '../context/CashierContext';

export default function Receipt() {
  const { cart, subtotal, discountAmt, tax, total, tendered, change, paymentMethod, selectedCustomer, setCurrentPage } = useCashier();

  return (
    <div className="min-h-screen bg-[#e8e4df] flex flex-col items-center justify-start py-8">
      {/* Toolbar */}
      <div className="w-[520px] flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#555]">Thermal Receipt Preview</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#aaa]">#TXN-20260322-0091</span>
          <button
            onClick={() => setCurrentPage('pos')}
            className="px-4 py-1.5 bg-[#111] text-white text-xs rounded-lg hover:bg-[#222] transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Receipt paper */}
      <div className="w-[380px] bg-white rounded-lg shadow-xl overflow-hidden border border-[#ddd]">
        {/* Dashed top border */}
        <div className="border-b-2 border-dashed border-[#eee] p-8 pb-6 text-center">
          <h1 className="text-2xl font-black tracking-wider text-[#111] mb-1">STORE</h1>
          <p className="text-xs text-[#888] font-mono leading-relaxed">
            New Baneshwor, Kathmandu<br />
            Tel: +977-1-441-0000<br />
            PAN: PAN-00112233
          </p>
        </div>

        <div className="px-8 py-4 border-b border-dashed border-[#eee] text-center">
          <p className="text-xs font-mono text-[#888]">TXN: #TXN-20260322-0091</p>
          <p className="text-xs font-mono text-[#888]">
            Date: 22 Mar 2026 &nbsp;&nbsp; Time: 14:48
          </p>
          <p className="text-xs font-mono text-[#888]">Cashier: Kasim R. &nbsp; Shift: #0842</p>
        </div>

        {selectedCustomer && (
          <div className="px-8 py-3 border-b border-dashed border-[#eee]">
            <p className="text-xs font-mono text-[#555]">Customer: {selectedCustomer.name}</p>
            <p className="text-xs font-mono text-[#555]">Phone: {selectedCustomer.phone}</p>
          </div>
        )}

        {/* Items */}
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold text-[#999] uppercase tracking-widest">Item</span>
            <span className="text-[10px] font-mono font-bold text-[#999] uppercase tracking-widest">Amt</span>
          </div>
          <div className="border-t border-[#eee] pt-3 space-y-3">
            {cart.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-[#111] font-mono">{item.name}</p>
                <div className="flex justify-between mt-0.5">
                  <span className="text-xs font-mono text-[#888]">{item.qty} × Rs {item.price}.00</span>
                  <span className="text-xs font-mono text-[#555]">Rs {(item.qty * item.price).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="px-8 py-4 border-t border-dashed border-[#eee] space-y-1.5">
          <div className="flex justify-between">
            <span className="text-xs font-mono text-[#888]">Subtotal</span>
            <span className="text-xs font-mono text-[#555]">Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-mono text-[#aaa]">Discount (10%)</span>
            <span className="text-xs font-mono text-[#aaa]">- Rs {discountAmt.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-mono text-[#888]">VAT (13%)</span>
            <span className="text-xs font-mono text-[#555]">Rs {tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-black text-base pt-2 border-t-2 border-[#111] mt-2">
            <span className="font-mono">TOTAL</span>
            <span className="font-mono">Rs {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment */}
        <div className="px-8 py-4 border-t border-dashed border-[#eee]">
          <p className="text-xs font-mono text-[#888]">Method: {paymentMethod}</p>
          <p className="text-xs font-mono text-[#888]">Tendered: Rs {tendered.toFixed(2)}</p>
          <p className="text-xs font-mono text-[#888]">Change: Rs {change.toFixed(2)}</p>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-dashed border-[#eee] text-center">
          <p className="text-[10px] font-mono text-[#bbb] mb-3">✦ ✦ ✦</p>
          <p className="text-xs font-mono text-[#888] leading-relaxed">
            Thank you for shopping with us!<br />
            Exchange within 7 days with receipt.
          </p>
          <p className="text-[11px] font-mono text-[#aaa] mt-2">www.invo6store.np</p>

          {/* Barcode placeholder */}
          <div className="mt-5 flex justify-center">
            <div className="relative">
              {/* Barcode bars simulation */}
              <div className="flex gap-px h-12">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#111]"
                    style={{
                      width: Math.random() > 0.6 ? 2 : 1,
                      opacity: Math.random() > 0.2 ? 1 : 0,
                    }}
                  />
                ))}
              </div>
              <p className="text-[9px] font-mono text-[#999] text-center mt-1">TXN20260322 0091</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#ddd] rounded-lg text-sm text-[#555] hover:border-[#aaa] transition-colors shadow-sm">
          🖨 Print Receipt
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#ddd] rounded-lg text-sm text-[#555] hover:border-[#aaa] transition-colors shadow-sm">
          ✉ Email Receipt
        </button>
        <button
          onClick={() => setCurrentPage('pos')}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#111] text-white rounded-lg text-sm hover:bg-[#222] transition-colors shadow-sm"
        >
          New Transaction →
        </button>
      </div>
    </div>
  );
}
