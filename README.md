# Cashew Server

Cashew Server is an online application that provides backend services for the Cashew project. It is built using Node.js and Express, and it connects to a MongoDB database.

## Live Application

You can access the live application [here](https://cashew-server-qxocr.ondigitalocean.app/).

## Repository

The source code for this project is available on GitHub: [Cashew Server](https://github.com/msherazy/cashew-server.git)

## Features

- RESTful API for managing resources
- MongoDB integration
- Error handling middleware
- Environment-based configuration

## Technologies Used

- Node.js
- Express
- MongoDB
- Yarn
- npm

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- MongoDB instance

### Installation

1. Clone the repository:
	  ```bash
		git clone https://github.com/msherazy/cashew-server.git
		cd cashew-server

2. Install dependencies:
	  ```bash
		yarn install

3. Create a `.env` file in the root directory and add the following environment variables:
	  ```dotenv
		PORT=
		DB_URI=
		DB_NAME=
		ALLOWED_ORIGINS=
		UPLOAD_PATH=
		NODE_ENV=

### Running the Application

To start the server, run:
```bash
yarn start
   ```

## API Endpoints

### Authentication

- `GET /auth/` - Fetch user information
- `POST /auth/register` - Register a new user with front and back image uploads

## Project Structure

```sh
.
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── config
│   │   ├── env.js
│   │   └── index.js
│   ├── controllers
│   │   ├── auth.js
│   │   ├── error.js
│   │   └── index.js
│   ├── database
│   │   └── index.js
│   ├── errors
│   │   ├── index.js
│   │   └── validation.js
│   ├── middlewares
│   │   ├── cors.js
│   │   ├── index.js
│   │   ├── upload.js
│   │   └── validate.js
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   ├── routes
│   │   ├── auth.js
│   │   └── index.js
│   ├── server.js
│   ├── services
│   │   ├── auth.js
│   │   ├── index.js
│   │   └── user.js
│   ├── utils
│   │   ├── delete-file.js
│   │   ├── index.js
│   │   └── response.js
│   └── validation-schemas
│       ├── auth.js
│       └── index.js
├── uploads
│   ├── 784-2023-0000000-0-back-01JR0JYZWCDQC4B8815AYMC1J7.jpg
│   └── 784-2023-0000000-0-front-01JR0JYZWCDQC4B8815AYMC1J7.jpg
└── yarn.lock

`