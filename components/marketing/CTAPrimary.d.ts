import * as React from 'react';
/**
 * DFNS marketing CTAs — 36px pills with white sheen overlays and arrow-dot glyph.
 */
export interface CTAPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Show the trailing arrow-dot icon. */
  showIcon?: boolean;
}
export declare function CTAPrimary(props: CTAPrimaryProps): JSX.Element;
export interface CTASecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
}
export declare function CTASecondary(props: CTASecondaryProps): JSX.Element;
