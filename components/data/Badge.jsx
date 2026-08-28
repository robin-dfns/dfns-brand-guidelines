import React from 'react';

/* Figma: Badge — Color axis (node 537:1254). 20px tall, radius 6, 2/10 padding,
   Suisse Intl 400 12, 1px inset ring one step darker than the fill. */

const COLOR = {
  default: { background: 'var(--colors-badge-default)', ring: 'var(--colors-badge-default-border)', color: 'var(--colors-badge-default-foreground)' },
  grey:    { background: 'var(--colors-steel-grey-200)', ring: 'var(--colors-cold-grey-300)', color: 'var(--colors-cold-grey-700)' },
  green:   { background: 'var(--colors-badge-success)', ring: 'var(--colors-badge-success-border)', color: 'var(--colors-badge-success-foreground)' },
  yellow:  { background: 'var(--colors-badge-warning)', ring: 'var(--colors-badge-warning-border)', color: 'var(--colors-badge-warning-foreground)' },
  red:     { background: 'var(--colors-badge-error)', ring: 'var(--colors-badge-error-border)', color: 'var(--colors-badge-error-foreground)' },
  blue:    { background: 'var(--colors-badge-information)', ring: 'var(--colors-badge-information-border)', color: 'var(--colors-badge-information-foreground)' },
};

export function Badge({ color = 'default', children = 'Test', style, ...rest }) {
  const c = COLOR[color] || COLOR.default;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      height: 'var(--size-s)', padding: 'var(--space-50) var(--space-250)',
      borderRadius: 'var(--radius-base)',
      background: c.background, boxShadow: `inset 0 0 0 var(--stroke-base) ${c.ring}`, color: c.color,
      fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-base)', fontSize: 'var(--text-s)',
      lineHeight: 1, whiteSpace: 'nowrap', ...style,
    }} {...rest}>{children}</span>
  );
}
export default Badge;
