import React from 'react';

/* Figma: Slot (node 493:2537). A layout placeholder, not product chrome: 256px wide,
   radius 6, rgba(168,85,247,0.1) fill, 1px dashed rgba(168,85,247,0.5) inset outline,
   24px padding, 400 14/20 centred label (PP Neue Montreal in the source; Suisse Intl here). */

export function Slot({ label = 'Slot (swap it with your content)', children, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-200)',
      width: 256, padding: 'var(--space-600)', borderRadius: 'var(--radius-base)', overflow: 'hidden',
      background: 'rgba(168,85,247,0.1)',
      outline: '1px dashed rgba(168,85,247,0.5)', outlineOffset: -1,
      fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-base)',
      lineHeight: 'var(--line-m)', textAlign: 'center', color: 'var(--base-foreground)',
      ...style,
    }} {...rest}>
      {children || <span style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>}
    </div>
  );
}
export default Slot;
