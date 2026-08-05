import React from 'react';

/* Layout placeholder ("Slot" symbol): dashed brand-purple area marking where
   consumer content goes. Token-driven (Ultra Purple 300 tint + dash). */
export function Slot({ label = 'Slot (swap it with your content)', width = 256, height = 68, style, children, ...rest }) {
  const purple = 'var(--ultra-purple-300,#aa8bff)';
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', width, height, borderRadius: 6, backgroundColor: `color-mix(in srgb, ${purple} 12%, transparent)`, outline: `1px dashed color-mix(in srgb, ${purple} 50%, transparent)`, outlineOffset: '-1px', padding: 24, boxSizing: 'border-box', ...style }} {...rest}>
      {children || <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--font-bw,#170c33)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
    </div>
  );
}
