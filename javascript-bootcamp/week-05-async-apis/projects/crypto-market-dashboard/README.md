# Crypto Market Dashboard

This browser project combines Week 5 skills: async JavaScript, `fetch`, and loading or error states.

## Files

- `index.html` defines the dashboard layout.
- `styles.css` styles loading, error, and success states.
- `app.js` fetches market data and renders prices.

## Run it

Open `index.html` in your browser, or use a local server:

```bash
npx serve .
```

By default, the dashboard uses mock data so it runs without an API key. Replace `fetchMarketData` with a real API call when you are ready.

## Tasks

1. Show a loading state while data is being fetched.
2. Display coin name, symbol, and current price.
3. Handle fetch failures with a helpful error message.
4. Swap mock data for a public crypto API and keep secrets out of Git.
