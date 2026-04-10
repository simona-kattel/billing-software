// src/pages/S2BillingPOS.jsx
import { useState } from 'react';
import SettingsLayout, { SettingsSection, SettingsRow } from '../components/layout/SettingsLayout';
import { Toggle } from '../../../components/common';

export default function S2BillingPOS() {
  const [autoFocus, setAutoFocus] = useState(true);
  const [confirmVoid, setConfirmVoid] = useState(true);
  const [autoPrint, setAutoPrint] = useState(false);
  const [emailReceipt, setEmailReceipt] = useState(true);

  return (
    <SettingsLayout>
      <SettingsSection title="POS Behaviour" description="Configure how the billing terminal operates.">
        <SettingsRow label="Auto-focus Scan Input" description="Focus barcode field on each new transaction">
          <Toggle checked={autoFocus} onChange={setAutoFocus} />
        </SettingsRow>
        <SettingsRow label="Confirm Before Void" description="Show confirmation when voiding cart">
          <Toggle checked={confirmVoid} onChange={setConfirmVoid} />
        </SettingsRow>
        <SettingsRow label="Default Payment Method">
          <div className="w-36 px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg text-[#aaa]" />
        </SettingsRow>
        <SettingsRow label="Auto Print Receipt" description="Print after each completed transaction">
          <Toggle checked={autoPrint} onChange={setAutoPrint} />
        </SettingsRow>
        <SettingsRow label="Email Receipt Option" description="Offer to email receipt to customer">
          <Toggle checked={emailReceipt} onChange={setEmailReceipt} />
        </SettingsRow>
        <SettingsRow label="Hold Transaction Limit">
          <div className="w-20 px-3 py-2.5 text-sm bg-[#f5f4f0] border border-[#e2ddd8] rounded-lg text-[#aaa]" />
        </SettingsRow>
      </SettingsSection>
    </SettingsLayout>
  );
}
