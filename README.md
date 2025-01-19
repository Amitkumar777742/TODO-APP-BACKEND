# TODO App Backend

This is the backend API for a TODO application built using Node.js, Express, and MongoDB. The backend provides functionality for users to manage their TODO tasks with features like adding, updating, deleting, and listing tasks. It also supports user authentication with JWT (JSON Web Tokens) for secure access.

## Features

- User authentication (signup, login)
- CRUD operations for TODO tasks (Create, Read, Update, Delete)
- Task management (Mark as complete/incomplete)
- Secure JWT-based authentication
- User-specific task management (tasks are unique to each user)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **Environment Configuration**: dotenv

## Installation

### Clone the repository

```bash
git clone https://github.com/Amitkumar777742/TODO-APP-BACKEND.git
cd TODO-APP-BACKEND
Setup
Install the required dependencies:
bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:
bash
Copy
Edit
PORT=5000
MONGODB_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret>
Start the backend server:
bash
Copy
Edit
npm start
The backend will now be running at http://localhost:5000.

Endpoints
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in and receive a JWT
GET /api/tasks: Get all tasks for the authenticated user
POST /api/tasks: Create a new task
PUT /api/tasks/:id: Update an existing task (mark as complete/incomplete)
DELETE /api/tasks/:id: Delete a task
Usage
Ensure MongoDB is running and properly configured in the .env file.
Register a new user using the /api/auth/register endpoint.
Log in with the /api/auth/login endpoint to get your JWT token.
Use the JWT to access the protected routes for managing tasks.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork this repository and submit pull requests. If you find any issues or have suggestions for improvements, please create an issue, and I'll review it.

Acknowledgements
Express.js
Node.js
MongoDB
JWT
bcrypt.js
arduino
Copy
Edit

Feel free to modify it further according to any additional setup steps or features that you might have in your project.






