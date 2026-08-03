import * as React from 'react';
/**
 * DFNS "Slot" placeholder — dashed purple content slot used in layout mockups.
 */
export interface SlotProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}
export declare function Slot(props: SlotProps): JSX.Element;
