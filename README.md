# Next.js Project Setup Guide

## Introduction
This guide walks through setting up a Next.js project using `create-next-app` with TypeScript and specific configurations.

## Prerequisites
- Node.js installed on your system
- Visual Studio Code (VSCode)
- Basic familiarity with terminal commands

## Project Setup Steps

### 1. Open VSCode and Terminal
1. Launch Visual Studio Code
2. Open a new terminal by selecting:
   - Menu: `Terminal -> New Terminal`
   - Or use the keyboard shortcut: 
     - Windows/Linux: `` Ctrl + ` ``
     - Mac: `` Cmd + ` ``

### 2. Project Creation
Run the following command to create a new Next.js project:

```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

### 3. Configuration Options
When prompted, select the following options:

✅ **Yes** for:
- Would you like to use ESLint? → Yes
- Would you like to use Tailwind CSS? → Yes
- Would you like to use `src/` directory? → No
- Would you like to use App Router? → No
- Would you like to customize the default import alias? → Yes

### 4. Start Development Server
Once the project is created, start the development server:

```bash
cd alx-project-0x00
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure
After setup, your project structure should look similar to this:

```
alx-project-0x00/
├── .next/
├── node_modules/
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Configuration Files
- **next.config.js**: Next.js configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration
- **.eslintrc.json**: ESLint rules and configuration
- **postcss.config.js**: PostCSS plugins configuration

## Next Steps
1. Explore the project structure
2. Modify `pages/index.tsx` to start building your application
3. Add new pages in the `pages` directory
4. Style your components using Tailwind CSS
5. Use TypeScript for type-safe development

## Common Commands
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Start production server
- `npm run lint`: Run ESLint checks
