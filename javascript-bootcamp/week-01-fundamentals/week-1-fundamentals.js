const cryptoSymbol = 'BTC';
const walletLabel = 'Long-Term Savings';
const btcAmount = 0.3;
const btcPrice = 118000;
const isActive = true;

console.log(
  `${walletLabel} wallet: ${btcAmount} ${cryptoSymbol} at $${btcPrice.toLocaleString()} each. Active: ${isActive}.`
);
