import * as React from 'react';
/**
 * "Crypto Icons Round" Figma family (44 variants) — circular chain/token marks.
 * The variant axis is the `name` prop: pass the coin name ("Bitcoin", "Ethereum", …).
 */
export interface CryptoIconsRoundProps extends React.SVGProps<SVGSVGElement> {
  /** Coin name, e.g. "Bitcoin", or a full icon-data key. */
  name: string;
  size?: number | string;
}
export declare function CryptoIconsRound(props: CryptoIconsRoundProps): JSX.Element;
