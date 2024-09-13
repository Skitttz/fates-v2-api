<div id="user-content-toc" align="center"><ul align="center" style="list-style: none;"><img width="20%" src="./public/logo.ico"> <summary><h1><b>Fates</b> [Clothing Showcase]</h1></summary></img></ul></div>

## 🔍 Summary

- [👋 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#-architecture)
- [🔧 Technologies Used](#-technologies-used)
- [📦 Entities](#-entities)
  - [👤 User Entity](#user-entity)
  - [👕 Clothing Entity](#clothing-entity)
- [🚀 Getting Started](#-getting-started)
  - [🖥️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#%EF%B8%8F-installation)
  - [▶️ Running the API](#%EF%B8%8F-running-the-api)
- [🔑 Authentication](#-authentication)
- [📡 API Endpoints](#-api-endpoints)

## 👋 Overview

This project designed to showcase clothing items. Built with **Clean Architecture** principles, the project ensures scalability, maintainability, and a clear separation of concerns. The API leverages **Bun** and **ElysiaJS** to deliver high performance and efficient resource handling. This version is strictly for **viewing** purposes.

## ✨ Features

- **🔐 User Authentication**: Secure user registration and login.
- **👕 Clothing Showcase**: View available clothing items via API endpoints.
- **🏗️ Clean Architecture**: Ensures separation of concerns for scalability and maintainability.

## 🏗️ Architecture

This project adheres to **Clean Architecture** principles, providing a modular and easily scalable codebase. The architecture layers are well-separated, ensuring clarity and maintainability:

1. **Entities**: Core business logic, handling Users and Clothing data.
2. **Use Cases**: Application logic for user authentication and data retrieval.
3. **Adapters**: Bridge between core logic and external frameworks.
4. **Frameworks & Drivers**: **Bun** and **ElysiaJS** as the runtime and web framework.

## 🔧 Technologies Used

- **⚡ Bun**: Fast, all-in-one JavaScript runtime.
- **📏 ElysiaJS**: Lightweight web framework for Bun, optimized for speed.
- **🔄 Prisma**: Modern ORM for database management and seamless interaction with the data layer.

## 📦 Entities

### 👤 User Entity

The `User` entity manages the authentication logic. This includes:

- **Registration**: Creating new user accounts.
- **Login**: Authenticating users with email and password.
- **Token Management**: Handling authentication tokens to ensure secure access to endpoints.

### 👕 Clothing Entity

The `Clothing` entity displays clothing items. Users can:

- **View Clothing Items**: Retrieve a list of available clothing.
- **Search/Filter**: (optional in future versions) Filter items by attributes like type, color, or size.

> [!NOTE]
> No cart or purchasing functionality in this version, only a clothing showcase. 🛒🚫

## 🚀 Getting Started

### 🖥️ Prerequisites

- **Bun**: Install [Bun](https://bun.sh/) on your system.
- **Node.js**: Some tools may still require Node.js, so have it ready if needed.

### ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Skitttz/fates-v2-api.git
   cd fates-api
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

### ▶️ Running the API

Start the API server:

```bash
bun dev
```

The API will be available at `http://localhost:3000`.

## 🔑 Authentication

**JWT (JSON Web Token)** is used for authentication. After logging in, users receive a token that must be sent in the `Authorization` header for protected endpoints.

Example:

```http
Authorization: Bearer your-jwt-token
```

## 📡 API Endpoints

The API is fully documented using Swagger. If you prefer not to explore the repository directly, you can easily view and interact with the API documentation by accessing the Swagger UI at route `/swaggger`.

### 👕 Clothing Endpoints

- **GET /api/v1/clothings**  
  Retrieves a list of available clothing items.

- **POST /api/v1/clothings**  
  Create new clothing item.

- **GET /api/v1/clothings/:id**  
  Retrieves details of a specific clothing item by ID.

- **PUT /api/v1/clothings/:id**  
  Update details of a specific clothing item by ID.

- **DELETE /api/v1/clothings/:id**  
  Delete specific clothing item by ID.

### 🔐 Authentication Endpoints

- **POST /api/v1/auth/register**  
  Registers a new user.

  - Request Body:
    ```json
    {
      "email": "example@mail.com",
      "password": "yourPassword"
    }
    ```

- **POST /api/v1/auth/login**  
  Logs in an existing user.

  - Request Body:
    ```json
    {
      "email": "example@mail.com",
      "password": "yourPassword"
    }
    ```

- **GET /api/v1/auth/me**  
  Retrieves the logged-in user's details (requires authentication).

<br/>

---

<p align="right"> Thank you for reading this project! If you have any questions or would like to offer corrections, feel free to get in touch. 😊 </p>
