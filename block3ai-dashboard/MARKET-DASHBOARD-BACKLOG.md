# Market Dashboard Backlog

## CoinGecko data

- [ ] Select the CoinGecko endpoint and required fields for the initial market view.
- [ ] Create a market-data service that requests and validates CoinGecko responses.
- [ ] Keep any API key in environment variables and out of source control.
- [ ] Record the data refresh time and respect API rate limits.

## Prices

- [ ] Display the current price for each selected cryptocurrency.
- [ ] Format prices using the selected fiat currency and appropriate decimal precision.
- [ ] Support a starter list of major assets with room to add more.
- [ ] Show the currency and price-update timestamp clearly.

## Market cap

- [ ] Display each asset’s market capitalization.
- [ ] Format large values into readable units such as millions and billions.
- [ ] Allow the market table to be sorted by market cap.
- [ ] Handle missing market-cap values without breaking the layout.

## 24-hour change

- [ ] Display 24-hour price change as both a percentage and a visual indicator.
- [ ] Use accessible positive, negative, and neutral styles rather than color alone.
- [ ] Handle unavailable or zero change values safely.
- [ ] Allow sorting by the 24-hour percentage change.

## Loading and error state

- [ ] Show a loading indicator or skeleton while market data is requested.
- [ ] Display a helpful error message when data cannot be loaded.
- [ ] Provide a retry action after a failed request.
- [ ] Preserve the last successful data when a refresh fails, with a clear stale-data label.
