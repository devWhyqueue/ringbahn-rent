# Ringbahn Rent Analysis

A beautiful, mobile-first microsite for displaying rent and cost information for flatmates. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📱 **Mobile-first responsive design** - Optimized for mobile viewing and sharing
- 🌙 **Dark/Light mode** - Respects system preference with manual toggle
- 📑 **Table of Contents** - Auto-generated from markdown headings with smooth scrolling
- 🎨 **Beautiful typography** - Clean, readable design with Notion-style aesthetics
- 🔗 **Copy section links** - Easy sharing of specific sections
- 📄 **Print-friendly** - Clean A4 PDF export with print styles
- ⚡ **Fast loading** - Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Icons**: Lucide React
- **Markdown**: react-markdown with remark-gfm
- **Routing**: React Router (hash routing for GitHub Pages)
- **Deployment**: GitHub Pages with GitHub Actions

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo-url>
   cd ringbahn-rent
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: http://localhost:5173

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Content Management

### Updating the Rent Analysis

To update the rent information:

1. **Edit the markdown file**: `public/content/rent_analysis.md`
2. **Update PDF if needed**: Replace `public/Nebenkostenabrechnung 2024.pdf`
3. **Update PDF link**: Ensure the link in markdown points to the correct PDF path

### Markdown Features

The site supports enhanced markdown with:

- **Callouts**: Auto-detected and styled
  - `Note:` - Blue callout
  - `Comment:` - Green callout  
  - `Practical tip:` - Yellow callout
  - `Legal note:` - Orange callout
  - `Implications:` - Purple callout

- **Number highlighting**: Currency (€), energy (kWh), volume (m³), and percentages are automatically highlighted

- **Pending sections**: "Things that need clarification" and "Pending actions" sections get special styling

### Customization

#### Styling
- Edit `src/index.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update component styles in individual component files

#### Content Structure
- Update `src/App.tsx` to change the main layout
- Modify `src/components/Header.tsx` for title/subtitle changes
- Customize `src/components/Footer.tsx` for footer content

## Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Update rent analysis"
   git push origin main
   ```

3. **Automatic deployment**: The GitHub Action will build and deploy automatically

The site will be available at: `https://<username>.github.io/ringbahn-rent/`

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy dist/ folder** to your hosting provider

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Sticky header with theme toggle
│   ├── Footer.tsx      # Simple footer
│   ├── ThemeToggle.tsx # Dark/light mode switcher
│   ├── TableOfContents.tsx # Auto-generated TOC
│   └── MarkdownRenderer.tsx # Custom markdown renderer
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── lib/               # Utility functions
│   ├── markdown-utils.ts # Markdown processing
│   ├── theme.ts       # Theme utilities
│   └── format.ts      # Number/currency formatting
└── App.tsx            # Main application component

public/
├── content/
│   └── rent_analysis.md # Main content file
└── Nebenkostenabrechnung 2024.pdf # PDF document

.github/workflows/
└── pages.yml          # GitHub Actions deployment
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **Functions**: Max 20 lines, with TypeScript types and docstrings
- **Files**: Max 200 lines
- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS utility classes

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Implemented

✅ Mobile-first responsive design  
✅ Dark/Light mode with system preference detection  
✅ Auto-generated table of contents  
✅ Smooth scrolling navigation  
✅ Copy section links  
✅ Enhanced markdown rendering with callouts  
✅ Number highlighting (currency, energy, volume, percentages)  
✅ Print-friendly styles  
✅ GitHub Pages deployment  
✅ TypeScript with strict typing  
✅ Tailwind CSS styling  
✅ React Router with hash routing  

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse score target: ≥90 across all metrics
- Optimized bundle size with Vite
- Lazy loading and code splitting
- Responsive images and assets

## License

MIT License - feel free to use this template for your own rent analysis or similar projects.