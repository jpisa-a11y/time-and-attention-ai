# File Manifest: Time & Attention AI Website

## Project Overview

Complete React + TypeScript website showcasing Joseph Pisa's "pay it forward" AI vision with a single-page design and custom design system.

## Directory Structure

### Root Configuration Files

```
package.json                 # Project dependencies and scripts
tsconfig.json               # TypeScript configuration
tsconfig.node.json          # TypeScript Node configuration
vite.config.ts              # Vite build configuration
components.json             # shadcn/ui component configuration
.gitignore                  # Git ignore rules
.prettierrc                  # Code formatting rules
.prettierignore              # Prettier ignore rules
README.md                    # Project documentation
SETUP_GUIDE.md              # Detailed setup and development guide
FILE_MANIFEST.md             # This file
ideas.md                    # Design brainstorm and vision document
```

### Client Directory: `/client`

#### HTML Entry Point

```
client/index.html           # Main HTML file with Google Fonts imports
```

#### Public Assets: `/client/public`

```
client/public/images/
  ├── hero-ai-liberation.jpg           # Hero section illustration
  ├── pay-it-forward-cycle.jpg         # Vision cycle illustration
  ├── ai-mentor-connection.jpg         # AI mentorship illustration
  └── time-reclaimed.jpg               # Benefits illustration
```

#### Source Code: `/client/src`

##### Main Application Files

```
client/src/
  ├── main.tsx              # React entry point
  ├── App.tsx               # Main router and layout wrapper
  ├── index.css             # Global styles and design system
  └── const.ts              # Client constants
```

##### Pages: `/client/src/pages`

```
client/src/pages/
  ├── Home.tsx              # Homepage with hero, vision, mission
  └── NotFound.tsx          # 404 page
```

##### Components: `/client/src/components`

```
client/src/components/
  ├── ErrorBoundary.tsx     # Error boundary wrapper
  ├── ManusDialog.tsx       # Dialog component
  ├── Map.tsx               # Google Maps integration
  └── ui/                   # shadcn/ui components (53 files)
      ├── accordion.tsx
      ├── alert-dialog.tsx
      ├── alert.tsx
      ├── aspect-ratio.tsx
      ├── avatar.tsx
      ├── badge.tsx
      ├── breadcrumb.tsx
      ├── button-group.tsx
      ├── button.tsx
      ├── calendar.tsx
      ├── card.tsx
      ├── carousel.tsx
      ├── chart.tsx
      ├── checkbox.tsx
      ├── collapsible.tsx
      ├── command.tsx
      ├── context-menu.tsx
      ├── dialog.tsx
      ├── drawer.tsx
      ├── dropdown-menu.tsx
      ├── empty.tsx
      ├── field.tsx
      ├── form.tsx
      ├── hover-card.tsx
      ├── input-group.tsx
      ├── input-otp.tsx
      ├── input.tsx
      ├── item.tsx
      ├── kbd.tsx
      ├── label.tsx
      ├── menubar.tsx
      ├── navigation-menu.tsx
      ├── pagination.tsx
      ├── popover.tsx
      ├── progress.tsx
      ├── radio-group.tsx
      ├── resizable.tsx
      ├── scroll-area.tsx
      ├── select.tsx
      ├── separator.tsx
      ├── sheet.tsx
      ├── sidebar.tsx
      ├── skeleton.tsx
      ├── slider.tsx
      ├── sonner.tsx
      ├── spinner.tsx
      ├── switch.tsx
      ├── table.tsx
      ├── tabs.tsx
      ├── textarea.tsx
      ├── toggle-group.tsx
      ├── toggle.tsx
      └── tooltip.tsx
```

##### Contexts: `/client/src/contexts`

```
client/src/contexts/
  └── ThemeContext.tsx      # Light/dark theme management
```

##### Hooks: `/client/src/hooks`

```
client/src/hooks/
  ├── useComposition.ts     # Composition hook utility
  ├── useMobile.tsx         # Mobile detection hook
  └── usePersistFn.ts       # Persistent function reference hook
```

##### Utilities: `/client/src/lib`

```
client/src/lib/
  └── utils.ts              # Utility functions (cn, classname merging)
```

### Server Directory: `/server`

```
server/
  └── index.ts              # Express server for production
```

### Shared Directory: `/shared`

```
shared/
  └── const.ts              # Shared constants
```

### Patches Directory: `/patches`

```
patches/
  └── wouter@3.7.1.patch    # Custom patch for wouter routing library
```

## Key Files Explained

### Setup Guide: `SETUP_GUIDE.md`

- Comprehensive development guide
- Installation instructions
- Deployment workflows
- Customization tutorials
- Troubleshooting tips
- Code style guidelines

### Design Brainstorm: `ideas.md`

- Design system exploration
- Three design movement options analyzed
- Selected design direction: Organic Authenticity with Purpose
- Color philosophy and typography decisions
- Content pillars and messaging strategy

### Design System: `client/src/index.css`

