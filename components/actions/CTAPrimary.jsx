import React from 'react';

/* Figma: CTA Primary/-V1 (variant x :hover). The set is defined in the file but has no
   laid-out instance, so its geometry follows the CTA family: 400 12/18 label on the
   Ultra Purple 700 fill, radius 12. See readme.md "Known gaps". */

export function CTAPrimary({ hover, children = 'Primary', style, ...rest }) {
  const [h, setH] = React.useState(false);
  const on = hover ?? h;
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-200) var(--space-400)', borderRadius: 'var(--radius-xl)',
      background: on ? 'var(--colors-ultra-purple-600)' : 'var(--colors-ultra-purple-700)',
      fontFamily: 'var(--font-core)', fontWeight: 400, fontSize: 12, lineHeight: '18px',
      color: 'var(--colors-cold-grey-100)', whiteSpace: 'nowrap', textDecoration: 'none',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style,
    }} {...rest}>{children}</a>
  );
}
export default CTAPrimary;
