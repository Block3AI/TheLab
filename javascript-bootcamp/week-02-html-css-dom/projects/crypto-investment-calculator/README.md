# Block3AI Crypto Investment Calculator

This browser project combines Week 2 skills: HTML structure, CSS styling, DOM manipulation, and form validation.

## Files

- `index.html` defines the calculator form and results area.
- `styles.css` styles the layout and form controls.
- `app.js` reads form input, validates it, and updates the DOM with investment results.

## Core inputs (MVP)

- Initial investment ($)
- Asset price at buy ($)
- Asset price now or future price ($)

## Core outputs (MVP)

- Coins purchased
- Current/future value ($)
- Profit/Loss ($)
- ROI (%)

## Stretch outputs

- Annualized return (simple)
- Scenario presets (BTC / ETH)
- Break-even price

## Run it

Open `index.html` in your browser, or use a local server:

```bash
npx serve .
```

## Tasks

1. Style the form so it is readable on mobile and desktop.
2. Validate that all MVP inputs are positive numbers.
3. Display all core outputs when the form is submitted.
4. Try the BTC and ETH scenario presets and confirm the form fills correctly.
5. Add years held to calculate simple annualized return and review break-even price.
