// src/pages/Verification.jsx
import { useState, useRef } from 'react';
import { useCashier } from '../context/CashierContext';

export default function Verification() {
  const { setCurrentPage, setIsAuthenticated } = useCashier();
  const [otp, setOtp] = useState(['7', '2', '5', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) inputs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const handleVerify = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-[380px] px-10 py-10">
        {/* Brand tag */}
        <div className="text-center mb-6">
          <p className="text-[10px] text-[#aaa] font-mono tracking-widest uppercase mb-4">INVO6 · 2FA</p>
          <h1 className="text-xl font-bold text-[#111] mb-3">Verify your identity</h1>
          {/* Skeleton lines representing description */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-2 bg-[#eee] rounded-full w-4/5"></div>
            <div className="h-2 bg-[#eee] rounded-full w-3/5"></div>
          </div>
        </div>

        {/* OTP inputs */}
        <div className="flex gap-2 justify-center mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => inputs.current[i] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              className={`w-12 h-12 text-center text-lg font-bold rounded-lg border-2 outline-none transition-all
                ${digit
                  ? i === 2
                    ? 'border-[#111] bg-white text-[#111]'
                    : 'border-[#ddd] bg-white text-[#111]'
                  : 'border-[#eee] bg-[#fafafa] text-[#111]'
                }
                focus:border-[#111]`}
            />
          ))}
        </div>

        {/* Verify button */}
        <button
          onClick={handleVerify}
          className="w-full bg-[#111] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#222] transition-colors mb-4"
        >
          <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto"></div>
        </button>

        {/* Links */}
        <div className="text-center space-y-2">
          <button
            onClick={() => setCurrentPage('login')}
            className="block w-full text-sm text-[#888] hover:text-[#111] transition-colors"
          >
            ← Back to login
          </button>
          <p className="text-sm text-[#888]">
            Didn't receive?{' '}
            <button className="text-[#111] font-medium hover:underline">Resend OTP</button>
          </p>
        </div>
      </div>
    </div>
  );
}
