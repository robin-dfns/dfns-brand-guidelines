import * as React from 'react';
/**
 * DFNS "Card / Header" — 16px semibold title (-0.4px tracking) with optional 14px description.
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.ReactNode;
}
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
