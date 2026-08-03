import React from 'react';
import CryptoIconSquare from './CryptoIconSquare.jsx';

/* "Crypto Icons Square" family — alias of CryptoIconSquare; accepts the plain coin name too. */
export function CryptoIconsSquare({ name, size = 48, ...rest }) {
  const full = name && name.startsWith('CryptoIconsSquare') ? name : 'CryptoIconsSquareProperty1' + name;
  return <CryptoIconSquare name={full} size={size} {...rest} />;
}
