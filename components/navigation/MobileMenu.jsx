import React from 'react';

/* Figma: Menu (node 1287:71) from the Mobile-TO-MIGRATE page. 380x51 pill, radius 50,
   white fill, 0 8px 11px rgba(87,91,123,0.3) drop shadow, 4/5 padding, four equal items. */

export function MobileMenu({ items = [], activeIndex = 0, onSelect, style, ...rest }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'flex-start',
      width: 380, height: 51, padding: 'var(--space-100) 5px',
      borderRadius: 50, background: 'var(--colors-steel-grey-white)',
      boxShadow: '0 8px 11px 0 rgba(87,91,123,0.3)', ...style,
    }} {...rest}>
      {items.map((item, i) => {
        const active = i === activeIndex;
        return (
          <button key={item.label} type="button" onClick={() => onSelect && onSelect(i)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 2, height: '100%', border: 'none', borderRadius: 50, cursor: 'pointer',
            background: active ? 'var(--colors-ultra-purple-50)' : 'transparent',
            color: active ? 'var(--colors-ultra-purple-700)' : 'var(--colors-cold-grey-600)',
            fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-xs)', lineHeight: 1,
          }}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
export default MobileMenu;
