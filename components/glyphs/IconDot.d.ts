import * as React from 'react';
/** Separator or "no change" mark in dense rows and list items. Figma: Icon / Dot (node 890:12567). */
export interface IconDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Box size in px. Default 24; product surfaces also use 16 and 20. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const IconDot: React.FC<IconDotProps>;
export default IconDot;
