import React from 'react';

/* ============================================================
   DFNS Button — the single canonical CTA. Exact React port of
   dfns-website `Button.astro` (the reference on dfns.co).
   3 variants (primary / secondary / tertiary) × light / dark.
   Optional `icon` (any 16px node) placed `iconPosition` before|after
   the label — swap it freely, Figma-style. Animated trailing `arrow`
   is automatic on primary + tertiary (override with `arrow`).
   36px · radius 12 · Suisse Intl 500 Medium. <a> when `href`.
   ============================================================ */

const ARROW = 'M6.4 4.039a.65.65 0 0 0-.4.55v6.808a.648.648 0 0 0 1.106.43L10.81 8.414a.593.593 0 0 0 0-.843L7.106 4.168A.648.648 0 0 0 6.4 4.039Z';
const ease = 'transform .3s cubic-bezier(.4,.36,0,1),opacity .3s cubic-bezier(.4,.36,0,1)';

/* arrow-1 slides out right + fades; arrow-2 (overlapped via -16 margin) slides in from left */
function ArrowSwap({ hover }) {
  const svg = { width: 16, height: 16, flexShrink: 0, fill: 'currentColor' };
  return (
    <span className="btn__arrow" style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <svg viewBox="0 0 16 16" style={{ ...svg, opacity: hover ? 0 : 1, transform: hover ? 'translateX(24px)' : 'none', transition: ease }}><path d={ARROW} /></svg>
      <svg viewBox="0 0 16 16" style={{ ...svg, marginLeft: -16, opacity: hover ? 1 : 0, transform: hover ? 'translateX(0)' : 'translateX(-8px)', transition: ease }}><path d={ARROW} /></svg>
    </span>
  );
}

const LIGHT = {
  primary: { color: '#e0e3f0', background: '#2d1866', border: '1px solid #170c33', boxShadow: '0 6px 12px rgba(87,91,123,.24)', hover: { background: '#442599', borderColor: '#442599', color: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,.15)' } },
  secondary: { color: '#442599', background: '#e0e3f0', hover: { background: '#e8eaf0', color: '#5123ce' } },
  tertiary: { color: '#442599', background: 'none', hover: { color: '#5123ce' } },
};
const DARK = {
  primary: { color: '#442599', backgroundColor: '#c5c9de', backgroundImage: 'linear-gradient(to bottom,#e0e3f0,#c5c9de)', border: '1px solid #aeb1c9', boxShadow: '0 6px 12px rgba(0,0,0,.3)', hover: { backgroundColor: '#e0e3f0', backgroundImage: 'linear-gradient(to bottom,#e0e3f0,#e0e3f0)', color: '#5123ce' } },
  secondary: { color: '#c4aeff', background: '#2d1866', hover: { background: '#442599', color: '#d6c8ff' } },
  tertiary: { color: '#c4aeff', background: 'none', hover: { color: '#d6c8ff' } },
};

export function Button({ variant = 'primary', dark = false, icon, iconPosition = 'before', arrow, disabled = false, href, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const withArrow = arrow ?? (variant === 'primary' || variant === 'tertiary');
  const v = (dark ? DARK : LIGHT)[variant] || LIGHT.primary;
  const { hover: hoverStyle, ...base } = v;
  const s = { ...base, ...(hover && !disabled ? hoverStyle : null) };
  const isPrimary = variant === 'primary';
  const padY = isPrimary ? (withArrow || icon ? '0 13px 0 18px' : '0 18px') : variant === 'secondary' ? '0 18px' : 0;
  const veilOpacity = dark ? 0 : (hover && !disabled ? 0.18 : 0.12);
  const Tag = href ? 'a' : 'button';
  const zSpan = { position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center' };
  return (
    <Tag href={href} type={href ? undefined : 'button'} disabled={href ? undefined : disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: variant === 'tertiary' ? 6 : 8, height: 36, borderRadius: 12,
        padding: padY, position: 'relative', overflow: isPrimary ? 'hidden' : 'visible', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, lineHeight: 1,
        whiteSpace: 'nowrap', textDecoration: 'none', border: 'none', boxSizing: 'border-box', ...s, ...style,
      }} {...rest}>
      {isPrimary && <span aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: 11, background: 'linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0))', opacity: veilOpacity, pointerEvents: 'none', transition: 'opacity .2s', zIndex: 0 }} />}
      {icon && iconPosition === 'before' && <span style={{ ...zSpan, width: 16, height: 16, flex: 'none' }}>{icon}</span>}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      {icon && iconPosition === 'after' && <span style={{ ...zSpan, width: 16, height: 16, flex: 'none' }}>{icon}</span>}
      {withArrow && <ArrowSwap hover={hover && !disabled} />}
    </Tag>
  );
}
