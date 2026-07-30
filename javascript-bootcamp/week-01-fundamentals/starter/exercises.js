function describeInvestor(name, years) {
  return `${name} is investing for ${years} years.`;
}

function calculateTotalContributions(initialInvestment, monthlyContribution, years) {
  return initialInvestment + monthlyContribution * 12 * years;
}

function investmentRiskLabel(annualReturnRate) {
  if (annualReturnRate < 0.04) return 'Conservative';
  if (annualReturnRate < 0.08) return 'Balanced';
  return 'Growth';
}

module.exports = {
  describeInvestor,
  calculateTotalContributions,
  investmentRiskLabel,
};
