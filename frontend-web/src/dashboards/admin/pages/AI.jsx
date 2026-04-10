// src/pages/admin/AI.jsx
import { useState } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import { PageHeader, Button, SectionCard, BarChart } from '../../../components/common';
import { forecastData, restockRecommendations, ragKnowledgeBase } from '../data/mockData';

const chatHistory = [
  { role: 'user', text: 'What were our top 3 revenue-generating products last month?', initials: 'AS' },
  { role: 'ai', text: 'Based on March 2026 sales data:\n1. Organic Basmati Rice 5kg — Rs 4.2L\n2. Amul Full Cream Milk — Rs 2.9L\n3. Coca-Cola 500ml — Rs 1.4L' },
];

const quickPrompts = [
  'Which products need restocking?',
  "Show this week's revenue",
  'Top cashier this month?',
  'Forecast for next week',
];

const modelMetrics = [
  { label: 'Forecast Accuracy (MAE)', value: '±4.2%', pct: 96 },
  { label: 'Restock Precision', value: '91%', pct: 91 },
  { label: 'RAG Chatbot Accuracy', value: '88%', pct: 88 },
];

export default function AI() {
  const [input, setInput] = useState('');

  return (
    <AdminLayout>
      <div className="flex items-center gap-2 text-xs mb-1 text-[#94a3b8]">
        <span>scikit-learn</span><span>·</span><span>RAG Chatbot</span>
      </div>
      <PageHeader
        title="AI Intelligence"
        actions={
          <>
            <span className="ai-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6" cy="6" r="2" />
                <path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.5 2.5l.7.7M8.8 8.8l.7.7M2.5 9.5l.7-.7M8.8 3.2l.7-.7" strokeLinecap="round" />
              </svg>
              AI Powered
            </span>
            <Button variant="primary">Run Forecast</Button>
          </>
        }
      />

      {/* Top row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Sales Forecast — proper bar chart, navy */}
        <SectionCard title="Sales Forecast — Next 7 Days">
          <div className="px-5 pb-4 pt-3">
            <BarChart data={forecastData} height={120} />
            <div className="flex gap-6 mt-3">
              <div>
                <p className="text-[10px] uppercase text-[#94a3b8]">Forecast Total</p>
                <p className="text-sm font-semibold text-[#0f172a]">Rs 6.1L</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#94a3b8]">Peak Day</p>
                <p className="text-sm font-semibold text-[#0f172a]">28 Mar</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#94a3b8]">Confidence</p>
                <p className="text-sm font-semibold text-[#0f172a]">87%</p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Restock Recommendations */}
        <SectionCard
          title="Restock Recommendations"
          headerRight={
            <span className="ai-badge">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6" cy="6" r="2" />
                <path d="M6 1v1M6 10v1M1 6h1M10 6h1" strokeLinecap="round" />
              </svg>
              AI Powered
            </span>
          }
        >
          <div className="px-4 py-3 space-y-3">
            {restockRecommendations.map((r, i) => (
              <div key={i} className="flex items-start justify-between gap-3 py-1">
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{r.name}</p>
                  <p className="text-xs mt-0.5 text-[#94a3b8]">{r.note}</p>
                </div>
                <button
                  className="text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 transition-all duration-150"
                  style={
                    r.action === 'Reorder'
                      ? { background: '#1e3a5f', color: '#ffffff' }
                      : { border: '1px solid #e2e8f0', color: '#0f172a' }
                  }
                  onMouseEnter={e => {
                    if (r.action === 'Reorder') {
                      e.currentTarget.style.background = '#16324f';
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(30,58,95,0.3)';
                    } else {
                      e.currentTarget.style.background = '#eff6ff';
                      e.currentTarget.style.color = '#1e3a5f';
                    }
                  }}
                  onMouseLeave={e => {
                    if (r.action === 'Reorder') {
                      e.currentTarget.style.background = '#1e3a5f';
                      e.currentTarget.style.boxShadow = '';
                    } else {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.color = '#0f172a';
                    }
                  }}
                >
                  {r.action}
                </button>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Chatbot */}
      <SectionCard
        title="Store Intelligence Chatbot"
        headerRight={
          <div className="flex items-center gap-1.5">
            <span className="text-xs px-2 py-0.5 rounded" style={{ background: '#f1f5f9', color: '#475569' }}>RAG</span>
            <span className="text-xs text-[#94a3b8]">·</span>
            <span className="text-xs px-2 py-0.5 rounded" style={{ background: '#f1f5f9', color: '#475569' }}>Store FAQs</span>
          </div>
        }
        className="mb-4"
      >
        <div className="px-5 py-4" style={{ minHeight: 200 }}>
          <div className="space-y-4">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} items-start gap-2`}>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-white flex-shrink-0" style={{ background: '#475569' }}>
                    {msg.initials}
                  </div>
                )}
                <div
                  className="px-4 py-2.5 rounded-xl text-sm max-w-lg whitespace-pre-line"
                  style={
                    msg.role === 'user'
                      ? { background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }
                      : { background: '#1e3a5f', color: '#ffffff' }
                  }
                >
                  {msg.text}
                </div>
                {msg.role === 'ai' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: '#1e3a5f', color: '#93c5fd' }}>
                    AI
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pb-4">
          <div className="flex gap-2 mb-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about sales, inventory, forecasts, policies..."
              className="input-field flex-1"
              onKeyDown={e => e.key === 'Enter' && setInput('')}
            />
            <button className="btn-primary px-4">Ask AI</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map(p => (
              <button
                key={p}
                onClick={() => setInput(p)}
                className="text-xs px-3 py-1.5 rounded-full border transition-all hover:bg-[#eff6ff] hover:text-[#1e3a5f] hover:border-[#bfdbfe]"
                style={{ borderColor: '#e2e8f0', color: '#475569' }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="Model Performance">
          <div className="px-5 py-4 space-y-4">
            {modelMetrics.map(m => (
              <div key={m.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-[#0f172a]">{m.label}</span>
                  <span className="text-sm font-semibold text-[#1e3a5f]">{m.value}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs pt-1 text-[#94a3b8]">Last retrained: 20 Mar 2026 · 3,240 data points</p>
          </div>
        </SectionCard>

        {/* RAG Knowledge Base — Manage/Remove buttons removed */}
        <SectionCard title="RAG Knowledge Base">
          <div className="px-5 py-4 space-y-3">
            {ragKnowledgeBase.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: '#e2e8f0' }}>
                <div>
                  <p className="text-sm font-medium text-[#0f172a]">{item.name}</p>
                  <p className="text-xs mt-0.5 text-[#94a3b8]">{item.key} · {item.count}</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" title="Indexed" />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AdminLayout>
  );
}
