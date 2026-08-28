import * as React from 'react';
/** 47 network marks. Figma: "Crypto Icons Square - Networks". */
export interface CryptoIconSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Symbol name, e.g. "Bitcoin". See CryptoIcon.d.ts for the full list. */
  symbol: string;
  /** Rendered size in px. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const CryptoIconSquare: React.FC<CryptoIconSquareProps>;
export default CryptoIconSquare;
