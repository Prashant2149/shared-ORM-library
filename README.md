# Shared ORM Library

This repository contains the shared database configuration, entities, and migrations for the **My-Account** project. It is used as a dependency by the backend service.

## 📌 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (v14+ recommended)

## 📂 Folder Structure
```
shared-orm-library/
│── src/
│   ├── entities/
│   │   ├── User.ts
│   │   ├── Settings.ts
│   ├── data-source.ts
│── dist/
│── package.json
│── tsconfig.json
│── .env
│── README.md
```

## 📌 Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/your-username/shared-orm-library.git
cd shared-orm-library
npm install
```

## ⚙️ Environment Variables (.env)
Create a `.env` file in the root directory:
```ini
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=My-account
```

## 🔨 Build and Link the Library
```sh
npm run build
```

To use this package in the backend service:
```sh
cd ../backend
npm install git+https://github.com/Prashant2149/shared-ORM-library.git
```

## 📜 License
This project is licensed under [MIT](LICENSE).

