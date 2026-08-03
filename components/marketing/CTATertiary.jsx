import React from 'react';

/* "CTA Tertiary" Figma family — 12px underlined purple text link. */
export function CTATertiary({ children = 'Tertiary', href = '#', style, ...rest }) {
  return (
    <a href={href} style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, lineHeight: '18px', color: '#442599', textDecoration: 'underline', textUnderlineOffset: 3, ...style }} {...rest}>{children}</a>
  );
}
