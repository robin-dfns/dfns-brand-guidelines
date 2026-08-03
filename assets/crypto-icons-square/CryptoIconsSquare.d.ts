import * as React from 'react';
/**
 * "Crypto Icons Square" Figma family (47 variants) — 12px-radius chain/token tiles.
 * The variant axis is the `name` prop: pass the coin name ("Bitcoin", "Ethereum", …).
 */
export interface CryptoIconsSquareProps extends React.SVGProps<SVGSVGElement> {
  /** Coin name, e.g. "Bitcoin", or a full icon-data key. */
  name: string;
  size?: number | string;
}
export declare function CryptoIconsSquare(props: CryptoIconsSquareProps): JSX.Element;
