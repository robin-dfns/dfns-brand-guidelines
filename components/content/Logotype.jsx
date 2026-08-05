import React from 'react';

/* Renders the DFNS logotype from the real brand SVGs in assets/logos/.
   `base` = path prefix to the design-system root from the consuming page
   (e.g. "../" inside docs, "_ds/dfns/" in a consumer). variant: full | symbol. */
export function Logotype({ variant = 'full', height = 28, base = '', style, ...rest }) {
  const file = variant === 'symbol' ? 'logotype-symbol.svg' : 'logotype-2026.svg';
  return <img src={`${base}assets/logos/${file}`} alt="DFNS" style={{ height, ...style }} {...rest} />;
}
