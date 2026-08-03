import React from 'react';
import CryptoIconRound from './CryptoIconRound.jsx';

/* "Crypto Icons Round" family — alias of CryptoIconRound; accepts the plain coin name too. */
export function CryptoIconsRound({ name, size = 48, ...rest }) {
  const full = name && name.startsWith('CryptoIconsRound') ? name : 'CryptoIconsRoundProperty1' + name;
  return <CryptoIconRound name={full} size={size} {...rest} />;
}
