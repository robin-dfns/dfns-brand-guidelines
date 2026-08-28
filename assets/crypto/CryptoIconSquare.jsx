import CryptoIcon from './CryptoIcon.jsx';

/* Figma: Crypto Icons Square - Networks (47 variants).
   A fixed-shape wrapper over CryptoIcon so each Figma family has its own named component. */

export function CryptoIconSquare(props) {
  return <CryptoIcon {...props} shape="square" />;
}
export default CryptoIconSquare;
