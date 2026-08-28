import React from 'react';

/* Figma: progress-bar/w-50 (node 510:1009). 12px tall, radius 50, track rgb(237,242,247),
   fill a 268.142deg gradient from rgb(104,219,242) to rgb(80,156,245). The source names the
   50% variant; `value` generalises the fill width. These two cyans are the only colours in
   the file outside the documented ramps — the component keeps them verbatim. */

export function ProgressBar({ value = 50, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} style={{
      position: 'relative', width: '100%', height: 12, borderRadius: 50,
      background: 'rgb(237,242,247)', overflow: 'hidden', ...style,
    }} {...rest}>
      <div style={{
        position: 'absolute', left: 0, top: 0, height: 12, width: pct + '%', borderRadius: 50,
        background: 'linear-gradient(268.142deg, rgb(104,219,242) 0.01%, rgb(80,156,245) 100%)',
        transition: 'width var(--duration-base) var(--ease-standard)',
      }} />
    </div>
  );
}
export default ProgressBar;
