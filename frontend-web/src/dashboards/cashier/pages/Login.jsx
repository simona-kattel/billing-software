// src/pages/Login.jsx
import { useState } from 'react';
import { useCashier } from '../context/CashierContext';
import logo from '../../../assets/Full logo.png';
export default function Login() {
  const { setCurrentPage, setIsAuthenticated } = useCashier();
  const [role, setRole] = useState('Cashier');
  const [email, setEmail] = useState('kasim@store.np');
  const [password, setPassword] = useState('••••••••');
  const [remember, setRemember] = useState(true);

  const handleSubmit = () => {
    setCurrentPage('verification');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Dark brand panel */}
      <div className="flex-1 bg-[#0e0e0e] flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Logo mark */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                {/* Compass/Star shape */}
                <path d="M40 10 L44 36 L70 40 L44 44 L40 70 L36 44 L10 40 L36 36 Z" fill="#22c55e" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center mb-6">
           <img src={logo} alt="Logo" className="w-48 h-auto" />
          </div>
          <p className="text-[#555] text-xs tracking-[0.25em] uppercase mt-3 font-mono">Your Trusted Billing Partner</p>
        </div>
      </div>

      {/* Right: Login form */}
      <div className="w-[420px] bg-white flex flex-col justify-center px-12">
        <div>
          <p className="text-[#888] text-sm mb-1">Welcome back</p>
          <h1 className="text-2xl font-bold text-[#111] mb-7">Sign In</h1>

          {/* Role selector */}
          <div className="mb-6">
            <label className="block text-xs text-[#999] mb-2 font-mono">Sign in as</label>
            <div className="flex gap-2">
              {['Cashier'].map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                    ${role === r
                      ? 'bg-[#111] text-white'
                      : 'bg-[#f5f5f5] text-[#666] hover:bg-[#eee]'
                    }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#111] mb-1.5">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#f7f7f7] border border-[#eee] rounded-lg outline-none focus:border-[#ccc] focus:bg-white transition-colors text-[#111]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#111] mb-1.5">Password</label>
            <input
              type="password"
              value="password"
              onChange={() => {}}
              className="w-full px-4 py-2.5 text-sm bg-[#f7f7f7] border border-[#eee] rounded-lg outline-none focus:border-[#ccc] focus:bg-white transition-colors text-[#111]"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#111] rounded"
              />
              <span className="text-sm text-[#666]">Remember this device</span>
            </label>
            <button className="text-sm text-[#888] hover:text-[#111] transition-colors">
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#111] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#222] transition-colors mb-6"
          >
            Sign In to Terminal
          </button>

          {/* 2FA notice */}
          <div className="text-center mb-3">
            <span className="text-[10px] text-[#bbb] font-mono tracking-widest uppercase">2FA Verification</span>
          </div>
          <div className="bg-[#f7f7f7] border border-[#eee] rounded-lg p-4 flex items-start gap-3">
            <div className="w-6 h-6 border border-[#ddd] rounded flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-[#333] mb-0.5">Email OTP Required</p>
              <p className="text-xs text-[#888] leading-relaxed">
                A 6-digit code will be sent to your registered email address before terminal access is granted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
