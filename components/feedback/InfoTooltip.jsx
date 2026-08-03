import React from 'react';
import Icon from '../../assets/icons/Icon.jsx';

export function InfoTooltip({ text, showing = 'top', size = 18, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative', display: 'inline-flex', width: size, height: size, ...style }} {...rest}>
      <Icon name="HeroiconsOutlineInformationCircle" size={size} style={{ color: '#170c33' }} />
      {open && text && (
        <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', ...(showing === 'top' ? { bottom: size + 6 } : { top: size + 6 }), backgroundColor: '#170c33', color: '#f0f1f4', fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, lineHeight: '16px', padding: '6px 10px', borderRadius: 6, whiteSpace: 'nowrap', zIndex: 10, boxShadow: '0 6px 12px rgba(87,91,123,0.24)' }}>{text}</span>
      )}
    </span>
  );
}
