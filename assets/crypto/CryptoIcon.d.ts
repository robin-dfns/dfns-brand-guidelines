import * as React from 'react';
export type CryptoSymbol = "Aave" | "Algorand" | "Avalanche" | "BNB" | "Bitcoin" | "Cardano" | "Chainlink" | "Cosmos" | "Cronos" | "Dai" | "Dash" | "Dogecoin" | "ECash" | "Elrond" | "Eos" | "Ethereum" | "FTXToken" | "Flow" | "Graph" | "Hedera" | "Kava" | "Litecoin" | "Maker" | "Monero" | "NearProtocol" | "Neo" | "Nexo" | "PancakeSwap" | "Polkadot" | "Polygon" | "Quant" | "ShibaInu" | "Solana" | "Stellar" | "Tether" | "Tezos" | "ThetaNetwork" | "Tron" | "TrueUSD" | "USDCoin" | "Uniswap" | "Vechain" | "XRP" | "Zcash" | "AxieInfinity" | "Binance" | "Decentraland";
export interface CryptoIconProps extends React.SVGProps<SVGSVGElement> {
  /** Asset or network symbol name, e.g. "Bitcoin", "USDCoin", "Polygon". */
  symbol: CryptoSymbol;
  /** "round" = cryptocurrency mark (44 available); "square" = network mark (47 available). */
  shape?: 'round' | 'square';
  /** Rendered size in px. Product surfaces use 20, 24 or 28. */
  size?: number;
}
export declare const CryptoIcon: React.FC<CryptoIconProps>;
export default CryptoIcon;
