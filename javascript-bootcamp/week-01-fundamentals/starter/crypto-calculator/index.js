function calculatePortfolioValue(amount, price) {
  return amount * price;
}

function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

const portfolios = [
  { symbol: "BTC", amount: 0.25, price: 60000 },
  { symbol: "ETH", amount: 2, price: 3500 },
  { symbol: "SOL", amount: 10, price: 150 },
];

console.assert(calculatePortfolioValue(0.25, 60000) === 15000, "BTC value should be 15000");
console.assert(formatCurrency(15000) === "$15,000.00", "Currency should be formatted in USD");

for (const { symbol, amount, price } of portfolios) {
  const value = calculatePortfolioValue(amount, price);
  console.log(`${symbol} portfolio value: ${formatCurrency(value)}`);
}
