import React from 'react';

export function CardHeader({ title = 'Title Text', description, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', color: '#170c33', ...style }} {...rest}>
      <span style={{ fontWeight: 600, fontSize: 16, lineHeight: 1, letterSpacing: '-0.4px' }}>{title}</span>
      {description && <span style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px' }}>{description}</span>}
    </div>
  );
}
