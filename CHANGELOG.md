## [0.1.0] - 2025-05-29

### ✨ Features

- Backend: implemented server setup with CORS, envs, routes and clean architecture
- Added dynamic middleware system to Express server via `Server` constructor
- Integrated security middlewares:
  - `helmet` for secure HTTP headers
  - `express-rate-limit` for abuse prevention
  - `hpp` for parameter pollution protection
  - `compression` for gzip compression
- Middleware files organized in `infrastructure/middlewares/` by concern (`security/`, `performance/`)
- Added `globalMiddlewares` aggregator for centralized injection
- Middleware injection enabled from `app.ts` in a clean and decoupled way

### 📝 Documentation

- Fully updated `README.md` with project overview, architecture, middleware summary and tech stack
