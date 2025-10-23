# Project Structure

This document explains the organization and purpose of each file and directory in the Ringbahn Rent Analysis microsite.

## Root Directory

```
ringbahn-rent/
├── .github/                    # GitHub configuration
│   └── workflows/
│       └── pages.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets served directly
│   ├── content/
│   │   └── rent_analysis.md   # Main content file (markdown)
│   ├── Nebenkostenabrechnung 2024.pdf  # PDF document
│   └── vite.svg              # Vite logo (default)
├── src/                       # Source code
│   ├── components/           # React components
│   ├── contexts/            # React contexts
│   ├── lib/                 # Utility functions
│   ├── assets/              # Static assets (images, icons)
│   ├── App.tsx              # Main application component
│   ├── App.css              # App-specific styles (unused)
│   ├── index.css            # Global styles with Tailwind
│   └── main.tsx             # Application entry point
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
└── vite.config.ts           # Vite build configuration
```

## Directory Details

### `/src/components/`
React components for the UI:

- **Header.tsx** - Sticky header with title and theme toggle
- **Footer.tsx** - Simple footer with last updated date
- **ThemeToggle.tsx** - Dark/light mode switcher
- **TableOfContents.tsx** - Auto-generated TOC with smooth scrolling
- **MarkdownRenderer.tsx** - Custom markdown renderer with enhancements
- **Callout.tsx** - Callout component for highlighting information

### `/src/contexts/`
React contexts for state management:

- **ThemeContext.tsx** - Theme provider and hook for dark mode

### `/src/lib/`
Utility functions and helpers:

- **markdown-utils.ts** - Markdown processing utilities
- **theme.ts** - Theme management utilities
- **format.ts** - Number and currency formatting helpers

### `/public/`
Static assets served directly by the web server:

- **content/rent_analysis.md** - Main content file (your rent analysis)
- **Nebenkostenabrechnung 2024.pdf** - PDF document linked in content

### `/.github/workflows/`
GitHub Actions configuration:

- **pages.yml** - Automated deployment to GitHub Pages

## Configuration Files

### Build & Development
- **vite.config.ts** - Vite configuration with GitHub Pages base path
- **package.json** - Dependencies, scripts, and project metadata
- **tsconfig.json** - TypeScript compiler configuration

### Styling
- **tailwind.config.js** - Tailwind CSS configuration with custom typography
- **postcss.config.js** - PostCSS configuration for Tailwind processing
- **src/index.css** - Global styles and Tailwind imports

### Code Quality
- **eslint.config.js** - ESLint rules for code quality
- **.gitignore** - Files and directories to ignore in Git

## Content Management

### Updating Content
1. Edit `public/content/rent_analysis.md` for rent information
2. Replace `public/Nebenkostenabrechnung 2024.pdf` if needed
3. Commit and push changes

### Adding New Content
- Add new markdown files to `public/content/`
- Update links in existing content
- Ensure PDFs are in `public/` directory

## File Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Utilities**: kebab-case (e.g., `markdown-utils.ts`)
- **Content**: kebab-case (e.g., `rent_analysis.md`)
- **Config**: kebab-case (e.g., `tailwind.config.js`)

## Best Practices

1. **Components**: Keep under 200 lines, single responsibility
2. **Functions**: Keep under 20 lines, add TypeScript types and docstrings
3. **Styling**: Use Tailwind utility classes, avoid custom CSS
4. **Content**: Use semantic markdown, leverage auto-detected callouts
5. **Git**: Commit frequently, use descriptive commit messages
