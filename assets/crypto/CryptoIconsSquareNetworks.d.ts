import * as React from 'react';
import type { CryptoSymbol } from './CryptoIcon';

/** 47 network marks. Figma: "Crypto Icons Square - Networks". */
export interface CryptoIconsSquareNetworksProps extends Omit<React.SVGProps<SVGSVGElement>, 'style'> {
  /** Symbol name, e.g. "Bitcoin". See CryptoIcon.d.ts for the full list. */
  symbol: CryptoSymbol;
  /** Rendered size in px. Product surfaces use 20, 24 or 28. */
  size?: number;
  style?: React.CSSProperties;
}
export declare const CryptoIconsSquareNetworks: React.FC<CryptoIconsSquareNetworksProps>;
export default CryptoIconsSquareNetworks;
