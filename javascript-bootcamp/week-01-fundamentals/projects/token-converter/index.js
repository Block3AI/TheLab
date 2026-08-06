const BTC_PRICE_USD = 62000;
const ETH_PRICE_USD = 2500;
const SOL_PRICE_USD = 80;

function convertToUsd(amount, price) {
  if (amount === undefined || amount === null || amount === '' || price === undefined || price === null || price === '') {
    return 'Conversion unavailable: enter both an amount and a price.';
  }

  if (!Number.isFinite(amount) || !Number.isFinite(price)) {
    return 'Conversion unavailable: amount and price must be valid numbers.';
  }

  return amount * price;
}

const conversions = [
  { symbol: 'BTC', amount: 1, price: BTC_PRICE_USD },
  { symbol: 'ETH', amount: 5, price: ETH_PRICE_USD },
  { symbol: 'SOL', amount: 20, price: SOL_PRICE_USD },
];

console.assert(
  convertToUsd('', BTC_PRICE_USD) === 'Conversion unavailable: enter both an amount and a price.',
  'Missing values should return a helpful message.',
);

for (const { symbol, amount, price } of conversions) {
  const usdValue = convertToUsd(amount, price);

  if (typeof usdValue === 'string') {
    console.log(`${symbol}: ${usdValue}`);
  } else {
    const formattedValue = usdValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    console.log(`${amount} ${symbol} at $${price.toLocaleString()} each = $${formattedValue}`);
  }
}
