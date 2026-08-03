import * as React from 'react';
/**
 * DFNS product button — Rubik 2026. 40px tall, 12px radius, Suisse Intl Medium 14.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. Primary is a purple gradient pill with inner ring. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  /** Optional 20px icon element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Optional 20px icon element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
