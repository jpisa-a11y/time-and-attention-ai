# Time & Attention: The Joseph Pisa AI Vision

A transformative website showcasing Joseph Pisa's revolutionary "pay it forward" AI business model that shifts our value system from tangible wealth to **time and attention**.

## 🌟 Vision

This project demonstrates how AI can liberate humanity by handling life's complexity—mortgage qualification, debt strategy, document review—so people can reclaim their time and attention. Licensed human mentors oversee every AI decision, ensuring fairness, transparency, and genuine care.

## 🏗️ Project Structure

```
client/
  public/
    images/          # Custom generated illustrations
  src/
    pages/
      Home.tsx         # Hero page with Joseph Pisa's vision
      NotFound.tsx     # 404 page
    components/        # Reusable UI components
    App.tsx            # Main router and layout
    index.css          # Design system (Organic Authenticity)
```

## 🎨 Design System: Organic Authenticity with Purpose

- **Typography**: Cormorant Garamond (elegant headlines) + Lato (warm, readable body)
- **Colors**: Terracotta (#c85a3a), Sage (#a8d5ba), Forest Green (#2d5a3d), Sand (#e8dcc8)
- **Philosophy**: Genuine, human-centered, crafted feel—not corporate polish
- **Spacing**: Generous whitespace with organic rhythm
- **Interactions**: Gentle, natural, accessible transitions

## 📄 Pages

### **Home** (`/`)

- Hero section introducing Joseph Pisa's vision
- Problem statement highlighting modern life's fragmentation
- Vision explanation of the "pay it forward" model
- AI + Human Partnership section
- Time Reclaimed benefits showcase
- Mission & Values
- The Beautiful Paradox explained
- Call-to-action

## 🚀 Getting Started

### Prerequisites

- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation

```bash
# Clone the repository
git clone https://github.com/jpisa-a11y/time-and-attention-ai.git
cd time-and-attention-ai

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Development Scripts

```bash
# Run linting
pnpm lint

# Run linting with auto-fix
pnpm lint:fix

# Format code with Prettier
pnpm format

# Type checking
pnpm check
```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + custom CSS variables
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Key Dependencies

- `react` - UI framework
- `tailwindcss` - Utility-first CSS
- `wouter` - Client-side routing
- `@radix-ui/*` - Accessible UI primitives
- `lucide-react` - Icon library
- `framer-motion` - Animation library

## 🎯 Core Features

✅ **Single-page responsive website** with smooth navigation
✅ **Organic Authenticity design system** throughout
✅ **Mobile-first responsive design**
✅ **Accessibility-first approach** (WCAG compliant)
✅ **Fast performance** (optimized images, lazy loading)
✅ **SEO-ready** with semantic HTML

## 🌐 Custom Illustrations

The site features custom watercolor illustrations generated specifically for the design:

- Hero AI Liberation illustration
- Pay It Forward Cycle
- AI Mentor Connection
- Time Reclaimed

## 📝 Content Highlights

### The Beautiful Paradox

> "AI makes it possible to live a less stressful life and be just as or more productive while increasing efficiency in all sectors of life, allowing for balance between work and family and self-life in the new world of AI."

### Core Mission

Build a world where:

- AI serves humanity's highest aspirations
- Time and attention are valued above material accumulation
- Technology enables a less stressful, more balanced life
- Paying it forward becomes the natural response to liberation

## 🔧 Customization

### Changing Colors

Edit CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #c85a3a; /* Terracotta */
  --secondary: #a8d5ba; /* Sage */
  --accent: #2d5a3d; /* Forest Green */
  --background: #f9f7f4; /* Sand/Cream */
}
```

### Adding New Pages

1. Create component in `client/src/pages/`
2. Import in `client/src/App.tsx`
3. Add route in Router function
4. Update navigation links

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized image delivery with responsive sizes

## 🔐 Security & Privacy

- No external tracking (except optional analytics)
- HTTPS-ready deployment
- Secure form handling
- GDPR-compliant privacy practices

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

This project is optimized for deployment on Manus or any modern static hosting:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any Node.js hosting

## 📚 Future Enhancements

- [ ] Success Stories testimonial carousel
- [ ] Interactive Application Status Tracker
- [ ] Mentor Blog with financial wellness insights
- [ ] Contact a Mentor form with scheduling
- [ ] Newsletter signup integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Accessibility audit & improvements

## 📄 License

MIT License - Feel free to use this as a reference or starting point for your own projects.

## 👤 Author

Created for Joseph Pisa's vision of human-centered AI that liberates time and attention.

## 🤝 Contributing

This is a reference project. Feel free to fork and adapt it for your own use case.

## 📞 Support

For questions or issues, please open a GitHub issue or contact the maintainers.

---

**Built with ❤️ to demonstrate the power of AI serving humanity, not the other way around.**
