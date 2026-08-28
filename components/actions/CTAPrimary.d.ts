import * as React from 'react';
/** Filled marketing CTA. Figma: "CTA Primary/-V1" (variant x :hover). */
export interface CTAPrimaryProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const CTAPrimary: React.FC<CTAPrimaryProps>;
export default CTAPrimary;
