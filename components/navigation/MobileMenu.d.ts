import * as React from 'react';
/**
 * DFNS mobile bottom tab bar ("Menu") — white pill with icon+label pill tabs.
 */
export interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** [label, iconName] pairs. Defaults to Dashboard/Transfers/Approval/Settings. */
  items?: [string, string][];
  /** Index of the active tab (grey pill highlight). */
  active?: number;
  onSelect?: (index: number) => void;
}
export declare function MobileMenu(props: MobileMenuProps): JSX.Element;
