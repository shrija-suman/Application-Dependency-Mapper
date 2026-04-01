# Application Dependency Mapper

A web application to visualize and manage application dependencies.

## Features

- Backend API built with Node.js and Express
- Frontend interface to display dependencies
- RESTful endpoints for dependency data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```
   cd src/main/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open the frontend in a browser:
   - Navigate to `src/main/frontend/index.html`
   - Or serve it via a web server

### API Endpoints

- `GET /dependencies` - Retrieve dependency data
- `GET /health` - Health check

## Project Structure

- `src/main/backend/` - Node.js backend application
- `src/main/frontend/` - HTML frontend
- `tests/` - Test suites
- `infrastructure/` - Deployment configurations
- `monitoring/` - Monitoring and alerting setup

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.