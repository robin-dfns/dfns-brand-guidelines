import React from 'react';

/* Figma: Icon / Circle (node 890:12217). A 20x20 stroked circle inset 2px inside a 24px box.
   The .fig exported this symbol with empty vector geometry, so the path data is the
   matching Lucide glyph at the same 24px box and 2px stroke. See readme.md "Iconography". */

export function IconCircle({ size = 24, style, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ display: 'block', color: 'var(--colors-dark-purple-900)', ...style }}
      dangerouslySetInnerHTML={{ __html: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>' }}
      {...rest}
    />
  );
}
export default IconCircle;
