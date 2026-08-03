import * as React from 'react';
/**
 * DFNS colored cube mark ("DFNS-Logo/Colored/Light") — real brand SVG, never redraw.
 */
export interface DfnsLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: number;
  /** Include the legacy wordmark next to the cube. */
  withWordmark?: boolean;
  /** Path prefix from the consuming page to the design-system root, e.g. "../../". */
  base?: string;
}
export declare function DfnsLogo(props: DfnsLogoProps): JSX.Element;
