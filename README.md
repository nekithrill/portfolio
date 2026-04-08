# Portfolio app

My portfolio application.

<!-- 🔗 [Live Demo](https://nekithrill.com) -->

## 🚀 Getting Started

```bash
git clone https://github.com/nekithrill/portfolio.git
cd portfolio
npm install
npm run dev
```

## ⚙️ Configuration

[![React](https://img.shields.io/badge/React-55B2CC?style=plastic&logo=react&logoColor=ffffff)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=ffffff)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=plastic&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=plastic&logo=framer&logoColor=ffffff)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=plastic&logo=i18next&logoColor=ffffff)](https://www.i18next.com/)
[![Biome](https://img.shields.io/badge/Biome-60a5fa?style=plastic&logo=biome&logoColor=white)](https://biomejs.dev/)
[![Stylelint](https://img.shields.io/badge/Stylelint-2e2e2e?style=plastic&logo=stylelint)](https://stylelint.io/)

A React + TypeScript SPA built with Vite. Styled via SCSS modules and enhanced with animations and interactive components.

### Scripts

| Script         | Command                                 | Purpose                                                  |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| `dev`          | `vite`                                  | Runs project in development mode.                        |
| `build`        | `tsc && vite build`                     | Builds **TypeScript** and bundles project with **Vite**. |
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

The project follows an adapted [FSD (Feature-Sliced Design)](https://feature-sliced.design/) approach. It keeps the core layering principles (_app → pages(sections in my case) → widgets → features → shared_), but omits deep segment splitting (_model, lib, api, etc._) until the project grows to a scale where it becomes necessary.

For styling I used my personal template [SCSS-styles-system](https://github.com/nekithrill/scss-style-system).

```
📦 frontend/src
├── 📁 app       — layouts, providers, styles
├── 📁 sections  — application sections
├── 📁 widgets   — composite ui blocks
├── 📁 features  — business logic modules
└── 📁 shared    — assets, components, configs, hooks, types
```
