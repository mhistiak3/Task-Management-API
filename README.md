
## Task Management API

This repository contains the backend API for a Task Management application. The API is built using **Node.js** and **Express.js**, and it provides various endpoints to create, update, delete, and retrieve tasks.

### Features

- **User Authentication**: Secure user login and registration.
- **Task Management**: Create, update, delete, and retrieve tasks.
- **JWT Authentication**: Protect routes with JSON Web Tokens.
- **Error Handling**: Robust error handling for all routes.
- **Database Integration**: MongoDB is used for data storage.

### Getting Started

Follow these instructions to set up the project on your local machine.

#### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)
- [npm](https://www.npmjs.com/get-npm)

#### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mhistiak3/Task-Management-API.git
    cd Task-Management-API
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/taskdb
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. The server will be running at `http://localhost:5000`.


### Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **JWT**: JSON Web Tokens for secure authentication


### Contact

For any inquiries or issues, please contact [Istiak Ahammad](https://github.com/mhistiak3).
