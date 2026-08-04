import * as React from 'react';
/**
 * DFNS Button — the canonical CTA (marketing design). 36px tall, 12px radius,
 * Suisse Intl 500 Medium. Three variants, optional leading icon + animated arrow.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual variant. Primary = purple relief pill · Secondary = Cold Grey 100 · Tertiary = text link. */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Dark surface treatment (matches Button.astro `dark`). */
  dark?: boolean;
  /** Optional 16px icon element (freely swappable). */
  icon?: React.ReactNode;
  /** Icon placement relative to the label. */
  iconPosition?: 'before' | 'after';
  /** Animated trailing arrow (brand signature). Defaults on except `secondary`. */
  arrow?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of <button> when provided. */
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
