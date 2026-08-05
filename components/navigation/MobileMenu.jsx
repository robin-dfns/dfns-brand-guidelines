import React from 'react';
import Icon from '../../assets/icons/Icon.jsx';

const ITEMS = [
  ['Dashboard', 'HeroiconsSolidHome'],
  ['Transfers', 'HeroiconsMiniArrowsUpDown'],
  ['Approval', 'HeroiconsSolidCheckCircle'],
  ['Settings', 'HeroiconsSolidCog8Tooth'],
];

/* Mobile bottom tab bar ("Menu" symbol): 380×51 white pill, four 43px pill tabs.
   Token-driven (bw surface, elevation-2 active tab, Ultra Purple 700 content). */
export function MobileMenu({ items = ITEMS, active = 0, onSelect, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: 380, height: 51, borderRadius: 50, backgroundColor: 'var(--background-bw,#ffffff)', boxShadow: '0 8px 11px 0 rgba(87,91,123,0.3)', padding: '4px 5px', boxSizing: 'border-box', ...style }} {...rest}>
      {items.map(([label, icon], i) => (
        <div key={label} onClick={() => onSelect && onSelect(i)}
          style={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', width: 92.5, height: 43, borderRadius: 30, backgroundColor: i === active ? 'var(--background-elevation-2,#e3e4eb)' : 'transparent', cursor: 'pointer', boxSizing: 'border-box' }}>
          <Icon name={icon} size={24} style={{ color: 'var(--icons-secondary,#442599)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 11, lineHeight: 1, color: 'var(--font-heading-colored-mid,#442599)', whiteSpace: 'nowrap' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
