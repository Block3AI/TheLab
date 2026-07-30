let btcAmount = 0.25;
let btcPrice = 60000;

function printPortfolioValue(amount, price) {
  const portfolioValue = amount * price;
  console.log(`Portfolio value: $${portfolioValue.toLocaleString()}`);
}

// Test case 1
printPortfolioValue(btcAmount, btcPrice);

// Test case 2: change the amount and price.
btcAmount = 0.5;
btcPrice = 65000;
printPortfolioValue(btcAmount, btcPrice);

// Test case 3: change the amount and price again.
btcAmount = 1.2;
btcPrice = 67500;
printPortfolioValue(btcAmount, btcPrice);
