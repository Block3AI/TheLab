function calculateFutureValue(initialInvestment, monthlyContribution, annualReturnRate, years) {
  let value = initialInvestment;

  for (let year = 0; year < years; year += 1) {
    value = value * (1 + annualReturnRate) + monthlyContribution * 12;
  }

  return value;
}

function createYearlySnapshots(investor) {
  const { initialInvestment, monthlyContribution, annualReturnRate, years } = investor;
  const snapshots = [];
  let value = initialInvestment;

  for (let year = 1; year <= years; year += 1) {
    value = value * (1 + annualReturnRate) + monthlyContribution * 12;
    snapshots.push({ year, value });
  }

  return snapshots;
}

module.exports = {
  calculateFutureValue,
  createYearlySnapshots,
};
