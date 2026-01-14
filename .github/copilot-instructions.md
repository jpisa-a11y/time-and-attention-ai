# Copilot Instructions for Time & Attention AI

## Project Overview

This is a React + TypeScript website showcasing Joseph Pisa's revolutionary "pay it forward" AI business model that shifts our value system from tangible wealth to **time and attention**. The project demonstrates how AI can liberate humanity by handling life's complexity while licensed human mentors oversee every AI decision.

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript 5.6
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: pnpm (required - do NOT use npm or yarn)

## Project Structure

```
client/src/
  ├── pages/          # Page components (Home, HowItWorks, Mentors, etc.)
  ├── components/     # Reusable components
  │   └── ui/         # shadcn/ui components (53 pre-built)
  ├── contexts/       # React contexts (ThemeContext)
  ├── hooks/          # Custom hooks
  ├── lib/            # Utility functions
  ├── App.tsx         # Main router and layout
  └── index.css       # Global styles and design system

server/
  └── index.ts        # Express server for production

shared/
  └── const.ts        # Shared constants
```

## Design System: "Organic Authenticity with Purpose"

### Colors (use CSS variables from `client/src/index.css`)

- **Primary (Terracotta)**: `#c85a3a` - Use for CTAs, emphasis
- **Secondary (Sage)**: `#a8d5ba` - Use for secondary elements
- **Accent (Forest Green)**: `#2d5a3d` - Use for highlights
- **Background (Sand)**: `#f9f7f4` - Main background color

Access via CSS variables or Tailwind utilities defined in index.css.

### Typography

- **Headlines**: Cormorant Garamond (serif) - Elegant, human touch
- **Body Text**: Lato (sans-serif) - Warm, readable
- Fonts loaded via Google Fonts in `client/index.html`

### Spacing & Layout

- **Mobile-first responsive design** - Always test on mobile first
- **Generous whitespace** - Don't crowd elements
- **Responsive container**: Use adaptive padding (1rem mobile → 2rem desktop)
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## Code Style & Patterns

### TypeScript

- **Strict mode enabled** - All types must be defined
- **Use interfaces for props** - Not inline types
- **Avoid `any` type** - Use specific types or `unknown`

### React Patterns

- **Functional components only** - No class components
- **Use hooks** - useState, useEffect, custom hooks
- **Keep components focused** - Single responsibility
- **Props destructuring** - Destructure props in component signature

Example:
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Styling

- **Use Tailwind CSS utility classes** - Avoid custom CSS unless necessary
- **Mobile-first responsive** - Base styles for mobile, then md:, lg:, xl: breakpoints
- **Use design system colors** - Reference colors from index.css variables
- **Consistent spacing** - Use Tailwind spacing scale (p-4, gap-6, etc.)

Example:
```tsx
<div className="flex flex-col gap-6 p-6 md:p-8 lg:flex-row">
  <h1 className="text-3xl font-serif text-gray-900 md:text-4xl">Title</h1>
</div>
```

### Component Imports

- **Use shadcn/ui components** - Import from `@/components/ui/*`
- **Use Lucide icons** - Import from `lucide-react`
- **Path aliases** - Use `@/` for imports from `client/src/`

Example:
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
```

## Development Workflow

### Commands

```bash
# Install dependencies (ALWAYS use pnpm)
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Type check (run before committing)
pnpm check

# Format code (run before committing)
pnpm format

# Start production server
pnpm start
```

### File Creation

- **New pages**: Create in `client/src/pages/` and add route in `App.tsx`
- **New components**: Create in `client/src/components/`
- **New utilities**: Create in `client/src/lib/`
- **Images**: Place in `client/public/images/` and reference as `/images/filename.jpg`

### Adding Routes

1. Create page component in `client/src/pages/PageName.tsx`
2. Import in `client/src/App.tsx`
3. Add `<Route path="/page-name" component={PageName} />`
4. Update navigation links in relevant pages

## Accessibility Guidelines

- **All images MUST have descriptive alt text**
- **Use semantic HTML** - `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Keyboard navigation** - All interactive elements must be keyboard accessible
- **Color contrast** - Meet WCAG AA standards (use design system colors)
- **Focus indicators** - Ensure visible focus states on interactive elements
- **Form labels** - All form inputs must have associated labels
- **Heading hierarchy** - Use h1, h2, h3 in logical order

## Performance Best Practices

- **Optimize images** - Use WebP when possible, proper sizing
- **Lazy loading** - Use `loading="lazy"` on images below the fold
- **Code splitting** - Vite handles this automatically
- **Avoid unnecessary re-renders** - Use React.memo, useMemo, useCallback when appropriate
- **Keep bundle size small** - Only import what you need from libraries

## Common Patterns in This Project

### Navigation

Use Wouter's `Link` component for internal navigation:
```tsx
import { Link } from "wouter";

<Link href="/how-it-works" className="...">How It Works</Link>
```

### Images

Reference images from public directory:
```tsx
<img 
  src="/images/hero-ai-liberation.jpg" 
  alt="AI helping person reclaim their time"
  loading="lazy"
/>
```

### Responsive Layout

Use Tailwind flex/grid with responsive breakpoints:
```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>
```

### Theme-aware Components

Access theme from ThemeContext if needed:
```tsx
import { useTheme } from "@/contexts/ThemeContext";

const { theme, setTheme } = useTheme();
```

## What NOT to Do

- ❌ Don't use npm or yarn - ONLY use pnpm
- ❌ Don't add new dependencies without careful consideration
- ❌ Don't modify the design system colors without approval
- ❌ Don't create class components - only functional components
- ❌ Don't ignore TypeScript errors - fix them
- ❌ Don't skip accessibility - it's core to this project
- ❌ Don't use inline styles - use Tailwind classes
- ❌ Don't commit without running `pnpm format` and `pnpm check`

## Testing & Validation

Before committing:
1. Run `pnpm check` to verify TypeScript types
2. Run `pnpm format` to format code with Prettier
3. Test in browser at http://localhost:3000
4. Verify mobile responsiveness
5. Check keyboard navigation
6. Validate color contrast for accessibility

## Project Philosophy

This project emphasizes:
- **Human-centered AI** - Technology serving humanity
- **Accessibility first** - Everyone should be able to use the site
- **Organic authenticity** - Genuine, warm, approachable design
- **Time and attention** - Valuing people's most precious resources
- **Pay it forward** - Building a better world together

When writing code, keep these values in mind. Every component should feel genuine, accessible, and respectful of users' time and attention.

## Getting Help

- Check `README.md` for project overview and getting started
- Check `SETUP_GUIDE.md` for detailed development guide
- Check `FILE_MANIFEST.md` for complete file structure
- Review existing components in `client/src/components/ui/` for patterns
- Look at existing pages for examples of layout and styling
