# Bookstore
This repository contains the submission for the Node.js Developer Recruitment Task at M360ICT.
## Postman Collection
For API testing and collaboration, you can access the Postman collection [here](https://m360ict-6541.postman.co/workspace/Team-Workspace~091e4e29-4531-46dc-84a8-40a03f552561/collection/28046716-dc954cb6-340a-410a-ad4b-f5cc1b9b52f7?action=share&creator=28046716).
## Features
- **Author Management**
  - Create, read, update, and delete authors.
  - Retrieve books written by a specific author.

- **Book Management**
  - Create, read, update, and delete books.
  - Retrieve all books or books by a specific author.

## Technologies Used

- **Backend**: 
  - Express
  - TypeScript
  - Knex.js (SQL query builder)
  - MySQL

- **Development Tools**:
  - Nodemon
  - ts-node
  - TypeScript

## Installation

1. Clone the repository:
    ```bash
    git clone <[repository-url](https://github.com/Tariq-Monowar/Bookstore/)>
    cd bookstore
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    DB_CLIENT=mysql2
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=bookstore
    SERVER_PORT=3000
    ```

4. Run migrations to set up the database schema:
    ```bash
    npm run migrate
    ```
