import React from 'react';
import Icon from '../../assets/icons/Icon.jsx';

const sheen = (r) => [
  { position: 'absolute', inset: 0, opacity: 0.1, borderRadius: r, background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0) 100%)', pointerEvents: 'none' },
  { position: 'absolute', inset: 1, opacity: 0.05, borderRadius: r - 1, background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0) 100%)', pointerEvents: 'none' },
];

export function CTAPrimary({ children = 'Sign up', showIcon = true, style, ...rest }) {
  const [s1, s2] = sheen(12);
  return (
    <button type="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', height: 36, minHeight: 36, padding: '0 4px 0 16px', borderRadius: 12, border: 'none', cursor: 'pointer', backgroundColor: '#2d1866', boxShadow: 'inset 0 0 0 1px #170c33, 0 6px 12px 0 rgba(87,91,123,0.24)', ...style }} {...rest}>
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, lineHeight: '14px', color: '#e0e3f0', whiteSpace: 'nowrap' }}>{children}</span>
        {showIcon && <Icon name="HeroiconsSolidArrowDot" size={16} style={{ color: '#e0e3f0' }} />}
      </span>
      <span style={s1} /><span style={s2} />
    </button>
  );
}

export function CTASecondary({ children = 'Secondary', showIcon = true, style, ...rest }) {
  const [s1, s2] = sheen(12);
  return (
    <button type="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 36, minHeight: 36, padding: '0 4px 0 16px', borderRadius: 12, border: 'none', cursor: 'pointer', backgroundColor: '#e0e3f0', ...style }} {...rest}>
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, lineHeight: '14px', color: '#442599', whiteSpace: 'nowrap' }}>{children}</span>
        {showIcon && <Icon name="HeroiconsMiniArrowDot" size={16} style={{ color: '#442599' }} />}
      </span>
      <span style={s1} /><span style={s2} />
    </button>
  );
}
