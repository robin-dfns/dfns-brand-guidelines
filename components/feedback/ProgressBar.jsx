import React from 'react';

/* Token-driven track. NOTE: the fill gradient has no brand token yet
   (candidate for a future --progress-* token); kept as a literal for now. */
export function ProgressBar({ value = 50, width = '100%', height = 12, style, ...rest }) {
  return (
    <div style={{ position: 'relative', width, height, borderRadius: 50, backgroundColor: 'var(--background-elevation-1,#e8eaf0)', overflow: 'hidden', ...style }} {...rest}>
      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.max(0, Math.min(100, value))}%`, borderRadius: 50, background: 'linear-gradient(268deg,#68dbf2,#509cf5)' }} />
    </div>
  );
}
