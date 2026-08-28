import * as React from 'react';

/**
 * Title + description block at the top of a card or panel. Figma: "Card / Header".
 * @startingPoint section="Data" subtitle="Card title and description block" viewport="700x120"
 */
export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  /** Title Case. */
  title?: string;
  /** Sentence case. Pass null to hide. */
  description?: React.ReactNode;
  /** Right-aligned action slot — a Button, menu glyph or Badge. */
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const CardHeader: React.FC<CardHeaderProps>;
export default CardHeader;
