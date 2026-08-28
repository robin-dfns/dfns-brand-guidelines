import React from 'react';

/* Figma: CTA Secondary/Test-V1 (variant x :hover). Same caveat as CTAPrimary — the set has
   no laid-out instance in the file; geometry follows the CTA family with an outlined fill. */

export function CTASecondary({ hover, children = 'Secondary', style, ...rest }) {
  const [h, setH] = React.useState(false);
  const on = hover ?? h;
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: 'var(--space-200) var(--space-400)', borderRadius: 'var(--radius-xl)',
      background: on ? 'var(--colors-ultra-purple-50)' : 'transparent',
      boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-ultra-purple-700)',
      fontFamily: 'var(--font-core)', fontWeight: 400, fontSize: 12, lineHeight: '18px',
      color: 'var(--colors-ultra-purple-700)', whiteSpace: 'nowrap', textDecoration: 'none',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style,
    }} {...rest}>{children}</a>
  );
}
export default CTASecondary;
