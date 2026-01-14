# Copilot Instructions for Time & Attention AI

## Project Overview

This is a transformative React + TypeScript website showcasing Joseph Pisa's revolutionary "pay it forward" AI business model that shifts our value system from tangible wealth to **time and attention**. The project demonstrates how AI can liberate humanity by handling life's complexity while licensed human mentors oversee every AI decision.

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Package Manager**: pnpm 10.4.1+ (required)
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Express server (minimal, for production hosting)
- **Node Version**: 22.13.0+

## Project Structure

```
client/               # Frontend application
  public/images/      # Custom watercolor illustrations and mentor portraits
  src/
    pages/            # Page components (Home, HowItWorks, Mentors, FutureVision, Insights)
    components/       # Reusable React components
      ui/             # shadcn/ui components (53 components)
    contexts/         # React contexts (ThemeContext)
    hooks/            # Custom React hooks
    lib/              # Utility functions
    App.tsx           # Main router and layout
    main.tsx          # React entry point
    index.css         # Global styles and design system
server/               # Express server
  index.ts            # Server entry point
shared/               # Shared constants and utilities
  const.ts            # Shared constants
```

## Design System: "Organic Authenticity with Purpose"

### Color Palette
- **Primary (Terracotta)**: `#c85a3a` - Main brand color
- **Secondary (Sage)**: `#a8d5ba` - Accent and highlights
- **Accent (Forest Green)**: `#2d5a3d` - Dark accents
- **Background (Sand/Cream)**: `#f9f7f4` or `#e8dcc8` - Warm backgrounds
- **Text Dark**: `#2a2a2a` - Primary text color

### Typography
- **Headlines**: `'Cormorant Garamond', serif` - Elegant, human-centered
- **Body Text**: `'Lato', sans-serif` - Warm, readable

Use these fonts consistently:
```tsx
style={{ fontFamily: "'Cormorant Garamond', serif" }}  // For headings
// Body text uses default Lato from global CSS
```

### Design Philosophy
- Genuine, human-centered, crafted feel—not corporate polish
- Generous whitespace with organic rhythm
- Gentle, natural, accessible transitions
- Mobile-first responsive design
- WCAG accessibility compliance

## Code Style and Conventions

### TypeScript Configuration
- **Strict mode enabled**: All code must be type-safe
- **Module system**: ESNext with bundler module resolution
- **Path aliases**:
  - `@/*` → `./client/src/*`
  - `@shared/*` → `./shared/*`
- **JSX**: React 19 JSX transform (no need to import React)

### Code Formatting (Prettier)
- **Semicolons**: Required (semi: true)
- **Quotes**: Double quotes (singleQuote: false)
- **Line width**: 80 characters
- **Indentation**: 2 spaces (no tabs)
- **Trailing commas**: ES5 style
- **Arrow parens**: Avoid when possible

Always run `pnpm format` before committing.

### Component Patterns

#### Page Components
- Located in `client/src/pages/`
- Default export
- Start with full-screen container: `<div className="min-h-screen bg-[#f9f7f4]">`
- Include sticky navigation at top

