const {
  describeInvestor,
  calculateTotalContributions,
  investmentRiskLabel,
} = require('./exercises');
const { calculateFutureValue, createYearlySnapshots } = require('./calculator');

const investor = {
  name: 'Avery',
  initialInvestment: 1_000,
  monthlyContribution: 150,
  annualReturnRate: 0.07,
  years: 5,
};

console.log('--- Week 1 Investment Calculator ---');
console.log(describeInvestor(investor.name, investor.years));

const totalContributions = calculateTotalContributions(
  investor.initialInvestment,
  investor.monthlyContribution,
  investor.years,
);

const futureValue = calculateFutureValue(
  investor.initialInvestment,
  investor.monthlyContribution,
  investor.annualReturnRate,
  investor.years,
);

console.log(`Total contributed: $${totalContributions.toFixed(2)}`);
console.log(`Projected value: $${futureValue.toFixed(2)}`);
console.log(`Risk label: ${investmentRiskLabel(investor.annualReturnRate)}`);

console.log('\nYearly snapshots:');
for (const snapshot of createYearlySnapshots(investor)) {
  console.log(`Year ${snapshot.year}: $${snapshot.value.toFixed(2)}`);
}
