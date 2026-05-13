# StockMarket — AI-Powered Stock Market Intelligence Platform

StockMarket is a modern AI-powered fintech platform that helps users track live markets, analyze stocks, receive intelligent insights, manage watchlists, and stay updated with personalized financial news summaries.

Built using Next.js, Better Auth, Inngest workflows, MongoDB, and Gemini AI.

---

# Features

## AI-Powered Insights
- AI-generated market analysis
- Smart stock summaries
- Personalized investing intelligence
- Daily financial news summaries

## Real-Time Market Data
- Live stock search
- Trending stocks
- Market movers
- Sector performance tracking

## Watchlists & Alerts
- Personalized stock watchlists
- Real-time monitoring
- Intelligent market tracking

## Modern Fintech Experience
- Responsive premium UI
- Dark fintech dashboard design
- Interactive layouts
- Glassmorphism components

## Authentication & Automation
- Secure authentication using Better Auth
- Automated workflows with Inngest
- Welcome emails
- Scheduled AI news summaries

---

# Tech Stack

## Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend
- Next.js Server Actions
- Better Auth
- MongoDB + Mongoose
- Inngest
- Nodemailer

## APIs & AI
- Finnhub API
- Google Gemini AI

---

# Project Structure

```bash
src/
├── app/
│   ├── (public)/
│   ├── (protected)/
│   ├── api/
│   └── globals.css
│
├── components/
│   ├── forms/
│   ├── ai-insights/
│   ├── market-overview/
│   ├── learning/
│   ├── shared/
│   └── ui/
│
├── lib/
│   ├── actions/
│   ├── better-auth/
│   ├── inngest/
│   ├── nodemailer/
│   ├── utils/
│   └── constants/
│
├── database/
│
└── hooks/
```

---

# Getting Started

## Clone Repository

```bash
git clone <your-repository-url>
cd stockmarket
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

FINNHUB_API_KEY=

GEMINI_API_KEY=

NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

---

# Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Run Inngest Dev Server

```bash
npx inngest-cli@latest dev
```

Open:

```bash
http://localhost:8288
```

---

# Core Features Breakdown

## Authentication
Handled using Better Auth with email/password login.

## AI Workflows
Powered by Inngest + Gemini AI:
- Welcome emails
- AI-generated insights
- Daily market summaries

## Market Data
Fetched using Finnhub API:
- Stock search
- Market news
- Company data
- Sector insights

---

# Pages

## Public Pages

```bash
/
```

```bash
/market-overview
```

```bash
/ai-insights
```

```bash
/learn
```

```bash
/sign-in
```

```bash
/sign-up
```

---

# Protected Pages

```bash
/dashboard
```

```bash
/watchlist
```

```bash
/profile
```

---

# Future Improvements

- Real-time websocket stock updates
- AI portfolio assistant
- Advanced charting
- Portfolio tracking
- TradingView integrations
- Push notifications
- Mobile application

---

# Deployment

Recommended platforms:

- Vercel
- MongoDB Atlas

---

# License

MIT License

---

# Author

Mahnoor Fatima

---

# AI-Powered Web Applications