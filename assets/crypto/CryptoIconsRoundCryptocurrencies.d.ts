import * as React from 'react';
import type { CryptoSymbol } from './CryptoIcon';

/** 44 cryptocurrency marks. Figma: "Crypto Icons Round - Cryptocurrencies". */
export interface CryptoIconsRoundCryptocurrenciesProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Symbol name, e.g. "Bitcoin". See CryptoIcon.d.ts for the full list. */
  symbol: CryptoSymbol;
  /** Rendered size in px. Product surfaces use 20, 24 or 28. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const CryptoIconsRoundCryptocurrencies: React.FC<CryptoIconsRoundCryptocurrenciesProps>;
export default CryptoIconsRoundCryptocurrencies;
