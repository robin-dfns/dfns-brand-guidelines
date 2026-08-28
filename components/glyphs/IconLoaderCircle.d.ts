import * as React from 'react';
/** Pairs with present-continuous copy: "Loading wallet data…". Figma: Icon / LoaderCircle (node 890:12226). */
export interface IconLoaderCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Box size in px. Default 24; product surfaces also use 16 and 20. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const IconLoaderCircle: React.FC<IconLoaderCircleProps>;
export default IconLoaderCircle;
