import * as React from 'react';
/** Determinate progress track. Figma: "progress-bar/w-50". */
export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Percentage filled, 0-100. The Figma variant is named for 50. */
  value?: number;
  style?: React.CSSProperties;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
