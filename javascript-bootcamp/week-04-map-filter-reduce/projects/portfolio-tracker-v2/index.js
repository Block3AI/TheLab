const {
  filterAssetsByMinValue,
  formatReport,
} = require('./portfolio-utils');

const assets = [
  { symbol: 'BTC', amount: 0.5, price: 60000 },
  { symbol: 'ETH', amount: 4, price: 3200 },
  { symbol: 'SOL', amount: 25, price: 145 },
  { symbol: 'DOGE', amount: 1000, price: 0.12 },
];

console.log('--- Portfolio Tracker v2 ---');
console.log(formatReport(assets));

const valuableAssets = filterAssetsByMinValue(assets, 1000);
console.log('\nAssets worth at least $1,000:');
console.log(formatReport(valuableAssets));
