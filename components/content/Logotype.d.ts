import * as React from 'react';
/**
 * DFNS logotype — real brand SVG (cube symbol + wordmark). Never redraw.
 */
export interface LogotypeProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** full = symbol + wordmark; symbol = cube only. */
  variant?: 'full' | 'symbol';
  height?: number;
  /** Path prefix from the consuming page to the design-system root, e.g. "../../". */
  base?: string;
}
export declare function Logotype(props: LogotypeProps): JSX.Element;
