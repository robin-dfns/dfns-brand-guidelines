import React from 'react';

/* Token-driven info tooltip. Uses an inline info glyph (never the forbidden
   Heroicons *outline* set) + the dark bubble on hover. */
export function InfoTooltip({ text, showing = 'top', size = 18, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative', display: 'inline-flex', width: size, height: size, color: 'var(--icons-tertiary,#170c33)', ...style }} {...rest}>
      <svg viewBox="0 0 20 20" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" /><path d="M10 9v5M10 6.4h.01" strokeLinecap="round" />
      </svg>
      {open && text && (
        <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', ...(showing === 'top' ? { bottom: size + 6 } : { top: size + 6 }), backgroundColor: 'var(--ultra-purple-900,#170c33)', color: 'var(--steel-grey-100,#f0f1f4)', fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, lineHeight: '16px', padding: '6px 10px', borderRadius: 6, whiteSpace: 'nowrap', zIndex: 10, boxShadow: '0 6px 12px rgba(87,91,123,0.24)' }}>{text}</span>
      )}
    </span>
  );
}
