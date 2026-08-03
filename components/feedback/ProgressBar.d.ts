import * as React from 'react';
/**
 * DFNS progress bar — 12px rounded track with cyan→blue gradient fill.
 */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Percentage 0–100. */
  value?: number;
  width?: number | string;
  height?: number;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
