# LuxeShare - P2P Luxury Property Rental Platform

A decentralized marketplace connecting property owners with event hosts for luxury property rentals.

## Features

- User Authentication & Verification
- Property Management System
- Secure Booking System
- Trust & Safety Features
- Advanced Search & Discovery
- Smart Contract Integration for Property Verification

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT
- Smart Contracts: Solidity
- Payment Integration: Stripe
- Cloud Storage: AWS S3 (for property images)

## Project Structure

```
luxeshare/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js application
├── contracts/             # Smart contracts for property verification
└── docs/                  # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- MetaMask (for Web3 integration)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/luxeshare.git
cd luxeshare
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In server directory
cp .env.example .env
# Edit .env with your configuration

# In client directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd client
npm start
```

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details. 