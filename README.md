# node-mongodb
A Node.js + MongoDB back-end project showcasing a structured MVC architecture with controllers, models, views and RESTful routes. Made for my final project on a mini node.js course I did with Simplilearn. This repository provides a backend application implemented in Node.js, connected to MongoDB, using a clear folder structure (controllers, models, views) to separate concerns and support maintainability and scalability. It is ideal for demonstration, learning, or as a scaffold for your own full-stack project.

## Table of Contents
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Built With
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) (or similar – replace if you use another)
- [MongoDB](https://www.mongodb.com/)
- Mongoose (or native MongoDB driver) for modelling data
- MVC folder structure: **models/**, **views/**, **controllers/**
- ES6+ JavaScript syntax

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn
- A running MongoDB instance (local or cloud)

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/AlistairDriscoll/node-mongodb.git
    ```

2. Navigate into the project directory
    ```bash
    cd node-mongodb
    ```

3. Install dependencies
    ```
    npm install
    ```

### Configuration

This project does not currently use environment variables.
The MongoDB connection is configured directly in the code.

### Running the Application

To start the server:
```bash
node index.js
```

## Project Structure
```bash
node-mongodb/
├── controllers/       # Request handlers / business logic
├── models/            # MongoDB schemas / data models
├── views/             # (If applicable) view templates or front‐end pages
├── index.js           # Entry point of the app
├── package.json       # Project metadata & dependencies
└── .gitignore         # Files/folders excluded from Git
```

This layout helps keep routes/controllers/models separated and easier to manage as the project grows.


## Usage

Use any API-client (Postman / Insomnia) or front-end to send requests to defined routes.

Example endpoint: GET /api/items (adjust according to your routes)

Create, Read, Update, Delete operations via HTTP verbs (POST, GET, PUT, DELETE).

Ensure your MongoDB instance is active and connected before sending requests.


## Future Improvements

Add authentication/authorization (JWT, OAuth)

Input validation & sanitisation

Detailed error handling middleware
