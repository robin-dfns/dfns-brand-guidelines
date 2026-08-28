import React from 'react';

/* Figma: Icon / LoaderCircle (node 890:12226). Spinner arc; rotates continuously while content loads.
   The .fig exported this symbol with empty vector geometry, so the path data is the
   matching Lucide glyph at the same 24px box and 2px stroke. See readme.md "Iconography". */

export function IconLoaderCircle({ size = 24, style, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ display: 'block', color: 'var(--colors-dark-purple-900)', animation: 'dfns-spin 900ms linear infinite', ...style }}
      dangerouslySetInnerHTML={{ __html: '<path d="M21 12a9 9 0 1 1-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>' }}
      {...rest}
    />
  );
}
export default IconLoaderCircle;
