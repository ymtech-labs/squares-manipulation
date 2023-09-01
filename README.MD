# UBSTREAM / Quadrilateral Drawing

<a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>
<a href="https://twitter.com/younesmjl"><img src="https://img.shields.io/twitter/follow/younesmjl.svg?style=social&label=Follow&maxAge=3600" height="20"></a>
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Web interface to drawing quadrilateral (squares or rectangles)

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Directory Structure](#directory-sructure)
-   [Tech Stack](#tech-stack)
-   [Requirements](#requirements)
-   [Scripts](#scripts)
    -   [Repository](#repository)
    -   [App](#app)

## Getting Started <a name="getting-started"></a>

-   Clone the repo<br />
    `git clone -o seed -b master --single-branch https://github.com/ymtech-labs/quadrilateral-drawing.git`

### Application

-   Install PNPM package manager — `npm install -g pnpm`
-   Install project dependencies — `pnpm install`
-   Launch the app — `pnpm run dev`, it will become available at [http://localhost:5173/](http://localhost:5173/)

## Features <a name="features"></a>

> **INDICATORS**
>
> -   DONE : ✅ - [production](https://github.com/ymtech-labs/quadrilateral-drawing/deployments/Production)
> -   IN PROGRESS : 🔁 - [development](https://github.com/ymtech-labs/quadrilateral-drawing/deployments/Preview)
> -   TO DO : 🚧

|                                       RELEASE                                       | DESCRIPTION                                                   | STATUS |
| :---------------------------------------------------------------------------------: | ------------------------------------------------------------- | :----: |
| [V0.0.x](https://github.com/ymtech-labs/quadrilateral-drawing/releases/tag/v.0.0.0) | 🛠️ Settings & Technicals Environnement                        |   ✅   |
| [V0.1.x](https://github.com/ymtech-labs/quadrilateral-drawing/releases/tag/v.0.1.0) | 🔲 Draw random-colored squares (or rectangles) with the mouse |   ✅   |
| [V0.2.x](https://github.com/ymtech-labs/quadrilateral-drawing/releases/tag/v.0.2.0) | ⭕ Double-click on a quadrilateral to rotate it through 360°  |   ✅   |
|                                     [V0.3.x]()                                      | 🗑️ At the end of the rotation, delete the square              |   🚧   |
|                                     [V0.4.x]()                                      | ❌ Multiple quadrilateral removal                             |   🚧   |

## Directory Structure <a name="directory-sructure"></a>

`├──` [`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──` [`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──` [`.husky`](.husky) — Git Hooks, for code quality<br>
`├──` [`public`](./public) — Static Asset Handling <br>
`├──` [`src`](./src) — App files <br>
`├────` [`_styles`](./src/_styles) — Sass files of app <br>
`├────` [`helpers`](./src/helpers) — Specific functions to a this project... <br>
`├────` [`types`](./src/types) — Type declaration files.<br>
`├────` [`utils`](./src/utils) — Generic function that accomplishes an abstract task <br>
`├──────` [`main.ts`](./src/main.ts) — Inject app in index.html<br>
`├────` [`index.html`](./index.html) — Application entry point<br>

## Tech Stack <a name="tech-stack"></a>

[Cypress](https://github.com/cypress-io/cypress/), [Vitest](https://vitest.dev/)

-   [TypeScript](https://www.typescriptlang.org/),
    [ESLint](https://eslint.org/), [Prettier](https://prettier.io/),
    [PNPM](https://pnpm.io/fr),
    [Vite](https://vitejs.dev/)
-   [Github Actions](https://docs.github.com/en/actions), [Vercel](https://vercel.com), [Renovate](https://github.com/renovatebot/renovate), [Gist](https://gist.github.com/)

## Requirements <a name="requirements"></a>

-   [Node.js](https://nodejs.org/) v16 or newer, [PNPM](https://pnpm.io) package manager
-   [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

**IMPORTANT**: Ensure that VSCode is using the workspace versions of TypeScript and ESLint.

![](https://files.tarkus.me/typescript-workspace.png)

## Scripts <a name="scripts"></a>

### Repository <a name="repository"></a>

-   `pnpm prepare` — Install and configure husky hooks system
-   `pnpm commit` — Run commitizen command line to receive assistance in drafting commit

### App <a name="app"></a>

-   `pnpm dev` — Launches the app in development mode on [`http://localhost:5173`](http://localhost:5173/)
-   `pnpm build` — Compiles and bundles the app for deployment
-   `pnpm preview` — Preview your build app

---

<sup>Made with ♥ by Younès Manjal.</sup>