- Tailwind CSS 4 configuration
- Custom CSS variables for colors
- Typography system setup
- Responsive container utilities
- Theme variables (light/dark)
- Color palette: Terracotta, Sage, Forest Green, Sand

### Router: `client/src/App.tsx`

- Wouter-based client-side routing
- Main route: `/` (homepage)
- ThemeProvider wrapper
- Error boundary
- Toast notifications (Sonner)

### Homepage: `client/src/pages/Home.tsx`

- Hero section with custom illustration
- Joseph Pisa's vision explanation
- Problem statement
- AI + Human partnership section
- Time reclaimed benefits
- Mission & values
- Beautiful paradox explanation
- Call-to-action
- Footer with links

## Technology Stack

### Frontend Framework

- React 19.2.1
- TypeScript 5.6.3
- Vite 7.1.7 (build tool)

### Styling

- Tailwind CSS 4.1.14
- PostCSS 8.4.47
- Custom CSS variables

### Routing

- Wouter 3.3.5 (lightweight client-side router)

### UI Components

- shadcn/ui (Radix UI primitives)
- 53 pre-built accessible components

### Icons & Graphics

- Lucide React 0.453.0 (icon library)
- Custom watercolor illustrations (AI-generated)

### Animations

- Framer Motion 12.23.22

### Forms & Validation

- React Hook Form 7.64.0
- Zod 4.1.12 (schema validation)

### Utilities

- Tailwind Merge 3.3.1
- Class Variance Authority 0.7.1
- clsx 2.1.1

### Package Manager

- pnpm 10.15.1 (with patches support)

### Development Tools

- TypeScript
- Prettier 3.6.2
- ESBuild 0.25.0
- pnpm 10.15.1

## Build & Deployment

### Development

```bash
pnpm dev          # Start dev server on port 3000
```

### Production

```bash
pnpm build        # Build for production
pnpm start        # Start production server
pnpm preview      # Preview production build
```

### Code Quality

```bash
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## Design System Details

### Colors (OKLCH Format)

- Primary (Terracotta): #c85a3a
- Secondary (Sage): #a8d5ba
- Accent (Forest Green): #2d5a3d
- Background (Sand): #e8dcc8 / #f9f7f4

### Typography

- Headlines: Cormorant Garamond (serif)
- Body: Lato (sans-serif)
- Loaded via Google Fonts

### Spacing System

- Base unit: 1rem (16px)
- Responsive padding: 1rem (mobile) → 1.5rem (tablet) → 2rem (desktop)
- Generous whitespace for organic feel

### Border Radius

- Small: calc(var(--radius) - 4px)
- Medium: calc(var(--radius) - 2px)
- Large: var(--radius)
- XL: calc(var(--radius) + 4px)

## Custom Illustrations

All illustrations are AI-generated watercolor style matching the Organic Authenticity design system:

1. **hero-ai-liberation.jpg** - Person reclaiming time with AI assistance
2. **pay-it-forward-cycle.jpg** - Circular flow of helping others
3. **ai-mentor-connection.jpg** - Human and AI working together
4. **time-reclaimed.jpg** - Benefits of freed-up time

## Content Structure

### Homepage Sections

1. Navigation bar (sticky)
2. Hero section
3. Problem statement (3 challenges)
4. Joseph Pisa's vision
5. AI + Human partnership
6. Time reclaimed benefits
7. Mission & values
8. The beautiful paradox
9. Call-to-action
10. Footer

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible layouts using Tailwind grid and flex
- Responsive images with proper aspect ratios
- Touch-friendly interactive elements

## Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliance
- Alt text on all images
- Form labels and validation

## Performance Optimizations

- Image optimization (WebP support)
- Code splitting via Vite
- Lazy loading for images
- Minimal CSS with Tailwind
- Efficient component rendering
- No external tracking (privacy-first)

## SEO Considerations

- Semantic HTML
- Meta tags in index.html
- Descriptive page titles
- Proper heading hierarchy
- Image alt text
- Mobile responsive design
- Fast load times

## Future Enhancement Opportunities

- [ ] Success stories testimonial carousel
- [ ] Interactive application status tracker
- [ ] Mentor blog with financial wellness insights
- [ ] Contact a mentor form with scheduling
- [ ] Newsletter signup integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced accessibility audit
- [ ] Analytics integration
- [ ] Contact form backend integration

## Git History

All development work is tracked in git with meaningful commit messages documenting:

- Initial project setup
- Design system implementation
- Homepage development
- How It Works page
- Mentors page
- Bug fixes and routing corrections
- README and documentation

## Repository Information

- **Owner**: jpisa-a11y
- **Repository**: time-and-attention-ai
- **URL**: https://github.com/jpisa-a11y/time-and-attention-ai
- **Visibility**: Public
- **License**: MIT

---

**Last Updated**: January 7, 2026
**Project Status**: Complete and deployed
**Maintenance**: Ready for future enhancements and customization
