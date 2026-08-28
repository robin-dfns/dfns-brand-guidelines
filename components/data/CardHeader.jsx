import React from 'react';

/* Figma: Card / Header (node 890:12198). Title Suisse Intl 600 16, line-height 1,
   tracking -0.4px, Dark Purple 900; description Suisse Intl 400 14/20; 6px gap. */

export function CardHeader({ title = 'Title Text', description = 'This is a card description.', trailing, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-300)', ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', minWidth: 0 }}>
        <span style={{
          fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-m)',
          lineHeight: 1, letterSpacing: 'var(--tracking-tight)', color: 'var(--colors-dark-purple-900)',
        }}>{title}</span>
        {description && (
          <span style={{
            fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-base)', fontSize: 'var(--text-base)',
            lineHeight: 'var(--line-m)', color: 'var(--colors-dark-purple-900)',
          }}>{description}</span>
        )}
      </div>
      {trailing}
    </div>
  );
}
export default CardHeader;
