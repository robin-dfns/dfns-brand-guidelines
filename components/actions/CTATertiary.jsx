import React from 'react';

/* Figma: CTA Tertiary (:hover axis, node 510:1197). 400 12/18 in Ultra Purple 700;
   a 0.5px rule appears under the label on hover and is absent at rest. */

export function CTATertiary({ hover, children = 'Tertiary', style, ...rest }) {
  const [h, setH] = React.useState(false);
  const on = hover ?? h;
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'inline-block', padding: '1px 1px 0',
      fontFamily: 'var(--font-core)', fontWeight: 400, fontSize: 12, lineHeight: '18px',
      color: 'var(--colors-ultra-purple-700)', textAlign: 'center', whiteSpace: 'nowrap',
      textDecoration: 'none',
      borderBottom: `var(--stroke-small) solid ${on ? 'var(--colors-ultra-purple-700)' : 'transparent'}`,
      ...style,
    }} {...rest}>{children}</a>
  );
}
export default CTATertiary;
