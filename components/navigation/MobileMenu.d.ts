import * as React from 'react';

/**
 * Floating four-item tab bar for the mobile app. Figma: "Menu".
 * @startingPoint section="Navigation" subtitle="Floating mobile tab bar" viewport="700x140"
 */
export interface MobileMenuItem {
  /** Title Case nav label: Dashboard, Transfers, Approvals, Menu. */
  label: string;
  /** 20px glyph. */
  icon?: React.ReactNode;
}
export interface MobileMenuProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  items?: MobileMenuItem[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}
export declare const MobileMenu: React.FC<MobileMenuProps>;
export default MobileMenu;
