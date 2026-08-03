import * as React from 'react';
/**
 * "Icon Info with Tooltip" Figma family (Showing: top/bottom, Open: hover) — alias of InfoTooltip.
 */
export interface IconInfoWithTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  showing?: 'top' | 'bottom';
  size?: number;
}
export declare function IconInfoWithTooltip(props: IconInfoWithTooltipProps): JSX.Element;
