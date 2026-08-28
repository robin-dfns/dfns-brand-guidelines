import * as React from 'react';
/** Outlined marketing CTA. Figma: "CTA Secondary/Test-V1" (variant x :hover). */
export interface CTASecondaryProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const CTASecondary: React.FC<CTASecondaryProps>;
export default CTASecondary;
