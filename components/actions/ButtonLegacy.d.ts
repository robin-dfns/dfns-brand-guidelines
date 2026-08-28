import * as React from 'react';

/** 40px-tall button set from the Figma file's earlier "Button" component (State x Variant). */
export interface ButtonLegacyProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Figma "State" axis — the visual treatment. */
  tone?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Figma "Variant" axis — the interaction state. */
  variant?: 'Default' | 'Hover' | 'Disabled';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const ButtonLegacy: React.FC<ButtonLegacyProps>;
export default ButtonLegacy;
