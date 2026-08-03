import * as React from 'react';
/**
 * DFNS status badge — tinted pill with 1px inner ring, 12px text.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tint. default=ultra-purple, blue=information, green=success, red=danger, yellow=warning, grey=neutral. */
  color?: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'grey';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
