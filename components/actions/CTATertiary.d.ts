import * as React from 'react';
/** Inline text CTA. Figma: "CTA Tertiary" (:hover axis). */
export interface CTATertiaryProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  /** Force the hover rule on for specimens. */
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const CTATertiary: React.FC<CTATertiaryProps>;
export default CTATertiary;
