import React from 'react';

/* Figma: Input (node 424:307). Field 36px tall, radius 12, white fill, 1px Cold Grey 300
   inset ring, 4/12 padding, 8px gap, 16px leading/trailing glyphs. Label Suisse Intl 400 14
   in Cold Grey 900 with an 8px gap above the field. */

export function Input({
  label, required = false, hint, leadingIcon, trailingIcon,
  placeholder = 'Placeholder', invalid = false, disabled = false, style, ...rest
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)', ...style }}>
      {(label || hint) && (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-200)' }}>
          {label && (
            <label style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-base)', lineHeight: 1, color: 'var(--colors-cold-grey-900)' }}>
              {label}{required && <span style={{ color: 'var(--colors-error-base)' }}> *</span>}
            </label>
          )}
          {hint && <span style={{ fontFamily: 'var(--font-core)', fontSize: 'var(--text-base)', lineHeight: 1, color: 'var(--colors-cold-grey-900)', textAlign: 'right' }}>{hint}</span>}
        </div>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-200)',
        height: 'var(--control-h-9)', padding: 'var(--space-100) var(--space-300)',
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        background: disabled ? 'var(--colors-states-disabled-background)' : 'var(--colors-base-input-background)',
        boxShadow: invalid
          ? 'inset 0 0 0 var(--stroke-base) var(--colors-error-base)'
          : 'var(--ring-input)',
        color: 'var(--colors-cold-grey-900)',
      }}>
        {leadingIcon}
        <input
          disabled={disabled}
          placeholder={placeholder}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-core)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-base)',
            lineHeight: 1, color: 'inherit', padding: 0,
          }}
          {...rest}
        />
        {trailingIcon}
      </div>
    </div>
  );
}
export default Input;
