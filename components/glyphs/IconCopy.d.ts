import * as React from 'react';
/** Sits after a wallet address, org ID or transaction hash. Figma: Icon / Copy (node 890:12202). */
export interface IconCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Box size in px. Default 24; product surfaces also use 16 and 20. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const IconCopy: React.FC<IconCopyProps>;
export default IconCopy;
