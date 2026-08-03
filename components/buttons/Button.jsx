import React from 'react';

const V = {
  primary: {
    background: 'linear-gradient(180deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0) 100%),linear-gradient(0deg,#2d1866 0%,#442599 100%)',
    boxShadow: 'inset 0 0 0 1px #2d1866', color: '#e0e3f0',
    hover: { background: 'linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)),linear-gradient(180deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0) 100%),linear-gradient(0deg,#2d1866 0%,#442599 100%)' },
  },
  secondary: { background: '#e0e3f0', color: '#442599', hover: { color: '#693aea' } },
  outline: { background: 'transparent', color: '#442599', boxShadow: 'inset 0 0 0 2px #442599', hover: { color: '#575c7b', boxShadow: 'inset 0 0 0 2px #575c7b' } },
  ghost: { background: '#ffffff', color: '#363a5b', boxShadow: 'inset 0 0 0 1px #e0e3f0', hover: { background: '#f0f1f4' } },
};

export function Button({ variant = 'primary', disabled = false, iconLeft, iconRight, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = disabled
    ? { background: '#e8eaf0', color: '#aeb1c9', boxShadow: 'none' }
    : { background: v.background, color: v.color, boxShadow: v.boxShadow || 'none', ...(hover ? v.hover : null) };
  return (
    <button type="button" disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', flexDirection: 'row', gap: 10, padding: '12px 16px', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 12, border: 'none', cursor: disabled ? 'default' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, lineHeight: 1, whiteSpace: 'nowrap', boxSizing: 'border-box', ...s, ...style }}
      {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
