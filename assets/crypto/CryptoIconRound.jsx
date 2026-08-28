import CryptoIcon from './CryptoIcon.jsx';

/* Figma: Crypto Icons Round - Cryptocurrencies (44 variants).
   A fixed-shape wrapper over CryptoIcon so each Figma family has its own named component. */

export function CryptoIconRound(props) {
  return <CryptoIcon {...props} shape="round" />;
}
export default CryptoIconRound;
