import React from 'react';
import Icon from '../../assets/icons/Icon.jsx';

/* Token-driven big selector (elevation-1 surface, input border, brand icon slot). */
export function SelectorBig({ icon, label = 'Select', onClick, style, ...rest }) {
  return (
    <button type="button" onClick={onClick}
      style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', width: 240, height: 44, padding: 8, borderRadius: 6, backgroundColor: 'var(--background-elevation-1,#e8eaf0)', boxShadow: 'inset 0 0 0 1px var(--base-input-border,#c5c9de)', border: 'none', cursor: 'pointer', boxSizing: 'border-box', textAlign: 'left', ...style }} {...rest}>
      {icon ? (
        <span style={{ display: 'inline-flex', width: 28, height: 28, borderRadius: 4, overflow: 'hidden', flexShrink: 0, alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      ) : (
        <span style={{ width: 28, height: 28, borderRadius: 4, background: 'var(--ultra-purple-500,#693aea)', flexShrink: 0 }} />
      )}
      <span style={{ flexGrow: 1, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, lineHeight: '20px', color: 'var(--font-body-mid,#363a5b)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
      <Icon name="HeroiconsMiniChevronUpDown" size={20} style={{ opacity: 0.5, color: 'var(--icons-primary,#363a5b)', flexShrink: 0 }} />
    </button>
  );
}
