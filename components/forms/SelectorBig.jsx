import React from 'react';
import Icon from '../../assets/icons/Icon.jsx';

export function SelectorBig({ icon, label = 'Select', onClick, style, ...rest }) {
  return (
    <button type="button" onClick={onClick}
      style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', width: 240, height: 44, padding: 8, borderRadius: 6, backgroundColor: '#e8eaf0', boxShadow: 'inset 0 0 0 1px #c5c9de', border: 'none', cursor: 'pointer', boxSizing: 'border-box', textAlign: 'left', ...style }} {...rest}>
      {icon ? (
        <span style={{ display: 'inline-flex', width: 28, height: 28, borderRadius: 4, overflow: 'hidden', flexShrink: 0, alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      ) : (
        <span style={{ width: 28, height: 28, borderRadius: 4, background: '#685cfe', flexShrink: 0 }} />
      )}
      <span style={{ flexGrow: 1, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#363a5b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
      <Icon name="HeroiconsMiniChevronUpDown" size={20} style={{ opacity: 0.5, color: '#363a5b', flexShrink: 0 }} />
    </button>
  );
}
