## Description

A RESTful API for managing recipes, built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/).

## Project Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   Copy the example environment file and adjust values as needed:

   ```bash
   cp .env.example .env
   ```

3. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

4. **Apply database schema**

   Push the Prisma schema to your database:

   ```bash
   npx prisma db push
   ```

## Running the Project

- **Development mode**

  ```bash
  npm run start
  ```

- **Watch mode (auto-reload on changes)**

  ```bash
  npm run start:dev
  ```

- **Production mode**

  ```bash
  npm run start:prod
  ```

Once running, access the Swagger API documentation at: [http://localhost:3000/api](http://localhost:3000/api)

## Testing

- **Unit tests**

  ```bash
  npm run test
  ```

- **End-to-end (e2e) tests**

  ```bash
  npm run test:e2e
  ```

- **Test coverage**

  ```bash
  npm run test:cov
  ```