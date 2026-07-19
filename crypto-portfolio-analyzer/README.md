# Crypto Portfolio Analyzer

The future Crypto Portfolio Analyzer will help users understand their cryptocurrency holdings, performance, allocation, and risk through a clear portfolio-tracking experience.

## Vision

The application will turn wallet and manually entered holdings into useful portfolio insights. It is intended as an educational analytics tool for exploring crypto data—not financial advice or a trading platform.

## Planned capabilities

- Add and manage holdings manually, with optional wallet-import support later
- Track asset quantities, cost basis, current value, and unrealized gain or loss
- View total portfolio value and allocation by asset
- Compare performance across selected time periods
- Display market-price data with timestamps and clear loading or error states
- Surface concentration and diversification indicators
- Generate AI-assisted plain-language summaries of portfolio changes and trends
- Export portfolio data for personal record keeping

## Planned user flow

```text
Add holdings or connect a wallet
            ↓
Fetch current market prices
            ↓
Calculate portfolio value and performance
            ↓
Explore allocation, history, and insights
```

## Planned technology

| Area | Technology |
| --- | --- |
| Front end | React, Next.js, and TypeScript |
| Styling | Tailwind CSS and accessible reusable components |
| Market data | A vetted cryptocurrency market-data API |
| Wallet data | Read-only wallet-provider or blockchain-indexing API |
| Storage | Secure database or local-first storage, based on the feature scope |
| Testing | Unit tests for calculations and integration tests for key flows |

## Core calculation concepts

- **Current value:** asset quantity × current market price
- **Cost basis:** amount originally paid for a holding
- **Unrealized gain/loss:** current value − cost basis
- **Allocation:** an asset’s value as a percentage of the total portfolio value

All calculations will make their assumptions visible, include timestamps for price data, and handle missing data safely.

## Development plan

1. Define the holding data model and calculation utilities.
2. Build a static portfolio form and summary using mock data.
3. Add current-price retrieval, loading states, and error handling.
4. Add allocation charts and historical performance views.
5. Explore read-only wallet imports and AI-generated summaries.
6. Add authentication, data persistence, tests, and deployment.

## Current status

This directory currently contains planning documentation. Implementation will begin with a small manual-holdings tracker and expand in incremental, testable steps.
