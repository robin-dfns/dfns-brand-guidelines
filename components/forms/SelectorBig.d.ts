import * as React from 'react';
/**
 * DFNS org/workspace selector — 44px row with 28px avatar, name, and up/down chevron.
 */
export interface SelectorBigProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** 28px avatar/logo element. Defaults to a purple placeholder square. */
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
}
export declare function SelectorBig(props: SelectorBigProps): JSX.Element;
