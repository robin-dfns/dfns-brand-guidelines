import * as React from 'react';

/**
 * Info glyph that reveals an explanatory tooltip. Figma: "Icon Info with Tooltip".
 * @startingPoint section="Feedback" subtitle="Info glyph with a 240-character tooltip" viewport="700x160"
 */
export interface IconInfoTooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'content'> {
  /** Which side the panel appears on. Figma axis "Showing". */
  showing?: 'Top' | 'Bottom';
  /** Force the panel open for specimens. Figma axis "Open". */
  open?: boolean;
  /** Explains a concept, not an action. 240 characters maximum. */
  content?: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
}
export declare const IconInfoTooltip: React.FC<IconInfoTooltipProps>;
export default IconInfoTooltip;
