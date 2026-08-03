import * as React from 'react';
/**
 * DFNS text input — 36px field, radius 6, white with 1px #c5c9de inner ring, 14px label above.
 */
export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional 16px icon before the text. */
  iconLeft?: React.ReactNode;
  /** Optional 16px icon after the text. */
  iconRight?: React.ReactNode;
  /** Right-aligned inline action, e.g. a "Forgot your password?" link. */
  action?: React.ReactNode;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
