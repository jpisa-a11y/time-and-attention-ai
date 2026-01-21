# Copilot Instructions for Time & Attention AI

## Repository Overview

This is **Time & Attention AI**, a React-based web application showcasing Joseph Pisa's revolutionary "pay it forward" AI business model. The project demonstrates how AI can liberate humanity by handling life's complexity while licensed human mentors oversee every AI decision.

**Type:** Full-stack web application  
**Size:** Medium (~800 dependencies)  
**Primary Languages:** TypeScript, React 19  
**Target Runtime:** Node.js v20.19.6+  
**Package Manager:** pnpm v10.4.1+

## Tech Stack

- **Frontend:** React 19 + TypeScript, Vite 7
- **Styling:** Tailwind CSS 4, custom CSS variables, Organic Authenticity design system
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** Wouter 3.7.1 (client-side router)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Server:** Express.js (Node.js)

## Project Structure

```
time-and-attention-ai/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, illustrations)
│   └── src/
│       ├── pages/         # Main page components (Home, HowItWorks, Mentors, etc.)
│       ├── components/    # Reusable UI components (mostly shadcn/ui)
│       ├── contexts/      # React contexts (ThemeContext)
│       ├── hooks/         # Custom React hooks
│       ├── lib/          # Utility functions
│       ├── App.tsx       # Main router and layout
│       ├── main.tsx      # React entry point
│       └── index.css     # Design system & global styles
├── server/                # Backend Express server
│   └── index.ts          # Server entry point
├── shared/               # Shared code between client/server
├── patches/              # pnpm patches (wouter@3.7.1.patch)
├── .github/              # GitHub configuration
├── eslint.config.js      # ESLint configuration
├── vite.config.ts        # Vite build configuration
├── tsconfig.json         # TypeScript configuration
├── .prettierrc           # Prettier configuration
└── package.json          # Project dependencies
```

## Key Configuration Files

- **package.json** - Scripts and dependencies (must use exact wouter version 3.7.1 for patch compatibility)
- **vite.config.ts** - Client build config, dev server on port 3000
- **tsconfig.json** - TypeScript settings, path aliases: `@/*` → `client/src/*`, `@shared/*` → `shared/*`
- **eslint.config.js** - Linting rules for React, TypeScript
- **.prettierrc** - Code formatting (2 spaces, double quotes, semicolons)

## Prerequisites & Setup

### Required Versions
- **Node.js:** v20.19.6 or higher (tested with v20.19.6)
- **pnpm:** v10.4.1 or higher (exact: 10.4.1+sha512...)

### Important: Install pnpm First
If pnpm is not available, install it globally:
```bash
npm install -g pnpm@10.4.1
```

### Installation Steps
**ALWAYS** follow this exact sequence:

1. **Fix package version if needed:**
   - The `wouter` package MUST be version `3.7.1` (exact, not `^3.3.5`) to match the patch file
   - If `package.json` shows `"wouter": "^3.3.5"`, change it to `"wouter": "3.7.1"`

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   - Takes ~10-30 seconds
   - May show peer dependency warnings (vite@^4.0.0 || ^5.0.0 vs 7.3.1) - **this is expected**
   - May show ignored build scripts warning - **this is expected**
   - Will fail if wouter version doesn't match patch

3. **Common installation issues:**
   - `ERR_PNPM_PATCH_NOT_APPLIED: wouter@3.7.1` → Ensure `package.json` has exact version `3.7.1`
   - Broken lockfile → Remove `pnpm-lock.yaml` and reinstall
   - Missing pnpm → Install pnpm globally first

## Development Scripts

### Primary Commands
All commands run via pnpm:

```bash
# Start development server (port 3000)
pnpm dev
# - Runs Vite dev server with HMR
# - Accessible at http://localhost:3000
# - Auto-finds next port if 3000 is busy

# Type checking (NO build)
pnpm check
# - Runs TypeScript compiler in noEmit mode
# - Validates types across client/src, server, shared
# - May show pre-existing errors (e.g., Home.tsx JSX tag issues)

# Lint code
pnpm lint
# - Runs ESLint on all .js/.jsx/.ts/.tsx files
# - May show pre-existing warnings (react-refresh, @typescript-eslint/no-explicit-any)
# - Known issue: client/src/pages/Home.tsx has a parsing error (unclosed <a> tag)

# Auto-fix linting issues
pnpm lint:fix
# - Runs ESLint with --fix flag
# - Automatically fixes formatting and simple issues

# Format code with Prettier
pnpm format
# - Runs Prettier on all files
# - Uses .prettierrc configuration

# Build for production
pnpm build
# - Builds client (Vite) → dist/public/
# - Builds server (esbuild) → dist/index.js
# - Takes ~10-60 seconds

# Start production server
pnpm start
# - Sets NODE_ENV=production
# - Runs dist/index.js
# - Requires pnpm build first

# Preview production build
pnpm preview
# - Runs Vite preview server
# - Tests production build locally
```

