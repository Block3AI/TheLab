function getAssetValue(asset) {
  return asset.amount * asset.price;
}

function mapAssetSummaries(assets) {
  return assets.map((asset) => ({
    symbol: asset.symbol,
    value: getAssetValue(asset),
    label: `${asset.symbol}: ${asset.amount} @ $${asset.price.toFixed(2)}`,
  }));
}

function filterAssetsByMinValue(assets, minValue) {
  return assets.filter((asset) => getAssetValue(asset) >= minValue);
}

function reducePortfolioTotal(assets) {
  return assets.reduce((total, asset) => total + getAssetValue(asset), 0);
}

function reduceAveragePrice(assets) {
  if (assets.length === 0) {
    return 0;
  }

  const totalPrice = assets.reduce((sum, asset) => sum + asset.price, 0);
  return totalPrice / assets.length;
}

function formatReport(assets) {
  const summaries = mapAssetSummaries(assets);
  const lines = summaries.map(
    (item) => `${item.label} = $${item.value.toFixed(2)}`,
  );

  lines.push(`Total value: $${reducePortfolioTotal(assets).toFixed(2)}`);
  lines.push(`Average price: $${reduceAveragePrice(assets).toFixed(2)}`);

  return lines.join('\n');
}

module.exports = {
  mapAssetSummaries,
  filterAssetsByMinValue,
  reducePortfolioTotal,
  reduceAveragePrice,
  formatReport,
};
