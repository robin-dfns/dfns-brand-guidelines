import React from 'react';

/* Figma: Button — Variant × State × Size (node 890:12269). Values transcribed from the
   source: h36 default / radius 12 / gap 8 / padding 8px 16px, label Suisse Intl 500 14/20. */

const VARIANT = {
  default: {
    rest:     { background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-button-base)', color: 'var(--colors-primary-foreground-light)' },
    hover:    { background: 'var(--gradient-primary-hover)', boxShadow: 'var(--shadow-button-base)', color: 'var(--colors-primary-foreground-light)' },
    disabled: { background: 'var(--colors-states-disabled-background)', color: 'var(--colors-states-disabled-foreground)' },
  },
  secondary: {
    rest:     { background: 'var(--colors-cold-grey-100)', color: 'var(--colors-ultra-purple-700)' },
    hover:    { background: 'var(--colors-ultra-purple-50)', color: 'var(--colors-ultra-purple-700)' },
    disabled: { background: 'var(--colors-states-disabled-background)', color: 'var(--colors-states-disabled-foreground)' },
  },
  outline: {
    rest:     { background: 'transparent', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-ultra-purple-700)', color: 'var(--colors-ultra-purple-700)' },
    hover:    { background: 'var(--colors-ultra-purple-50)', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-ultra-purple-700)', color: 'var(--colors-ultra-purple-700)' },
    disabled: { background: 'transparent', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-cold-grey-300)', color: 'var(--colors-states-disabled-foreground)' },
  },
  ghost: {
    rest:     { background: 'var(--colors-steel-grey-white)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-cold-grey-700)' },
    hover:    { background: 'var(--colors-steel-grey-200)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-cold-grey-700)' },
    disabled: { background: 'var(--colors-steel-grey-white)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-states-disabled-foreground)' },
  },
  destructive: {
    rest:     { background: 'var(--colors-system-red-500)', color: 'var(--colors-steel-grey-white)' },
    hover:    { background: 'var(--colors-system-red-700)', color: 'var(--colors-steel-grey-white)' },
    disabled: { background: 'var(--colors-states-disabled-background)', color: 'var(--colors-states-disabled-foreground)' },
  },
};

const SIZE = {
  sm:      { height: 'var(--control-h-8)', padding: '0 var(--space-300)', fontSize: 'var(--text-s)' },
  default: { height: 'var(--control-h-9)', padding: '0 var(--space-400)', fontSize: 'var(--text-base)' },
  lg:      { height: 'var(--control-h-10)', padding: '0 var(--space-500)', fontSize: 'var(--text-base)' },
  icon:    { height: 'var(--control-h-9)', width: 'var(--control-h-9)', padding: '0', fontSize: 'var(--text-base)' },
};

export function Button({
  variant = 'default', size = 'default', state, disabled = false,
  leadingIcon, trailingIcon, fullWidth = false, children, style, ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const effective = disabled ? 'disabled' : (state || (hovered ? 'hover' : 'rest'));
  const key = effective === 'rest' ? 'rest' : effective;
  const skin = (VARIANT[variant] || VARIANT.default)[key] || VARIANT[variant].rest;
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 'var(--space-200)',
        border: 'none', borderRadius: 'var(--radius-xl)',
        fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--line-m)', letterSpacing: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: fullWidth ? '100%' : (SIZE[size].width || 'auto'),
        transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
        ...SIZE[size], ...skin, ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {size !== 'icon' && children}
      {size === 'icon' && !leadingIcon && children}
      {trailingIcon}
    </button>
  );
}
export default Button;
