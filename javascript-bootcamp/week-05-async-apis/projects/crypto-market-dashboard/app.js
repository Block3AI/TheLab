const refreshButton = document.getElementById('refresh-button');
const statusMessage = document.getElementById('status-message');
const marketList = document.getElementById('market-list');

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle('error', isError);
}

function renderMarketData(coins) {
  marketList.innerHTML = coins
    .map(
      (coin) => `
        <li>
          <span>${coin.name} (${coin.symbol})</span>
          <strong>${formatPrice(coin.price)}</strong>
        </li>
      `,
    )
    .join('');
}

async function fetchMarketData() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return [
    { name: 'Bitcoin', symbol: 'BTC', price: 60250.45 },
    { name: 'Ethereum', symbol: 'ETH', price: 3188.12 },
    { name: 'Solana', symbol: 'SOL', price: 146.88 },
  ];
}

async function loadDashboard() {
  setStatus('Loading market data...');
  marketList.innerHTML = '';

  try {
    const coins = await fetchMarketData();
    renderMarketData(coins);
    setStatus(`Showing ${coins.length} assets.`);
  } catch (error) {
    setStatus('Could not load market data. Try again.', true);
  }
}

refreshButton.addEventListener('click', loadDashboard);
loadDashboard();
