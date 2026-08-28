import marks from './crypto-icon-data.js';

/** Crypto asset / network mark. shape="round" for cryptocurrencies, "square" for networks. */
export function CryptoIcon({ symbol, shape = 'round', size = 24, ...rest }) {
  const key = (shape === 'square' ? 'Square' : 'Round') + symbol;
  const d = marks[key] || marks['Round' + symbol] || marks['Square' + symbol];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox={d.viewBox} fill="none" dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
  );
}
export default CryptoIcon;
