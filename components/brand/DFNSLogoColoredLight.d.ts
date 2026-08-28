import * as React from 'react';
/** Alternative lockup with the hexagonal symbol and outlined wordmark. Figma: "DFNS-Logo/Colored/Light". */
export interface DFNSLogoColoredLightProps extends Omit<React.SVGProps<SVGSVGElement>, 'style' | 'color'> {
  /** Rendered height in px. Width follows the 390:100 lockup ratio (116:100 for the symbol alone). */
  height?: number;
  /** false renders the hexagonal symbol alone. */
  showType?: boolean;
  /** Any CSS colour. Cold Grey 700 in the source file. */
  color?: string;
  style?: React.CSSProperties;
}
export declare const DFNSLogoColoredLight: React.FC<DFNSLogoColoredLightProps>;
export default DFNSLogoColoredLight;
