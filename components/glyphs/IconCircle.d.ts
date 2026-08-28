import * as React from 'react';
/** Neutral placeholder glyph — the default icon slot in Button. Figma: Icon / Circle (node 890:12217). */
export interface IconCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Box size in px. Default 24; product surfaces also use 16 and 20. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const IconCircle: React.FC<IconCircleProps>;
export default IconCircle;
