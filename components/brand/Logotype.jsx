import React from 'react';

/* Figma: Logotype (node 313:432). Symbol 345.046 x 302 at origin; wordmark 755.518 x 205.366
   at x 417.482 / y 48.317 inside a 1173 x 302 box. Both are single-colour SVGs tinted by the
   `color` prop — Cold Grey 700 in the file. Pass showType={false} for the symbol alone. */

const RATIO = 1173 / 302;
const SYMBOL_RATIO = 345.046 / 302;

export function Logotype({ height = 32, showType = true, color = 'var(--colors-cold-grey-700)', style, ...rest }) {
  const scale = height / 302;
  return (
    <span
      role="img"
      aria-label="DFNS"
      style={{
        position: 'relative', display: 'inline-block',
        height, width: height * (showType ? RATIO : SYMBOL_RATIO),
        background: color,
        WebkitMaskImage: showType
          ? 'url(../../assets/logo-symbol.svg), url(../../assets/logo-type.svg)'
          : 'url(../../assets/logo-symbol.svg)',
        maskImage: showType
          ? 'url(../../assets/logo-symbol.svg), url(../../assets/logo-type.svg)'
          : 'url(../../assets/logo-symbol.svg)',
        WebkitMaskRepeat: 'no-repeat, no-repeat',
        maskRepeat: 'no-repeat, no-repeat',
        WebkitMaskPosition: showType ? `0 0, ${417.482 * scale}px ${48.317 * scale}px` : '0 0',
        maskPosition: showType ? `0 0, ${417.482 * scale}px ${48.317 * scale}px` : '0 0',
        WebkitMaskSize: showType
          ? `${345.046 * scale}px ${302 * scale}px, ${755.518 * scale}px ${205.366 * scale}px`
          : `${345.046 * scale}px ${302 * scale}px`,
        maskSize: showType
          ? `${345.046 * scale}px ${302 * scale}px, ${755.518 * scale}px ${205.366 * scale}px`
          : `${345.046 * scale}px ${302 * scale}px`,
        ...style,
      }}
      {...rest}
    />
  );
}
export default Logotype;
