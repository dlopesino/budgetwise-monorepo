# 📊 BudgetWise Monorepo

**BudgetWise** is a full-stack personal finance management application built with **Clean Architecture**, **Hexagonal Design**, and modern full-stack technologies. It uses **TypeScript**, **Node.js**, **PostgreSQL**, **React Microfrontends** (Module Federation), **Redux Toolkit**, and includes secure authentication and full testing coverage.

---

## 🚀 Tech Stack

### 🔹 Backend

- Node.js + Express
- TypeScript
- PostgreSQL (Docker)
- Prisma ORM
- Clean Architecture + Hexagonal Design
- JWT Authentication + OAuth2 (Google/GitHub)
- Jest + Supertest

### 🔹 Frontend

- React (Vite)
- Redux Toolkit
- Microfrontends with Module Federation
- React Router
- Cypress (E2E testing)

---

## 📁 Monorepo Structure

```bash
apps/
├── backend/                 # Backend API
└── frontend/                # React-based Microfrontends
```

---

## 📦 Backend Structure (Clean Architecture)

```bash
apps/backend/src/
├── app.ts                        # Application bootstrap
├── config/                       # Environment variables, plugins
├── domain/                       # Domain entities and abstractions
├── application/                  # Use cases
├── infrastructure/
│   ├── middlewares/             # Grouped middlewares (security, performance)
│   └── prisma/                  # Prisma client & adapter
├── presentation/                # Express server and routes
├── shared/                      # Reusable types and helpers
```

---

## 🔐 Security Features

- CORS with origin whitelist loaded from `.env`
- `helmet` for secure HTTP headers
- `express-rate-limit` to prevent abuse
- `hpp` to block HTTP parameter pollution
- `compression` to reduce response payload size
- Input sanitization with `express-validator` (in infrastructure validators)
- JWT authentication with user/admin roles
- OAuth2 login (Google and GitHub)
- Protection against SQL Injection via Prisma (no `queryRawUnsafe`)
- CSRF not needed (tokens passed in headers, no cookies)

---

## 📜 Express Middleware Overview

The following middlewares are used globally and injected dynamically in the Express server:

| Middleware    | Purpose                           |
| ------------- | --------------------------------- |
| `helmet`      | Protects HTTP headers             |
| `rate-limit`  | Limits requests per IP            |
| `hpp`         | Prevents HTTP parameter pollution |
| `compression` | Compresses HTTP responses (gzip)  |

Middlewares are organized by type in `infrastructure/middlewares/` and grouped via `globalMiddlewares`.

---

## 🧪 Testing

- **Jest** for unit and integration testing
- **Supertest** for HTTP endpoint testing
- **Cypress** for end-to-end frontend testing
- Isolated test database via Docker (PostgreSQL)

---

## 🐳 Docker Support (coming soon)

- PostgreSQL container for local and CI use
- Docker Compose for full-stack orchestration
- CI/CD pipeline ready

---

## 📦 Scripts

```bash
# Start backend
cd apps/backend && npm run dev

# Run backend tests
npm run test

# Start frontend
cd apps/frontend && npm run dev
```

---

## 📄 License

MIT — © [Daniel Lopesino](https://github.com/dlopesino)
