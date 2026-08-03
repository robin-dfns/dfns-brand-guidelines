import React from 'react';

export function Input({ label, placeholder, value, onChange, iconLeft, iconRight, action, disabled = false, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'stretch', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {(label || action) && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          {label && <label style={{ fontWeight: 400, fontSize: 14, lineHeight: 1, color: '#1e202e' }}>{label}</label>}
          {action}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', height: 36, padding: '4px 12px', borderRadius: 6, backgroundColor: disabled ? '#e8eaf0' : '#ffffff', boxShadow: 'inset 0 0 0 1px #c5c9de', boxSizing: 'border-box' }}>
        {iconLeft}
        <input disabled={disabled} placeholder={placeholder} value={value} onChange={onChange}
          style={{ flexGrow: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 14, color: disabled ? '#aeb1c9' : '#1e202e' }} />
        {iconRight}
      </div>
    </div>
  );
}
