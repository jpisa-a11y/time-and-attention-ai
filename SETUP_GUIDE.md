# Setup Guide: Time & Attention AI Website

## Quick Start

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/jpisa-a11y/time-and-attention-ai.git
cd time-and-attention-ai
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Start development server**
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

## Development Workflow

### Available Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Start production server
pnpm start

# Type check without emitting
pnpm check

# Format code with Prettier
pnpm format
```

## Project Structure Overview

```
time-and-attention-ai/
├── client/                          # Frontend application
│   ├── public/
│   │   └── images/                 # Custom illustrations and portraits
│   ├── src/
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.tsx            # Homepage
│   │   │   ├── HowItWorks.tsx       # How It Works page
│   │   │   ├── Mentors.tsx          # Mentors page
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── components/             # Reusable components
│   │   │   └── ui/                 # shadcn/ui components
│   │   ├── contexts/               # React contexts
│   │   ├── lib/                    # Utilities
│   │   ├── App.tsx                 # Main router
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Global styles
│   └── index.html                  # HTML template
├── server/
│   └── index.ts                    # Express server
├── shared/
│   └── const.ts                    # Shared constants
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.js              # Tailwind config
├── README.md                        # Project documentation
└── FILE_MANIFEST.md                # Detailed file listing
```

## Design System

### Colors
The site uses an "Organic Authenticity" color palette:
- **Primary (Terracotta)**: #c85a3a
- **Secondary (Sage)**: #a8d5ba
- **Accent (Forest Green)**: #2d5a3d
- **Background (Sand)**: #e8dcc8 / #f9f7f4

Edit colors in `client/src/index.css`:
```css
:root {
  --primary: var(--color-blue-700);
  /* ... other color variables ... */
}
```

### Typography
- **Headlines**: Cormorant Garamond (serif)
- **Body**: Lato (sans-serif)

Fonts are loaded from Google Fonts in `client/index.html`

### Spacing & Layout
- Mobile-first responsive design
- Responsive container with adaptive padding
- Generous whitespace for organic feel

## Adding New Features

### Creating a New Page

1. Create a new file in `client/src/pages/YourPage.tsx`:
```tsx
export default function YourPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Your content */}
    </div>
  );
}
```

2. Import in `client/src/App.tsx`:
```tsx
import YourPage from "./pages/YourPage";
```

3. Add route in Router function:
```tsx
<Route path={"/your-page"} component={YourPage} />
```

4. Update navigation links in pages

### Adding UI Components

The project includes 50+ pre-built shadcn/ui components. Import them as needed:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
```

See `client/src/components/ui/` for available components.

### Styling Components

Use Tailwind CSS utility classes:

```tsx
<div className="flex gap-4 p-6 rounded-lg bg-white border border-gray-200">
  <p className="text-lg font-semibold text-gray-900">Hello</p>
</div>
```

For custom styles, edit `client/src/index.css` and use CSS variables:

```css
.custom-class {
  color: var(--primary);
  background: var(--background);
}
```

## Images & Assets

### Adding Images

1. Place image in `client/public/images/`
2. Reference with absolute path:
```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

### Image Optimization

- Use WebP format when possible
- Optimize file size before adding
- Provide descriptive alt text for accessibility
- Use responsive image sizes for different screens

## Customization Guide

### Changing Brand Colors

Edit `client/src/index.css`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... */
}
```

### Changing Fonts

Edit `client/index.html` to import different Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css` to use the new font.

### Modifying Content

Edit the respective page files:
- Homepage: `client/src/pages/Home.tsx`
- How It Works: `client/src/pages/HowItWorks.tsx`
- Mentors: `client/src/pages/Mentors.tsx`

## Deployment

### Build for Production

```bash
pnpm build
```

This creates a `dist/` directory with optimized production files.

### Deploy to Manus
Click the "Publish" button in the Manus UI after creating a checkpoint.

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
Configure in `package.json` and push to `gh-pages` branch.

## Troubleshooting

### Dev Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
pnpm dev
```

### TypeScript Errors
```bash
# Run type check
pnpm check

# Fix errors in the reported files
```

### Build Errors
```bash
# Check for syntax errors
pnpm format

# Rebuild
pnpm build
```

### Images Not Loading
- Verify image path is correct (absolute path starting with `/`)
- Check image file exists in `client/public/images/`
- Ensure image format is supported (jpg, png, webp, svg)

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Lazy Load**: Use `loading="lazy"` on images below the fold
3. **Code Splitting**: Vite handles this automatically
4. **Minification**: Enabled by default in production build
5. **Caching**: Static assets are cached aggressively

## Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators are visible
- [ ] Form labels are properly associated
- [ ] Heading hierarchy is logical
- [ ] No content is conveyed by color alone

## Git Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Code Style

The project uses Prettier for code formatting. Run before committing:

```bash
pnpm format
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Wouter Routing](https://github.com/molefrog/wouter)

## Support & Questions

For issues or questions:
1. Check the README.md
2. Review FILE_MANIFEST.md for file structure
3. Open a GitHub issue with details
4. Check existing issues for similar problems

## License

MIT License - See LICENSE file for details

---

**Happy coding! Build something amazing with this foundation.**
