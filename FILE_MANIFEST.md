# File Manifest: Time & Attention AI Website

## Project Overview
Complete React + TypeScript website showcasing Joseph Pisa's "pay it forward" AI vision with three main pages and custom design system.

## Directory Structure

### Root Configuration Files
```
package.json                 # Project dependencies and scripts
tsconfig.json               # TypeScript configuration
tailwind.config.js          # Tailwind CSS configuration
postcss.config.js           # PostCSS configuration
.gitignore                  # Git ignore rules
.prettierrc                  # Code formatting rules
.prettierignore              # Prettier ignore rules
README.md                    # Project documentation
FILE_MANIFEST.md             # This file
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
  ├── time-reclaimed.jpg               # Benefits illustration
  ├── step1-document-upload.jpg        # How It Works step 1
  ├── step2-ai-analysis.jpg            # How It Works step 2
  ├── step3-human-review.jpg           # How It Works step 3
  ├── step4-approval.jpg               # How It Works step 4
  ├── step5-closing.jpg                # How It Works step 5
  ├── mentor-sarah-chen.jpg            # Sarah Chen portrait
  ├── mentor-james-rodriguez.jpg       # James Rodriguez portrait
  ├── mentor-priya-patel.jpg           # Priya Patel portrait
  └── mentor-michael-torres.jpg        # Michael Torres portrait
```

#### Source Code: `/client/src`

##### Main Application Files
```
client/src/
  ├── main.tsx              # React entry point
  ├── App.tsx               # Main router and layout wrapper
  └── index.css             # Global styles and design system
```

##### Pages: `/client/src/pages`
```
client/src/pages/
  ├── Home.tsx              # Homepage with hero, vision, mission
  ├── HowItWorks.tsx        # Interactive 5-step qualification timeline
  ├── Mentors.tsx           # Licensed professionals spotlight
  └── NotFound.tsx          # 404 page
```

##### Components: `/client/src/components`
```
client/src/components/
  ├── ErrorBoundary.tsx     # Error boundary wrapper
  ├── ManusDialog.tsx       # Dialog component
  ├── Map.tsx               # Google Maps integration
  └── ui/                   # shadcn/ui components (50+ files)
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
      ├── label.tsx
      ├── menubar.tsx
      ├── navigation-menu.tsx
      ├── pagination.tsx
      ├── popover.tsx
      ├── progress.tsx
      ├── radio-group.tsx
      ├── scroll-area.tsx
      ├── select.tsx
      ├── separator.tsx
      ├── sheet.tsx
      ├── sidebar.tsx
      ├── skeleton.tsx
      ├── slider.tsx
      ├── sonner.tsx
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

## Key Files Explained

### Design System: `client/src/index.css`
- Tailwind CSS 4 configuration
- Custom CSS variables for colors
- Typography system setup
- Responsive container utilities
- Theme variables (light/dark)
- Color palette: Terracotta, Sage, Forest Green, Sand

### Router: `client/src/App.tsx`
- Wouter-based client-side routing
- Three main routes: `/`, `/how-it-works`, `/mentors`
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

### How It Works: `client/src/pages/HowItWorks.tsx`
- 5-step interactive timeline
- Expandable step cards
- Overview stats section
- Key principles explanation
- FAQ section
- Fully responsive design

### Mentors: `client/src/pages/Mentors.tsx`
- Four licensed professional profiles
  - Sarah Chen (Mortgage Banker)
  - James Rodriguez (Financial Planner)
  - Priya Patel (Attorney)
  - Michael Torres (Credit Counselor)
- Professional portraits
- Credentials and experience
- Expertise areas
- Personal philosophies
- Team philosophy section
- Key values highlighting

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
- 50+ pre-built accessible components

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

### Development Tools
- TypeScript
- Prettier 3.6.2
- ESBuild 0.25.0

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
5. **step1-document-upload.jpg** - Document upload process
6. **step2-ai-analysis.jpg** - AI analyzing documents
7. **step3-human-review.jpg** - Human expert review
8. **step4-approval.jpg** - Fast approval notification
9. **step5-closing.jpg** - Smooth closing process
10. **mentor-sarah-chen.jpg** - Mortgage banker portrait
11. **mentor-james-rodriguez.jpg** - Financial planner portrait
12. **mentor-priya-patel.jpg** - Attorney portrait
13. **mentor-michael-torres.jpg** - Credit counselor portrait

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

### How It Works Sections
1. Navigation bar
2. Hero section
3. Why human oversight matters
4. Interactive 5-step timeline
5. Overview stats
6. Key principles
7. FAQ
8. Footer

### Mentors Sections
1. Navigation bar
2. Hero section
3. Why human expertise matters (4 benefits)
4. Mentor spotlight cards (4 mentors)
5. Team philosophy
6. Key values
7. Call-to-action
8. Footer

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
