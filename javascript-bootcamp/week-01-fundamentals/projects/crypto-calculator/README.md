# Crypto Calculator

This Node.js program calculates cryptocurrency portfolio values and profit or loss from an asset's entry price and current price. It includes BTC, ETH, and SOL examples and formats each result as US currency.

## Functions

- `calculatePortfolioValue(amount, price)` returns the portfolio value.
- `calculateProfitOrLoss(amount, entryPrice, currentPrice)` returns a positive profit or negative loss.
- `formatCurrency(value)` returns a USD-formatted currency string.

The program uses `console.assert` to verify the expected return values for both functions before printing the examples.

## Manual test cases

| Case | Input | Expected result |
| --- | --- | --- |
| Profit | `amount: 0.25`, `entryPrice: 55000`, `currentPrice: 60000` | Profit of `$1,250.00` |
| Zero amount | `amount: 0`, `entryPrice: 55000`, `currentPrice: 60000` | Profit or loss of `$0.00` |

## Run it

From this folder, run:

```bash
node index.js
```
