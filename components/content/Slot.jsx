import React from 'react';

/* Layout placeholder ("Slot" symbol): dashed purple area marking where consumer content goes. */
export function Slot({ label = 'Slot (swap it with your content)', width = 256, height = 68, style, children, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', width, height, borderRadius: 6, backgroundColor: 'rgba(168,85,247,0.1)', outline: '1px dashed rgba(168,85,247,0.5)', outlineOffset: '-1px', padding: 24, boxSizing: 'border-box', ...style }} {...rest}>
      {children || <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#170c33', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
    </div>
  );
}
