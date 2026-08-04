import * as React from 'react';
/**
 * DFNS Button — the canonical CTA (marketing design). 36px tall, 12px radius,
 * Suisse Intl 500 Medium. Three variants, optional leading icon + animated arrow.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual variant. Primary = purple relief pill · Secondary = Cold Grey 100 · Tertiary = text link. */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Optional 16px icon element rendered before the label (freely swappable). */
  icon?: React.ReactNode;
  /** Animated trailing arrow (brand signature). Defaults on except `secondary`. */
  arrow?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of <button> when provided. */
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
