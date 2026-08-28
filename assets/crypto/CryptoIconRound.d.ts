import * as React from 'react';
/** 44 cryptocurrency marks. Figma: "Crypto Icons Round - Cryptocurrencies". */
export interface CryptoIconRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Symbol name, e.g. "Bitcoin". See CryptoIcon.d.ts for the full list. */
  symbol: string;
  /** Rendered size in px. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const CryptoIconRound: React.FC<CryptoIconRoundProps>;
export default CryptoIconRound;
