import React from 'react';

/* Token-driven. Each variant maps to the DFNS status scales (bg 100 · border
   mid · text dark end — per the brand rule "status text = dark end of scale").
   Values mirror the design-system tokens; hex fallbacks match the light theme. */
const C = {
  default:     { bg: 'var(--ultra-purple-50,#e6deff)',   ring: 'var(--ultra-purple-200,#c4aeff)',  fg: 'var(--ultra-purple-500,#693aea)' },
  information: { bg: 'var(--system-blue-100,#ccd5ff)',    ring: 'var(--system-blue-300,#8097ff)',   fg: 'var(--system-blue-900,#0021b2)' },
  success:     { bg: 'var(--system-green-100,#d8fddf)',   ring: 'var(--system-green-500,#5ceb74)',  fg: 'var(--system-green-900,#056f15)' },
  danger:      { bg: 'var(--system-red-100,#ffeef6)',     ring: 'var(--system-red-300,#fccfd5)',    fg: 'var(--system-red-700,#d61f49)' },
  warning:     { bg: 'var(--system-yellow-100,#fef0c2)',  ring: 'var(--system-yellow-300,#fccb3f)', fg: 'var(--system-yellow-900,#85390a)' },
  neutral:     { bg: 'var(--steel-grey-200,#e8eaf0)',     ring: 'var(--cold-grey-100,#e0e3f0)',     fg: 'var(--cold-grey-700,#363a5b)' },
};
const ALIAS = { blue: 'information', green: 'success', red: 'danger', yellow: 'warning', grey: 'neutral' };

export function Badge({ color = 'default', children, style, ...rest }) {
  const c = C[ALIAS[color] || color] || C.default;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 10px', borderRadius: 'var(--radius-base,6px)', backgroundColor: c.bg, boxShadow: `inset 0 0 0 1px ${c.ring}`, color: c.fg, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, lineHeight: '18px', whiteSpace: 'nowrap', ...style }} {...rest}>{children}</span>
  );
}
