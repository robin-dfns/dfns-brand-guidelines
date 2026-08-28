import React from 'react';

/* Figma: Selector Big (node 454:155). 44px tall, radius 8, Steel Grey 200 fill with a 1px
   Cold Grey 300 inset ring, 8px padding, 8px gap. A 28px radius-4 avatar leads; the label is
   Suisse Intl 500 14/20 in Cold Grey 700; a 20px chevron-up-down at 50% opacity trails. */

export function SelectorBig({ label = 'Stripe Treasury', avatar, avatarColor = 'rgb(104,92,254)', trailingIcon, style, ...rest }) {
  return (
    <button type="button" style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-200)',
      width: 240, height: 44, padding: 'var(--space-200)',
      borderRadius: 'var(--radius-large)', border: 'none', overflow: 'hidden',
      background: 'var(--colors-steel-grey-200)', boxShadow: 'var(--ring-input)',
      cursor: 'pointer', textAlign: 'left', ...style,
    }} {...rest}>
      <span style={{
        flexShrink: 0, width: 28, height: 28, borderRadius: 'var(--radius-medium)',
        background: avatarColor, display: 'grid', placeItems: 'center', overflow: 'hidden',
      }}>{avatar}</span>
      <span style={{
        flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-base)', lineHeight: 'var(--line-m)', color: 'var(--colors-cold-grey-700)',
      }}>{label}</span>
      <span style={{ flexShrink: 0, opacity: 0.5, display: 'flex', color: 'var(--colors-cold-grey-700)' }}>{trailingIcon}</span>
    </button>
  );
}
export default SelectorBig;
