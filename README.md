# Moda5ar – Invest in Real Estate, One Share at a Time

Moda5ar is a smart real estate investment platform that makes property ownership accessible to everyone through partial ownership. Instead of purchasing an entire property, you can buy shares in carefully selected, income-generating real estate and start building your investment portfolio with a budget that suits you.

## Key Features

- 🏢 **Fractional Ownership**: Invest in premium properties through partial ownership
- 🔍 **Property Browsing**: Explore apartments, offices, clinics, retail shops, land, factories, farms, warehouses, and more
- 📊 **Transparent Data**: View detailed information, photos, Google Maps location, and financial metrics
- 💰 **Smart Recommendations**: AI-powered property suggestions based on your budget
- 🤖 **AI Assistant**: Explain investment processes and provide real-time support
- 📈 **Portfolio Tracking**: Monitor investments and rental income
- 🔐 **Secure Transactions**: Safe share purchasing and ownership management
- ⏱️ **Real-time Updates**: Track available shares for each property

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ with React
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: Shadcn/ui
- **Maps**: Google Maps API
- **Charts**: Recharts

### Backend
- **Framework**: Node.js with Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Real-time**: Socket.io
- **AI**: OpenAI API

## Project Structure

```
moda5ar/
├── frontend/          # Next.js frontend application
├── backend/           # Node.js/Express API server
├── docker-compose.yml # Docker configuration
├── .env.example       # Environment variables template
└── README.md          # This file
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/galal119/moda5ar.git
cd moda5ar
```

2. Install dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Start development servers
```bash
# Frontend (in frontend directory)
npm run dev

# Backend (in backend directory)
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:3001

## Docker Setup

```bash
docker-compose up -d
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details