### Command Order & Dependencies
- **Before making changes:** Run `pnpm check` and `pnpm lint` to understand baseline errors
- **After code changes:** Run `pnpm lint` → `pnpm check` → `pnpm dev` (to test)
- **Before PR:** Run `pnpm lint:fix` → `pnpm format` → `pnpm check`

### Known Pre-existing Issues
Do NOT fix these unless specifically tasked:
- **TypeScript error:** `client/src/pages/Home.tsx:39` - Unclosed `<a>` tag
- **Lint warnings:** 15+ warnings for react-refresh/only-export-components, @typescript-eslint/no-explicit-any
- **Unused import:** `vite.config.ts` imports 'fs' but doesn't use it

## Build & Validation

### Type Checking
```bash
pnpm check
```
- Runs `tsc --noEmit`
- Checks client/, server/, shared/
- Expected to show 1 error in Home.tsx (pre-existing)
- Takes ~5-15 seconds

### Linting
```bash
pnpm lint
```
- Uses ESLint with TypeScript and React plugins
- Expected to show 15+ warnings (pre-existing)
- Fails with exit code 1 if errors found
- Takes ~5-15 seconds

### Build Process
```bash
pnpm build
```
Two-step build:
1. **Client build (Vite):** Bundles React app → `dist/public/`
2. **Server build (esbuild):** Bundles Express server → `dist/index.js`
- Takes ~10-60 seconds
- Output directory: `dist/`

### Testing
- No test suite currently configured
- Skip adding tests unless specifically required

## Design System: Organic Authenticity

### Color Palette (CSS Variables in `client/src/index.css`)
- **Primary (Terracotta):** `--primary: #c85a3a`
- **Secondary (Sage):** `--secondary: #a8d5ba`
- **Accent (Forest Green):** `--accent: #2d5a3d`
- **Background (Sand/Cream):** `--background: #f9f7f4`

### Typography
- **Headlines:** Cormorant Garamond (elegant)
- **Body:** Lato (warm, readable)

### Spacing & Style
- Generous whitespace with organic rhythm
- Gentle, natural, accessible transitions
- Genuine, human-centered, crafted feel (not corporate)

## Path Aliases

TypeScript path mapping (tsconfig.json):
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

Example imports:
```typescript
import Button from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import type { SharedType } from '@shared/types';
```

## Common Workflows

### Adding a New Page
1. Create component in `client/src/pages/NewPage.tsx`
2. Import in `client/src/App.tsx`
3. Add route: `<Route path="/new-page" component={NewPage} />`
4. Update navigation links

### Adding a shadcn/ui Component
- Components are in `client/src/components/ui/`
- Follow existing patterns for variant props
- Use `cn()` utility for className merging

### Modifying Styles
- Global styles: `client/src/index.css`
- Component styles: Tailwind classes + CSS variables
- Preserve "Organic Authenticity" design philosophy

## Validation & CI

Currently no GitHub Actions workflows or CI pipelines configured.

**Pre-commit validation steps:**
1. Run `pnpm lint:fix` to auto-fix issues
2. Run `pnpm format` to format code
3. Run `pnpm check` to validate types (expect 1 pre-existing error)
4. Test in browser: `pnpm dev` and visit http://localhost:3000

## Important Notes

### Package Management
- **Always use pnpm**, never npm or yarn
- **wouter version MUST be 3.7.1** (patch file dependency)
- If installing new packages, be aware of peer dependency warnings

### Code Style
- Follow existing patterns in the codebase
- Use TypeScript for all new files
- Prefer functional components with hooks
- Use Prettier formatting (run `pnpm format`)

### Performance
- Images should be in `client/public/images/`
- Optimize images for web delivery
- Use lazy loading for images when appropriate

### Accessibility
- WCAG compliant approach
- Use semantic HTML
- Ensure keyboard navigation works

## Troubleshooting

### pnpm install fails
- Check wouter version in package.json (must be 3.7.1)
- Remove pnpm-lock.yaml and retry
- Ensure pnpm is installed globally

### Dev server won't start
- Check if port 3000 is available (or let Vite find next port)
- Ensure dependencies are installed
- Check for TypeScript errors

### Build fails
- Run `pnpm check` first to find type errors
- Run `pnpm lint` to find code issues
- Ensure all dependencies are installed

## Trust These Instructions

These instructions have been validated by running commands and exploring the codebase. Only search for additional information if:
- These instructions are incomplete for your specific task
- You encounter errors not documented here
- You're working on a feature outside the documented structure

When in doubt, refer to the README.md for project vision and setup guide.
