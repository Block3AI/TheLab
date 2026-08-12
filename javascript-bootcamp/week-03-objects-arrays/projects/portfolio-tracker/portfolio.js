function createPortfolio() {
  return {
    assets: [],
  };
}

function addAsset(portfolio, asset) {
  const existing = portfolio.assets.find((item) => item.symbol === asset.symbol);

  if (existing) {
    existing.amount += asset.amount;
    existing.price = asset.price;
    return portfolio;
  }

  portfolio.assets.push({ ...asset });
  return portfolio;
}

function removeAsset(portfolio, symbol) {
  portfolio.assets = portfolio.assets.filter((asset) => asset.symbol !== symbol);
  return portfolio;
}

function getAssetValue(asset) {
  return asset.amount * asset.price;
}

function getPortfolioTotal(portfolio) {
  let total = 0;

  for (const asset of portfolio.assets) {
    total += getAssetValue(asset);
  }

  return total;
}

function formatPortfolioSummary(portfolio) {
  if (portfolio.assets.length === 0) {
    return 'Portfolio is empty.';
  }

  const lines = portfolio.assets.map((asset) => {
    const value = getAssetValue(asset);
    return `${asset.symbol}: ${asset.amount} @ $${asset.price.toFixed(2)} = $${value.toFixed(2)}`;
  });

  lines.push(`Total value: $${getPortfolioTotal(portfolio).toFixed(2)}`);
  return lines.join('\n');
}

module.exports = {
  createPortfolio,
  addAsset,
  removeAsset,
  getPortfolioTotal,
  formatPortfolioSummary,
};
