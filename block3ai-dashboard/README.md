# Block3AI Developer Dashboard

The future Block3AI Developer Dashboard will be a React and Next.js workspace for monitoring, building, and experimenting with AI, blockchain, and automation tools in one place.

## Vision

The dashboard will give developers a practical command center for Block3AI projects. It will bring together project activity, AI-agent runs, blockchain data, portfolio analytics, and development resources without requiring users to switch between separate tools.

## Planned capabilities

- Project overview with recent activity, milestones, and links to active experiments
- AI-agent workspace for starting, monitoring, and reviewing agent runs
- Blockchain and Web3 data views for wallet activity, token balances, and network information
- Analytics panels for portfolio and market insights
- Automation history with run status, logs, and error details
- Developer settings for API keys, environment configuration, and integrations

## Planned technology

| Area | Technology |
| --- | --- |
| Framework | Next.js with React and TypeScript |
| Styling | Tailwind CSS and reusable UI components |
| Data fetching | Server Components, Route Handlers, and client-side queries where needed |
| Authentication | A secure provider selected during implementation |
| Database | A hosted database selected based on product requirements |
| Deployment | Vercel or an equivalent Next.js-friendly platform |

## Initial dashboard areas

```text
Dashboard
├── Overview
├── Projects
├── AI Agents
├── Blockchain Tools
├── Analytics
├── Automations
└── Settings
```

## Development plan

1. Scaffold a Next.js and TypeScript application.
2. Build the shared layout, navigation, and responsive design system.
3. Create the overview page using realistic mock data.
4. Add project and experiment tracking.
5. Integrate AI-agent, blockchain, and analytics data incrementally.
6. Add authentication, configuration management, testing, and deployment.

## Current status

This directory is currently a planning space. The application code will be added once the dashboard scope, data sources, and authentication approach are defined.
