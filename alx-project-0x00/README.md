# Airbnb Clone Application

A Next.js-based Airbnb clone application showcasing modern web development practices with TypeScript and Tailwind CSS.

## Project Setup and Structure

### Initial Setup
```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

Configuration choices:
- ✅ ESLint
- ✅ Tailwind CSS
- ❌ src/ directory
- ❌ App Router
- ✅ Import alias

### Project Structure
```
alx-project-0x00/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Pill.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── landing.tsx
│   └── about.tsx
├── public/
│   └── assets/
│       └── images/
│           ├── house.png
│           └── star.png
└── ... (other configuration files)
```

## Routing
The project uses Next.js Pages Router for navigation:
- `/` - Home page
- `/landing` - Property listings page
- `/about` - About page

## Components

### Card Component
A reusable property card component that displays:
- Property image
- Feature tags (using Pill component)
- Property details and pricing
- Amenity icons

### Pill Component
A reusable label component with TypeScript interface:
```typescript
interface PillProps {
  title: string;
}
```

Usage:
```tsx
<Pill title="Top Villa" />
<Pill title="Self CheckIn" />
<Pill title="Free Reschedule" />
```

### Button Component
A customizable button component with various props:
```typescript
interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary';
}
```

Usage:
```tsx
<Button title="Click Me" size="medium" shape="rounded-full" variant="primary" />
```

## TypeScript Integration
- Interfaces for component props
- Type safety for component properties
- Centralized type definitions in interfaces directory

## Development
1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. View the application:
- Visit http://localhost:3000
- Navigate to /landing and /about routes

## Features
- Responsive design with Tailwind CSS
- Type-safe components with TypeScript
- File-system based routing
- Reusable UI components
- Modern development practices

## Best Practices
- Component-based architecture
- TypeScript for type safety
- Centralized interfaces
- Consistent code style with ESLint
- Responsive design patterns
