import React from 'react';

/* Renders the DFNS logotype from the real brand SVGs. `base` = path prefix to the design-system root
   from the consuming page (e.g. "../../" inside this project's cards, "_ds/dfns/" in a consumer). */
export function Logotype({ variant = 'full', height = 28, base = '', style, ...rest }) {
  const src = base + (variant === 'symbol' ? 'assets/dfns-logo-cube.svg' : 'assets/logotype-2026.svg');
  return <img src={src} alt="DFNS" style={{ height, ...style }} {...rest} />;
}
