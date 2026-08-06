# Token Converter

This Node.js project converts a token amount into its USD value and prints the token symbol, amount, price, and USD total in a compact console table.

## Input shape

Each conversion uses an object with a `symbol`, `amount`, and `price`:

```js
{ symbol: 'BTC', amount: 0.1, price: 65000 }
```

`convertToUsd(amount, price)` returns the USD value. If either value is missing or invalid, it returns a helpful message instead of calculating.

## Example conversions

| Token | Amount | Price | USD value |
| --- | ---: | ---: | ---: |
| BTC | 0.1 | $65,000 | $6,500.00 |
| ETH | 2 | $3,500 | $7,000.00 |
| SOL | 10 | $150 | $1,500.00 |

## Manual test cases

| Case | Input | Expected result |
| --- | --- | --- |
| Standard conversion | `symbol: 'ETH'`, `amount: 2`, `price: 2500` | USD total of `$5,000.00` |
| Zero amount | `symbol: 'SOL'`, `amount: 0`, `price: 80` | USD total of `$0.00` |
| Missing amount | `symbol: 'BTC'`, `amount: ''`, `price: 62000` | `Conversion unavailable: enter both an amount and a price.` |

## Run it

From this folder, run:

```bash
node index.js
```
