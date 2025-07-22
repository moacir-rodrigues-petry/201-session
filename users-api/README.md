# Users API

A RESTful API built with Express.js and TypeScript that generates fake user data using the Faker.js library.

## Project Structure

```
users-api/
├── src/
│ ├── types/ # TypeScript type definitions
│ ├── services/ # Business logic (UserService)
│ ├── controllers/ # Request handlers (UserController)
│ ├── routes/ # Route definitions
│ ├── app.ts # Express app configuration
│ └── index.ts # Application entry point
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Documentation
```

## API Endpoints

- `GET /api/users` - Returns a list of 10 fake users

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Application

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

The API will be available at http://localhost:3000/api/users

### Testing

This project uses Jest and Supertest for testing. The following test scripts are available:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration
```

Test files are organized in the following structure:

- `src/__tests__/unit/` - Unit tests for individual components
- `src/__tests__/integration/` - Integration tests for API endpoints

## Technologies Used

- Express.js - Web framework
- TypeScript - Programming language
- Faker.js - Fake data generation
- ts-node-dev - Development server with hot-reloading
- CORS - Cross-Origin Resource Sharing middleware

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your branch to your fork
5. Create a pull request