Example:
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b">
        {/* Nav content */}
      </nav>
      {/* Page content */}
    </div>
  );
}
```

#### UI Components
- Located in `client/src/components/ui/`
- Use shadcn/ui patterns with Radix UI primitives
- Export component and types
- Use `cn()` utility from `@/lib/utils` for className merging
- Use `cva` (class-variance-authority) for variant-based styling

#### Reusable Components
- Located in `client/src/components/`
- Named exports or default exports
- Props should be typed with TypeScript interfaces

### Styling Conventions

#### Tailwind CSS Usage
- Use utility classes for most styling
- Custom colors via inline styles when using brand colors:
  ```tsx
  className="text-[#c85a3a]"
  style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}
  ```
- Responsive design: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Use `container` class for responsive max-width containers

#### CSS Variables
- Defined in `client/src/index.css`
- Theme-aware colors using CSS custom properties
- Access via `var(--variable-name)` or Tailwind utilities

### Image Handling
- Store images in `client/public/images/`
- Reference with absolute paths: `"/images/filename.jpg"`
- Always include descriptive `alt` text for accessibility
- Use responsive image attributes when appropriate

### Routing
- Uses Wouter for client-side routing
- Define routes in `client/src/App.tsx`
- Route pattern: `<Route path={"/path"} component={Component} />`
- Navigation: use `<a href="/path">` for internal links

## Development Workflow

### Available Commands
```bash
pnpm install        # Install dependencies (required first step)
pnpm dev            # Start development server (http://localhost:3000)
pnpm build          # Build for production (client + server)
pnpm start          # Start production server
pnpm preview        # Preview production build
pnpm check          # TypeScript type checking
pnpm format         # Format code with Prettier
```

### Building and Testing
- Run `pnpm check` to verify TypeScript types before committing
- Run `pnpm format` to auto-format code
- Test changes with `pnpm dev` and verify in browser
- Build production bundle with `pnpm build` before deploying

### Adding New Dependencies
- Use `pnpm add <package>` for runtime dependencies
- Use `pnpm add -D <package>` for dev dependencies
- Prefer existing libraries over adding new ones
- Check compatibility with React 19 and TypeScript 5.6

## Key Architectural Decisions

### Theme System
- Uses custom `ThemeProvider` from `client/src/contexts/ThemeContext.tsx`
- Default theme is "light" (non-switchable by design)
- To enable theme switching, modify `ThemeProvider` props in `App.tsx`

### Error Handling
- Top-level `ErrorBoundary` component wraps entire app
- Catches React errors and displays fallback UI

### State Management
- React Context for global state (e.g., ThemeContext)
- Local component state with `useState` for component-specific state
- No external state management library (Redux, Zustand) currently used

### API Integration
- Server runs Express at `/api/*` endpoints (if needed)
- Use `axios` for HTTP requests (already installed)
- Shared types and constants in `shared/` directory

## Content and Messaging

### Core Mission
The website communicates Joseph Pisa's vision of:
- AI serving humanity's highest aspirations
- Valuing time and attention over material accumulation
- Technology enabling less stressful, more balanced lives
- "Paying it forward" as a natural response to liberation

### Key Pages
1. **Home** (`/`): Hero, vision, AI + human partnership, mission
2. **How It Works** (`/how-it-works`): 5-step interactive timeline
3. **Mentors** (`/mentors`): Licensed professionals with portraits
4. **Future Vision** (`/future-vision`): Long-term vision and possibilities
5. **Insights** (`/insights`): Analysis and insights

## Accessibility Requirements

- All interactive elements must be keyboard accessible
- Images must have descriptive alt text
- Color contrast must meet WCAG AA standards (4.5:1 for normal text)
- Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA attributes where appropriate
- Focus indicators must be visible

## Performance Considerations

- Lazy load images below the fold with `loading="lazy"`
- Optimize images before adding to `public/images/`
- Use Vite's automatic code splitting
- Keep bundle size minimal
- Lighthouse score target: 90+

## Security Best Practices

- No sensitive data in client-side code
- HTTPS-ready deployment
- Secure form handling
- No external tracking by default
- GDPR-compliant privacy practices

## Common Tasks

### Adding a New Page
1. Create `client/src/pages/NewPage.tsx`
2. Import in `client/src/App.tsx`
3. Add route: `<Route path={"/new-page"} component={NewPage} />`
4. Update navigation links in existing pages

### Adding a New Component
1. Create component in `client/src/components/`
2. Export component and types
3. Import where needed with `@/components/...`

### Modifying Styles
1. Use Tailwind utilities in className
2. For brand colors, use inline styles or custom CSS in `index.css`
3. Run `pnpm format` after editing

### Updating Content
1. Edit the relevant page file in `client/src/pages/`
2. Maintain consistent tone: genuine, human-centered, hopeful
3. Keep design system conventions (typography, colors, spacing)

## Important Notes

- **Package Manager**: Always use `pnpm`, never `npm` or `yarn`
- **Node Version**: Requires Node.js 22.13.0 or higher
- **Patches**: Project uses a patched version of wouter (see `pnpm.patchedDependencies`)
- **Images**: All custom illustrations are watercolor-style, hand-crafted aesthetic
- **License**: MIT License—open for reference and adaptation

## Questions or Issues?

Refer to:
- `README.md` for project overview
- `SETUP_GUIDE.md` for detailed development guide
- `FILE_MANIFEST.md` for complete file listing
- GitHub issues for bugs or feature requests
