import React from 'react';

/* Figma: Icon / Copy (node 890:12202). Copy-to-clipboard glyph, 20x20 stroked artwork inset 2px in a 24px box.
   The .fig exported this symbol with empty vector geometry, so the path data is the
   matching Lucide glyph at the same 24px box and 2px stroke. See readme.md "Iconography". */

export function IconCopy({ size = 24, style, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ display: 'block', color: 'var(--colors-dark-purple-900)', ...style }}
      dangerouslySetInnerHTML={{ __html: '<rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>' }}
      {...rest}
    />
  );
}
export default IconCopy;
