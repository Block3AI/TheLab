const {
  createPortfolio,
  addAsset,
  removeAsset,
  formatPortfolioSummary,
} = require('./portfolio');

const portfolio = createPortfolio();

addAsset(portfolio, { symbol: 'BTC', amount: 0.5, price: 60000 });
addAsset(portfolio, { symbol: 'ETH', amount: 4, price: 3200 });
addAsset(portfolio, { symbol: 'SOL', amount: 25, price: 145 });

console.log('--- Block3AI Portfolio Tracker ---');
console.log(formatPortfolioSummary(portfolio));

removeAsset(portfolio, 'SOL');
console.log('\nAfter removing SOL:');
console.log(formatPortfolioSummary(portfolio));
