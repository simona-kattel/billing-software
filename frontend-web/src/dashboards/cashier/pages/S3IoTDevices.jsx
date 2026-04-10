// src/pages/S3IoTDevices.jsx
import { useState } from 'react';
import SettingsLayout, { SettingsSection } from '../components/layout/SettingsLayout';
import { Toggle } from '../../../components/common';

function DeviceRow({ icon, name, sub, status, action }) {
  const connected = status === 'Connected';
  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-[#f5f4f0] last:border-0">
      <div className="w-10 h-10 rounded-lg bg-[#f0ede8] flex items-center justify-center text-lg shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#111]">{name}</p>
        <p className="text-xs text-[#aaa] font-mono">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${connected ? 'bg-[#22c55e]' : 'bg-[#ccc]'}`} />
          <span className="text-xs text-[#888]">{status}</span>
        </div>
        <button className="px-3 py-1.5 border border-[#ddd] rounded-lg text-xs text-[#555] hover:border-[#999] transition-colors bg-white">
          {action}
        </button>
      </div>
    </div>
  );
}

export default function S3IoTDevices() {
  const [tls, setTls] = useState(false);

  return (
    <SettingsLayout>
      <SettingsSection title="Connected Hardware" description="Manage ESP32 scanners and peripherals.">
        <DeviceRow
          icon="⊙"
          name="ESP32 Barcode Scanner — Unit #1"
          sub="ID: ESP32-KTM-001 · IP: 192.168.1.42 · MQTT"
          status="Connected"
          action="Configure"
        />
        <DeviceRow
          icon="🖨"
          name="Thermal Receipt Printer"
          sub="EPSON TM-T20III · USB"
          status="Connected"
          action="Test Print"
        />
        <DeviceRow
          icon="💰"
          name="Cash Drawer"
          sub="APG Vasario · Serial"
          status="Disconnected"
          action="Reconnect"
        />
      </SettingsSection>

      <SettingsSection title="MQTT Configuration">
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#f5f4f0]">
          <p className="text-sm font-medium text-[#111]">Broker URL</p>
          <input
            defaultValue="mqtt://192.168.1.10:1883"
            className="w-56 px-3 py-2 text-sm bg-white border border-[#e2ddd8] rounded-lg outline-none focus:border-[#999] font-mono transition-colors"
          />
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#f5f4f0]">
          <p className="text-sm font-medium text-[#111]">Topic Prefix</p>
          <input
            defaultValue="invo6/ktm001/"
            className="w-56 px-3 py-2 text-sm bg-white border border-[#e2ddd8] rounded-lg outline-none focus:border-[#999] font-mono transition-colors"
          />
        </div>
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#111]">TLS Encryption</p>
            <p className="text-xs text-[#aaa] mt-0.5">Encrypted MQTT communication</p>
          </div>
          <Toggle checked={tls} onChange={setTls} />
        </div>
      </SettingsSection>
    </SettingsLayout>
  );
}
