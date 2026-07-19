# Crypto Portfolio Tracker Backlog

## Holdings data

- [ ] Define a holding data model with asset symbol, quantity, cost basis, and purchase date.
- [ ] Create a form for adding, editing, and removing holdings.
- [ ] Validate required fields and prevent negative quantities or prices.
- [ ] Save holdings locally before adding account-based storage.

## Total value

- [ ] Retrieve or provide the current price for each tracked asset.
- [ ] Calculate each holding’s current value from its quantity and price.
- [ ] Sum holding values to display the total portfolio value.
- [ ] Show when prices were last updated and handle unavailable price data.

## Largest holding

- [ ] Compare current holding values to identify the largest holding.
- [ ] Display the asset name, symbol, value, and share of the portfolio.
- [ ] Handle an empty portfolio without errors.
- [ ] Define how ties between equally valued holdings are displayed.

## Allocation percentage

- [ ] Calculate each holding’s percentage of the total portfolio value.
- [ ] Display allocation percentages in the holdings list.
- [ ] Add an allocation chart after the calculations are verified.
- [ ] Ensure percentages handle zero-value portfolios safely.
