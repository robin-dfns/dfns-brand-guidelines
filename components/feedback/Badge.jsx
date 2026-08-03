import React from 'react';

const C = {
  default: { bg: '#e6deff', ring: '#c4aeff', fg: '#693aea' },
  blue: { bg: '#ccd5ff', ring: '#8097ff', fg: '#0021b2' },
  green: { bg: '#d8fddf', ring: '#5ceb74', fg: '#056f15' },
  red: { bg: '#ffeef6', ring: '#fccfd5', fg: '#d61f49' },
  yellow: { bg: '#fef0c2', ring: '#fccb3f', fg: '#85390a' },
  grey: { bg: '#e8eaf0', ring: '#e0e3f0', fg: '#363a5b' },
};

export function Badge({ color = 'default', children, style, ...rest }) {
  const c = C[color] || C.default;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 10px', borderRadius: 6, backgroundColor: c.bg, boxShadow: `inset 0 0 0 1px ${c.ring}`, color: c.fg, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, lineHeight: '18px', whiteSpace: 'nowrap', ...style }} {...rest}>{children}</span>
  );
}
