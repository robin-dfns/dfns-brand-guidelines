import * as React from 'react';

/**
 * The DFNS lockup: symbol plus wordmark. Figma: "Logotype" (Mode x Type).
 * @startingPoint section="Brand" subtitle="Symbol and wordmark lockup" viewport="700x140"
 */
export interface LogotypeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Rendered height in px. Width follows the 1173:302 lockup ratio. */
  height?: number;
  /** false renders the symbol alone (the app icon / favicon mark). */
  showType?: boolean;
  /** Any CSS colour. Cold Grey 700 in the source file; use white on the purple app icon. */
  color?: string;
  style?: React.CSSProperties;
}
export declare const Logotype: React.FC<LogotypeProps>;
export default Logotype;
