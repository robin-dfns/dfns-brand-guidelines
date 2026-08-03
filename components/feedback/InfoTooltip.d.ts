import * as React from 'react';
/**
 * DFNS "Icon Info with Tooltip" — 18px info-circle that reveals a dark tooltip on hover.
 */
export interface InfoTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip copy shown on hover. */
  text?: string;
  /** Which side the tooltip appears on. */
  showing?: 'top' | 'bottom';
  /** Icon size in px (source: 18). */
  size?: number;
}
export declare function InfoTooltip(props: InfoTooltipProps): JSX.Element;
