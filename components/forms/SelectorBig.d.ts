import * as React from 'react';

/**
 * Org / workspace switcher row. Figma: "Selector Big".
 * @startingPoint section="Forms" subtitle="Org switcher with avatar and chevron" viewport="700x120"
 */
export interface SelectorBigProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Truncates with an ellipsis when it overflows. */
  label?: string;
  /** 28px mark rendered inside the leading tile — pass the real org image, not a placeholder. */
  avatar?: React.ReactNode;
  /** Tile fill behind the avatar. */
  avatarColor?: string;
  /** 20px glyph, rendered at 50% opacity. Use HeroiconsMiniChevronUpDown. */
  trailingIcon?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const SelectorBig: React.FC<SelectorBigProps>;
export default SelectorBig;
