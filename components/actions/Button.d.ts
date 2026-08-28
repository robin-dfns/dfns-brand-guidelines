import * as React from 'react';

/**
 * Primary action control. Figma: "Button" (Variant x State x Size).
 * @startingPoint section="Actions" subtitle="Primary, secondary, outline, ghost and destructive buttons" viewport="700x180"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Visual treatment. "default" is the ultra-purple gradient fill. */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  /** Control height: sm 32px, default 36px, lg 40px, icon 36x36 square. */
  size?: 'sm' | 'default' | 'lg' | 'icon';
  /** Force a state for specimens. Omit to let hover be driven by pointer. */
  state?: 'rest' | 'hover' | 'disabled';
  disabled?: boolean;
  /** 16px glyph rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** 16px glyph rendered after the label. */
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
