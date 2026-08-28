import React from 'react';

/* Figma: Button — State (Primary/Secondary/Outline/Ghost) x Variant (Default/Hover/Disabled),
   node 418:125. The earlier of the file's two button sets: 40px tall, 12/16 padding,
   20-24px glyphs on both sides. Kept because the file still defines it. */

const TONE = {
  primary: {
    Default:  { background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-button-base)', color: 'var(--colors-cold-grey-100)' },
    Hover:    { background: 'var(--gradient-primary-hover)', boxShadow: 'var(--shadow-button-base)', color: 'var(--colors-cold-grey-100)' },
    Disabled: { background: 'var(--colors-steel-grey-200)', color: 'var(--colors-cold-grey-500)' },
  },
  secondary: {
    Default:  { background: 'var(--colors-cold-grey-100)', color: 'var(--colors-ultra-purple-700)' },
    Hover:    { background: 'var(--colors-ultra-purple-50)', color: 'var(--colors-ultra-purple-700)' },
    Disabled: { background: 'var(--colors-steel-grey-200)', color: 'var(--colors-cold-grey-500)' },
  },
  outline: {
    Default:  { background: 'transparent', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-ultra-purple-700)', color: 'var(--colors-ultra-purple-700)' },
    Hover:    { background: 'var(--colors-ultra-purple-50)', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-ultra-purple-700)', color: 'var(--colors-ultra-purple-700)' },
    Disabled: { background: 'transparent', boxShadow: 'inset 0 0 0 var(--stroke-large) var(--colors-cold-grey-300)', color: 'var(--colors-cold-grey-500)' },
  },
  ghost: {
    Default:  { background: 'var(--colors-steel-grey-white)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-cold-grey-700)' },
    Hover:    { background: 'var(--colors-steel-grey-200)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-cold-grey-700)' },
    Disabled: { background: 'var(--colors-steel-grey-white)', boxShadow: 'inset 0 0 0 var(--stroke-base) var(--colors-cold-grey-100)', color: 'var(--colors-cold-grey-500)' },
  },
};

export function ButtonLegacy({ tone = 'primary', variant = 'Default', leadingIcon, trailingIcon, children, style, ...rest }) {
  const skin = (TONE[tone] || TONE.primary)[variant] || TONE[tone].Default;
  return (
    <button type="button" disabled={variant === 'Disabled'} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: 'var(--space-250)', height: 'var(--control-h-10)',
      padding: 'var(--space-300) var(--space-400)',
      border: 'none', borderRadius: 'var(--radius-xl)',
      fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-base)', lineHeight: 1,
      cursor: variant === 'Disabled' ? 'not-allowed' : 'pointer',
      ...skin, ...style,
    }} {...rest}>
      {leadingIcon}{children}{trailingIcon}
    </button>
  );
}
export default ButtonLegacy;
