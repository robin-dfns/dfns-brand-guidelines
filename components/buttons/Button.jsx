import React from 'react';

/* ============================================================
   DFNS Button — the single, canonical CTA (marketing design).
   variant: primary | secondary | tertiary. Optional leading `icon`
   (any node — swap it freely, Figma-style) and an animated trailing
   `arrow` (the brand signature, on by default except secondary).
   36px · radius 12 · Suisse Intl 500 Medium. Renders <a> when `href`.
   ============================================================ */

const ARROW = 'M3 8h9M8.5 4.5L12 8l-3.5 3.5';

/* two-arrow swap: arrow 1 slides out right + fades, arrow 2 slides in from left */
function ArrowSwap({ hover }) {
  const base = { position: 'absolute', inset: 0, width: 16, height: 16, transition: 'transform .3s cubic-bezier(.4,.36,0,1),opacity .3s cubic-bezier(.4,.36,0,1)' };
  return (
    <span style={{ position: 'relative', width: 16, height: 16, flex: 'none', overflow: 'hidden', display: 'inline-block' }}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        style={{ ...base, transform: hover ? 'translateX(150%)' : 'none', opacity: hover ? 0 : 1 }}><path d={ARROW} /></svg>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        style={{ ...base, transform: hover ? 'none' : 'translateX(-140%)', opacity: hover ? 1 : 0 }}><path d={ARROW} /></svg>
    </span>
  );
}

const V = {
  primary: {
    color: '#e0e3f0', border: '1px solid #170c33', padding: '0 13px 0 18px',
    background: 'linear-gradient(rgba(255,255,255,.12),rgba(255,255,255,.12)),#2d1866', boxShadow: '0 6px 12px rgba(87,91,123,.24)',
    hover: { color: '#ffffff', borderColor: '#442599', background: 'linear-gradient(rgba(255,255,255,.18),rgba(255,255,255,.18)),#442599', boxShadow: '0 2px 4px rgba(0,0,0,.15)' },
  },
  secondary: { color: '#442599', background: '#e0e3f0', border: '1px solid transparent', padding: '0 18px', hover: { background: '#e8eaf0', color: '#5123ce' } },
  tertiary: { color: '#442599', background: 'transparent', border: 'none', padding: 2, height: 'auto', hover: { color: '#5123ce' } },
};

export function Button({ variant = 'primary', icon, arrow = variant !== 'secondary', disabled = false, href, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = disabled
    ? { color: '#aeb1c9', background: variant === 'tertiary' ? 'transparent' : '#e8eaf0', border: '1px solid transparent', boxShadow: 'none', padding: v.padding, height: v.height }
    : { ...v, ...(hover ? v.hover : null) };
  delete s.hover;
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : 'button'} disabled={href ? undefined : disabled}
      onMouseEnter={() => !disabled && setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, height: 36, borderRadius: 12,
        cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14,
        lineHeight: 1, whiteSpace: 'nowrap', textDecoration: 'none', boxSizing: 'border-box', border: 'none', ...s, ...style,
      }} {...rest}>
      {icon && <span style={{ width: 16, height: 16, flex: 'none', display: 'inline-flex' }}>{icon}</span>}
      <span>{children}</span>
      {arrow && (disabled
        ? <span style={{ width: 16, height: 16, flex: 'none', display: 'inline-flex', opacity: 0.6 }}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={ARROW} /></svg></span>
        : <ArrowSwap hover={hover} />)}
    </Tag>
  );
}
