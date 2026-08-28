import * as React from 'react';

/**
 * Status pill. Figma: "Badge" (Color axis).
 * @startingPoint section="Data" subtitle="Six-colour status pill" viewport="700x110"
 */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Semantic colour. grey = neutral, green = success, yellow = warning, red = error, blue = information. */
  color?: 'default' | 'grey' | 'green' | 'yellow' | 'red' | 'blue';
  /** Title Case, at most two words: Pending, Broadcasted, Completed, Failed, Expired. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
