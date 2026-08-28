import React from 'react';

/* Figma: Icon / Dot (node 890:12567). A 2x2 mark centred in a 24px box.
   The .fig exported this symbol with empty vector geometry, so the path data is the
   matching Lucide glyph at the same 24px box and 2px stroke. See readme.md "Iconography". */

export function IconDot({ size = 24, style, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ display: 'block', color: 'var(--colors-dark-purple-900)', ...style }}
      dangerouslySetInnerHTML={{ __html: '<circle cx="12.1" cy="12.1" r="1" fill="currentColor"/>' }}
      {...rest}
    />
  );
}
export default IconDot;
