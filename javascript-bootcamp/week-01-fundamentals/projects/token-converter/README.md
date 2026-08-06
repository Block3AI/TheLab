# Token Converter

This Node.js project converts a token amount into its USD value.

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

## Run it

From this folder, run:

```bash
node index.js
```
