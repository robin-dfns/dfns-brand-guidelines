import * as React from 'react';
/** Dashed placeholder marking where a consumer's own content goes. Figma: "Slot". Never ship in a real screen. */
export interface SlotProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const Slot: React.FC<SlotProps>;
export default Slot;
