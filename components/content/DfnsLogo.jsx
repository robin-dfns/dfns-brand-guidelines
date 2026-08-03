import React from 'react';

/* "DFNS-Logo/Colored/Light" — the colored cube mark from the real brand SVG. `base` = path prefix to the design-system root. */
export function DfnsLogo({ height = 29, withWordmark = false, base = '', style, ...rest }) {
  return <img src={base + (withWordmark ? 'assets/logo.svg' : 'assets/dfns-logo-cube.svg')} alt="DFNS" style={{ height, ...style }} {...rest} />;
}
