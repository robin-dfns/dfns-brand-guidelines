import * as React from 'react';
/**
 * "CTA Tertiary" Figma family — 12px underlined purple text link (#442599).
 */
export interface CTATertiaryProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
}
export declare function CTATertiary(props: CTATertiaryProps): JSX.Element;
