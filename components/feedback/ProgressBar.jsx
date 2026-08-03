import React from 'react';

export function ProgressBar({ value = 50, width = '100%', height = 12, style, ...rest }) {
  return (
    <div style={{ position: 'relative', width, height, borderRadius: 50, backgroundColor: '#edf2f7', overflow: 'hidden', ...style }} {...rest}>
      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.max(0, Math.min(100, value))}%`, borderRadius: 50, background: 'linear-gradient(268.142deg,#68dbf2 0.01%,#509cf5 100%)' }} />
    </div>
  );
}
