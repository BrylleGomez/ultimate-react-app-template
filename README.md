# Ultimate React App Template

Ultimate template for a React+TS single page application.

### Usage

1. Clone repository - `git clone https://github.com/BrylleGomez/ultimate-react-app.git`
2. Rename folder name - for MacOS/Linux: `mv ultimate-react-app-template <your-desired-folder-name>`
3. Navigate to project folder and delete .git folder and .gitignore file - for MacOS/Linux: `rm -rf .git` and `rm .gitignore`
4. Initialize git in the repository, add .gitignore with the below contents, add desired remote repository as remote, and push initial commit to new remote.

##### Sample .gitignore
```
node_modules
.DS_Store
dist
dist-ssr
*.local
```

### Tech Stack

1. **React** → Frontend Framework
2. **TypeScript** → Language
3. **Vite** → Frontend Build Tool
4. **Yarn** → Package Manager

### Project Setup

1. **Install NodeJS, NPM, and Yarn**
    1. Install [NodeJS](https://nodejs.org/en/) (comes with NPM) → full [guide](https://www.freecodecamp.org/news/how-to-install-node-js-and-npm-on-windows/)
    2. Install Yarn → `npm install -g yarn`
    3. (Optional) Enable Yarn in PowerShell → `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
2. **Create [React/TypeScript template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) using Vite & Yarn** → `yarn create vite <project_name> --template react-ts`
    1. Install needed packages → `yarn install`
3. **Setup Git in project** → `git init`
    1. Perform initial commit
    2. (Recommended) Publish to GitHub as public/private repo
4. **Setup ESLint and Prettier**
    1. Install and setup code linting w/ ESLint → [guide](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)
    2. Install and setup code formatting w/ Prettier → [guide](https://andrebnassis.medium.com/setting-prettier-on-a-react-typescript-project-2021-f9f0d5a1d6b0) (do not setup VS Code)
    3. Making ESLint and Prettier work together → [guide](https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9)
