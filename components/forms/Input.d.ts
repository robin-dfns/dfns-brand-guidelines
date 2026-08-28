import * as React from 'react';

/**
 * Labelled single-line text field. Figma: "Input".
 * @startingPoint section="Forms" subtitle="Labelled text field with leading and trailing glyphs" viewport="700x150"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Sentence case, e.g. "Wallet address". */
  label?: string;
  /** Renders an asterisk after the label. */
  required?: boolean;
  /** Right-aligned helper beside the label, e.g. "Forgot your password?". */
  hint?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Placeholders are examples, not instructions — "johndoe@gmail.com". */
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare const Input: React.FC<InputProps>;
export default Input;
