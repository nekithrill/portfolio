# Portfolio app

Nekithrill's fullstack application with React frontend and NestJS backend.

🔗 [Live Demo](https://nekithrill.com)

<br>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15+

### Installation

```bash
git clone https://github.com/nekithrill/portfolio.git
cd portfolio
```

### Frontend

```bash
cd apps/frontend
cp .env.example .env
npm install
npm run dev             # http://localhost:5173
```

### Backend

```bash
cd apps/backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run dev             # http://localhost:3000
```

---

## 🖥️ Frontend

[![React](https://img.shields.io/badge/React-61DAFB?style=plastic&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=ffffff)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=plastic&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![Biome](https://img.shields.io/badge/Biome-60a5fa?style=plastic&logo=biome&logoColor=white)](https://biomejs.dev/)
[![Stylelint](https://img.shields.io/badge/Stylelint-2e2e2e?style=plastic&logo=stylelint)](https://stylelint.io/)

A React + TypeScript SPA built with Vite. Styled via SCSS modules and enhanced with animations and interactive components.

### Dependencies

| Package                        | Purpose            |
| ------------------------------ | ------------------ |
| **React**, **ReactDOM**        | UI                 |
| **react-router-dom**           | Routing            |
| **react-hook-form**, **zod**   | Forms & validation |
| **@tanstack/react-query**      | Server state       |
| **axios**                      | HTTP client        |
| **i18next**, **react-i18next** | Localization       |
| **framer-motion**              | Animations         |
| **lucide-react**               | Icons              |
| **react-markdown**             | Markdown rendering |
| **sass**                       | Styling            |
| **Biome**, **Stylelint**       | Code quality       |

### Scripts

| Script         | Command                                 | Purpose                                                  |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| `dev`          | `vite`                                  | Runs project in development mode.                        |
| `build`        | `tsc -b && vite build`                  | Builds **TypeScript** and bundles project with **Vite**. |
| `preview`      | `vite preview`                          | Local preview of production build.                       |
| `lint:check`   | `biome lint src`                        | Checks JS/TS files with **Biome**.                       |
| `lint:fix`     | `biome lint src --write`                | Autofix **Biome** lint errors.                           |
| `format:check` | `biome format src`                      | Checks formatting with **Biome**.                        |
| `format:fix`   | `biome format src --write`              | Autofix formatting with **Biome**.                       |
| `style:check`  | `stylelint "src/**/*.{css,scss}"`       | Checks CSS/SCSS files with **Stylelint**.                |
| `style:fix`    | `stylelint "src/**/*.{css,scss}" --fix` | Autofix **Stylelint** errors.                            |

### Compatibility

| Type               | Support | Notes                                                  |
| ------------------ | :-----: | ------------------------------------------------------ |
| 🌐 Modern browsers |   ✅    | Chrome, Firefox, Safari, Edge, Opera (last 2 versions) |
| 🌐 IE              |   ❌    | Not supported                                          |
| 💻 Desktop         |   ✅    | ≥1024px                                                |
| 📟 Tablet          |   ✅    | ≥768px                                                 |
| 📱 Phone           |   ✅    | ≥360px                                                 |

### Project Structure

The project follows an adapted [FSD (Feature-Sliced Design)](https://feature-sliced.design/) approach. It keeps the core layering principles (_app → pages → widgets → features → shared_), but omits deep segment splitting (_model, lib, api, etc._) until the project grows to a scale where it becomes necessary.

```
📦 frontend/src
├── 📁 app       — layouts, providers, styles
├── 📁 pages     — application pages
├── 📁 widgets   — composite ui blocks
├── 📁 features  — business logic modules
└── 📁 shared    — assets, components, configs, hooks, types
```

---

## ⚙️ Backend

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=plastic&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=plastic&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=plastic&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

A NestJS REST API with PostgreSQL database and JWT authentication.

### Dependencies

| Package                                    | Purpose        |
| ------------------------------------------ | -------------- |
| **NestJS**                                 | Framework      |
| **Prisma**                                 | ORM            |
| **PostgreSQL**                             | Database       |
| **JWT**                                    | Authentication |
| **class-validator**, **class-transformer** | Validation     |

### Scripts

| Script    | Command              | Purpose                          |
| --------- | -------------------- | -------------------------------- |
| `dev`     | `nest start --watch` | Runs server in development mode. |
| `build`   | `nest build`         | Builds the project.              |
| `start`   | `node dist/main`     | Runs production build.           |
| `migrate` | `prisma migrate dev` | Runs database migrations.        |

### Project Structure

The backend follows a modular NestJS structure. Business logic is organized into self-contained modules, while cross-cutting concerns are separated into `common` and `shared`.

```
📦 backend/src
├── 📁 common     — guards, decorators, filters, interceptors, pipes, middleware
├── 📁 config     — database, environment and other app configurations
├── 📁 modules    — feature modules (auth, user, etc.)
├── 📁 prisma    — prisma client
├── 📁 shared     — types, enums, constants
├── 📄 app.module.ts
└── 📄 main.ts
```
