// src/pages/Profile.jsx
import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { currentUser, shiftHistory, recentActivity } from '../data/mockData';
import { Card, Input, Toggle, Button } from '../../../components/common';

export default function Profile() {
  const [twoFA, setTwoFA] = useState(true);
  const [editing, setEditing] = useState(false);

  return (
    <MainLayout>
      <div className="p-8 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-[#94a3b8] font-mono mb-1">Account</p>
            <h1 className="text-2xl font-bold text-[#0f172a]">My Profile</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEditing(!editing)}
              className="btn-secondary flex items-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
            {editing && (
              <button onClick={() => setEditing(false)} className="btn-primary">
                ✓ Update
              </button>
            )}
          </div>
        </div>

        {/* Hero card */}
        <div className="bg-[#1e3a5f] text-white rounded-xl p-6 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold border-2 border-white/30">
                {currentUser.initials}
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#1e3a5f] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              <span className="inline-block text-[10px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded mt-1 text-white/70">
                {currentUser.role}
              </span>
              <p className="text-white/50 text-sm mt-1.5 font-mono">
                {currentUser.phone} · Store {currentUser.store.split('—')[0].trim()}
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-sm font-medium border border-white/20">
            Log Out
          </button>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Personal Information */}
          <Card className="p-6">
            <h2 className="font-semibold text-[#0f172a] mb-5">Personal Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input label="First Name" value="Kasim" readOnly={!editing} onChange={() => {}} />
                <Input label="Last Name" value="Rijal" readOnly={!editing} onChange={() => {}} />
              </div>
              <Input label="Email Address" value="kasim@store.np" readOnly={!editing} onChange={() => {}} />
              <Input label="Phone Number" value="+977-9841-000123" readOnly={!editing} onChange={() => {}} />
              <div className="grid grid-cols-2 gap-3">
                <Input label="Role" value="Cashier" readOnly onChange={() => {}} />
                <Input label="Assigned Store" value="KTM-001 — Kathmandu" readOnly onChange={() => {}} />
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6">
            <h2 className="font-semibold text-[#0f172a] mb-5">Security & Authentication</h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-[#94a3b8] font-mono uppercase tracking-widest mb-2">Two-Factor Authentication</p>
                <div className="flex items-center gap-3">
                  <Toggle checked={twoFA} onChange={setTwoFA} />
                  <span className="text-sm text-[#475569]">Email OTP enabled</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#e2e8f0]">
                <Input label="Current Password" type="password" value="password" readOnly onChange={() => {}} className="mb-3" />
                <Input label="New Password" placeholder="Min. 8 characters" onChange={() => {}} className="mb-3" />
                <Input label="Confirm New Password" placeholder="Repeat new password" onChange={() => {}} className="mb-4" />
                <button className="px-4 py-2 bg-[#1e3a5f] text-white text-sm rounded-lg hover:bg-[#16324f] transition-colors font-medium">
                  Update Password
                </button>
              </div>
              <div className="pt-3 border-t border-[#e2e8f0]">
                <p className="text-xs text-[#94a3b8] font-mono">Last login: 22 Mar 2026, 08:14 AM</p>
                <p className="text-xs text-[#94a3b8] font-mono">Device: Chrome · Windows 11 · 103.22.18.x</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom two column */}
        <div className="grid grid-cols-2 gap-6">
          {/* Shift History */}
          <Card className="p-6">
            <h2 className="font-semibold text-[#0f172a] mb-4">Recent Shift History</h2>
            <div className="space-y-3">
              {shiftHistory.map((shift, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#94a3b8] w-12">{shift.id}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#0f172a]">{shift.date}</span>
                      {shift.status && (
                        <span className="text-[10px] font-mono bg-[#e8f5e9] text-[#2e7d32] px-1.5 py-0.5 rounded">
                          {shift.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#94a3b8] font-mono">{shift.hours}</p>
                  </div>
                  <span className="text-xs font-mono text-[#94a3b8]">{shift.txns} txns</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h2 className="font-semibold text-[#0f172a] mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0f172a]">{item.action}</p>
                    <p className={`text-xs font-mono mt-0.5 ${item.isLink ? 'text-[#22c55e]' : 'text-[#94a3b8]'}`}>
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-xs text-[#94a3b8] font-mono shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
