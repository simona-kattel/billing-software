// src/pages/S4Notifications.jsx
import { useState } from 'react';
import SettingsLayout, { SettingsSection, SettingsRow } from '../components/layout/SettingsLayout';
import { Toggle } from '../../../components/common';

export default function S4Notifications() {
  const [lowStock, setLowStock] = useState(true);
  const [refund, setRefund] = useState(true);
  const [shiftReminder, setShiftReminder] = useState(true);
  const [iotAlert, setIotAlert] = useState(true);
  const [emailSummary, setEmailSummary] = useState(false);

  return (
    <SettingsLayout>
      <SettingsSection title="Notification Preferences" description="Control which alerts you receive during your shift.">
        <SettingsRow label="Low Stock Alerts" description="Notify when product stock is critical">
          <Toggle checked={lowStock} onChange={setLowStock} />
        </SettingsRow>
        <SettingsRow label="Refund Notifications" description="Alert when a refund is processed">
          <Toggle checked={refund} onChange={setRefund} />
        </SettingsRow>
        <SettingsRow label="Shift Reminders" description="Reminder 15 min before shift end">
          <Toggle checked={shiftReminder} onChange={setShiftReminder} />
        </SettingsRow>
        <SettingsRow label="IoT Disconnect Alert" description="Alert when scanner disconnects">
          <Toggle checked={iotAlert} onChange={setIotAlert} />
        </SettingsRow>
        <SettingsRow label="Email — Daily Summary" description="Receive shift summary by email">
          <Toggle checked={emailSummary} onChange={setEmailSummary} />
        </SettingsRow>
        <SettingsRow label="Sound">
          <div className="w-36 px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg text-[#aaa]" />
        </SettingsRow>
      </SettingsSection>
    </SettingsLayout>
  );
}
