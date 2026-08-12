// Select inputs
const initialInvestmentInput = document.getElementById('initial-investment');
const buyPriceInput = document.getElementById('buy-price');
const futurePriceInput = document.getElementById('future-price');
const yearsHeldInput = document.getElementById('years-held');

// Select result elements
const resultsSection = document.getElementById('results');
const stretchResultsSection = document.getElementById('stretch-results');
const coinsPurchasedEl = document.getElementById('coins-purchased');
const futureValueEl = document.getElementById('future-value');
const profitLossEl = document.getElementById('profit-loss');
const roiEl = document.getElementById('roi');
const annualizedReturnEl = document.getElementById('annualized-return');
const breakEvenPriceEl = document.getElementById('break-even-price');
const errorMessage = document.getElementById('error-message');

// Calculate button
const calculateButton = document.getElementById('calculate-button');

const presets = {
  btc: {
    initialInvestment: 1000,
    buyPrice: 42000,
    futurePrice: 60000,
    yearsHeld: 2,
  },
  eth: {
    initialInvestment: 1000,
    buyPrice: 1800,
    futurePrice: 3200,
    yearsHeld: 1.5,
  },
};

function getCoinsPurchased(initialInvestment, buyPrice) {
  return initialInvestment / buyPrice;
}

function getFutureValue(coinsPurchased, futurePrice) {
  return coinsPurchased * futurePrice;
}

function getProfitLoss(futureValue, initialInvestment) {
  return futureValue - initialInvestment;
}

function getRoi(profitLoss, initialInvestment) {
  return (profitLoss / initialInvestment) * 100;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function formatPercent(value) {
  return `${value.toFixed(2)}%`;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = !message;
  resultsSection.hidden = true;
}

function renderResults({
  coinsPurchased,
  futureValue,
  profitLoss,
  roi,
  breakEvenPrice,
  annualizedReturn,
}) {
  coinsPurchasedEl.textContent = coinsPurchased.toFixed(8);
  futureValueEl.textContent = formatCurrency(futureValue);
  profitLossEl.textContent = formatCurrency(profitLoss);
  profitLossEl.className = profitLoss >= 0 ? 'positive' : 'negative';
  roiEl.textContent = formatPercent(roi);
  roiEl.className = roi >= 0 ? 'positive' : 'negative';
  breakEvenPriceEl.textContent = formatCurrency(breakEvenPrice);

  if (annualizedReturn === null) {
    annualizedReturnEl.textContent = 'Enter years held to calculate';
  } else {
    annualizedReturnEl.textContent = formatPercent(annualizedReturn);
  }

  stretchResultsSection.hidden = false;
  resultsSection.hidden = false;
}

function handleCalculate() {
  const initialInvestment = Number(initialInvestmentInput.value);
  const buyPrice = Number(buyPriceInput.value);
  const futurePrice = Number(futurePriceInput.value);
  const yearsHeld = yearsHeldInput.value ? Number(yearsHeldInput.value) : null;

  if (
    [initialInvestment, buyPrice, futurePrice].some(
      (value) => Number.isNaN(value) || value <= 0,
    )
  ) {
    showError('Initial investment and both asset prices must be greater than zero.');
    return;
  }

  if (yearsHeld !== null && (Number.isNaN(yearsHeld) || yearsHeld <= 0)) {
    showError('Years held must be greater than zero when provided.');
    return;
  }

  showError('');

  const coinsPurchased = getCoinsPurchased(initialInvestment, buyPrice);
  const futureValue = getFutureValue(coinsPurchased, futurePrice);
  const profitLoss = getProfitLoss(futureValue, initialInvestment);
  const roi = getRoi(profitLoss, initialInvestment);
  const annualizedReturn =
    yearsHeld && yearsHeld > 0 ? roi / yearsHeld : null;

  renderResults({
    coinsPurchased,
    futureValue,
    profitLoss,
    roi,
    breakEvenPrice: buyPrice,
    annualizedReturn,
  });
}

function applyPreset(presetKey) {
  const preset = presets[presetKey];
  initialInvestmentInput.value = preset.initialInvestment;
  buyPriceInput.value = preset.buyPrice;
  futurePriceInput.value = preset.futurePrice;
  yearsHeldInput.value = preset.yearsHeld;
}

calculateButton.addEventListener('click', handleCalculate);

document.getElementById('investment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  handleCalculate();
});

document.querySelectorAll('[data-preset]').forEach((button) => {
  button.addEventListener('click', () => {
    applyPreset(button.dataset.preset);
  });
});
