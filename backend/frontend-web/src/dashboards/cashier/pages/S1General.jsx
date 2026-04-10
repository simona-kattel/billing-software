// src/pages/S1General.jsx
import SettingsLayout, { SettingsSection, SettingsRow } from '../components/layout/SettingsLayout';

function FieldInput({ value, readOnly }) {
  return (
    <input
      defaultValue={value}
      readOnly={readOnly}
      className={`px-3 py-2 text-sm border border-[#e2e8f0] rounded-lg outline-none w-48
        ${readOnly ? 'bg-[#f8fafc] text-[#94a3b8]' : 'bg-white focus:border-[#1e3a5f]'} transition-colors`}
    />
  );
}

function SelectField({ placeholder }) {
  return (
    <div className="w-36 px-3 py-2.5 text-sm bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#94a3b8]">
      {placeholder || ''}
    </div>
  );
}

export default function S1General() {
  return (
    <SettingsLayout>
      {/* Store Information */}
      <SettingsSection title="Store Information" description="Basic configuration for this terminal.">
        <SettingsRow label="Store Name" description="Display name for receipts">
          <FieldInput value="Kathmandu Main Store" />
        </SettingsRow>
        <SettingsRow label="Store ID" description="Read-only system identifier">
          <FieldInput value="KTM-001" readOnly />
        </SettingsRow>
        <SettingsRow label="Currency">
          <SelectField />
        </SettingsRow>
        <SettingsRow label="Tax Rate (VAT)" description="Applied on all transactions">
          <FieldInput value="13%" />
        </SettingsRow>
        <SettingsRow label="Language">
          <SelectField />
        </SettingsRow>
      </SettingsSection>

      {/* Display & Appearance */}
      <SettingsSection title="Display & Appearance">
        <SettingsRow label="Theme">
          <SelectField />
        </SettingsRow>
        <SettingsRow label="Font Size">
          <SelectField />
        </SettingsRow>
        <SettingsRow label="Date Format">
          <SelectField />
        </SettingsRow>
      </SettingsSection>
    </SettingsLayout>
  );
}
