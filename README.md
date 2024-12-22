# React MERN Stack CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express, React, Node.js) stack.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have installed Docker and Docker Compose.
- You have a running instance of MongoDB. You can use Docker to run MongoDB.

## Getting Started

### Backend

1. Navigate to the `api` directory:

   ```sh
   cd api
   ```

2. Create a `.env` file in the directory and add your MongoDB connection string:

   ```env
   DB_URL=mongodb://localhost:27017/your-database-name
   ```

3. Build and run the backend using Docker Compose:

   ```sh
   docker-compose up --build
   ```

4. The backend server will be running on `http://localhost:8080`.

### Frontend

1. Navigate to the directory:

   ```sh
   cd frontend
   ```

2. Build and run the frontend using Docker Compose:

   ```sh
   docker-compose up --build
   ```

3. The frontend application will be running on `http://localhost:3000`.

## Running the Application

1. Open your browser and navigate to `http://localhost:3000`.
2. You can now create, read, update, and delete books and students.

## Project Structure

- : Contains the backend code (Express server, MongoDB models, routes).
- : Contains the frontend code (React application).

## Scripts

### Backend

- `start:dev`: Starts the backend server in development mode using nodemon.

### Frontend

- `start`: Starts the frontend development server.
- `build`: Builds the frontend application for production.
- `test`: Runs the frontend tests.

## License

This project is licensed under the MIT License.
