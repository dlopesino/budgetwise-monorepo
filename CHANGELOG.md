# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 0.1.0 (2025-05-29)


### Features

* **backend:** implement server setup with CORS, envs, routes and clean architecture ([0a3c628](https://github.com/dlopesino/budgetwise-monorepo/commit/0a3c6281f6c5285dc9390bf4cc5fff9b05d45368))
* **performance:** add compression middleware ([7cf2e2e](https://github.com/dlopesino/budgetwise-monorepo/commit/7cf2e2ee21424dbc165d7d005d7098266b0291a2))
* **security:** add helmet middleware ([d928582](https://github.com/dlopesino/budgetwise-monorepo/commit/d928582b914c23215addb4f2040c3abe821e6311))
* **security:** add HPP middleware to prevent parameter pollution ([b466e81](https://github.com/dlopesino/budgetwise-monorepo/commit/b466e813eade48a3dc5428d03c6d3d82077adcb5))
* **security:** add rate limiting middleware to prevent abuse ([4b905d1](https://github.com/dlopesino/budgetwise-monorepo/commit/4b905d1fea5e5ff6c007e872197397ed3232c0b6))

## [0.1.0] - 2025-05-29

### ✨ Features

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
