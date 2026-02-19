# Rainbow Construction - Next.js Website

A modern, secure Next.js 14 website for Rainbow Construction, migrated from a static HTML/CSS/JS site.

## Security Features Implemented

This project includes comprehensive security measures:

### 1. HTTP Security Headers (via `next.config.js`)
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-XSS-Protection: 1; mode=block** - Enables browser XSS filtering
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information
- **Strict-Transport-Security (HSTS)** - Forces HTTPS connections
- **Content-Security-Policy (CSP)** - Restricts resource loading to trusted sources
- **Permissions-Policy** - Disables unnecessary browser features

### 2. React/Next.js Security
- **TypeScript** - Type safety prevents many common bugs
- **React Strict Mode** - Highlights potential problems
- **Automatic XSS Protection** - React escapes values in JSX by default
- **Next.js Image Component** - Prevents layout shift attacks, optimizes images
- **No `dangerouslySetInnerHTML`** - All content is properly escaped

### 3. External Links Security
- All external links use `rel="noopener noreferrer"` to prevent tabnabbing attacks

### 4. Input Validation
- No user input forms that could be exploited
- If forms are added later, use proper validation libraries (e.g., Zod)

### 5. Dependencies
- Using latest stable versions of Next.js, React, and TypeScript
- Run `npm audit` regularly to check for vulnerabilities

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Navigate to the nextjs folder
cd nextjs

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Important: Copy Logo File

Before running the project, copy the `logo.jpeg` file to the `public` folder:

```bash
# From the parent directory
copy ..\logo.jpeg public\logo.jpeg
```

Or manually copy `logo.jpeg` from the original project to `nextjs/public/logo.jpeg`.

## Project Structure

```
nextjs/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Showcase.tsx     # Project showcase
│   ├── Services.tsx     # Services section
│   ├── BrandStatement.tsx
│   ├── Contact.tsx      # Contact information
│   ├── Location.tsx     # QR/Location section
│   └── Footer.tsx       # Footer
├── public/
│   └── logo.jpeg        # Company logo (copy from original)
├── next.config.js       # Next.js config with security headers
├── package.json
├── tsconfig.json
└── .eslintrc.json
```

## Security Checklist for Production

Before deploying to production, ensure:

- [ ] HTTPS is enabled on your hosting platform
- [ ] Environment variables are properly secured
- [ ] `npm audit` shows no high/critical vulnerabilities
- [ ] CSP headers are tested and working correctly
- [ ] All API keys (if any) are stored in environment variables
- [ ] Regular dependency updates are scheduled

## Performance Features

- **Next.js Image Optimization** - Automatic image optimization for external images
- **Font Optimization** - Google Fonts loaded via Next.js font system
- **Code Splitting** - Automatic code splitting by page
- **Prefetching** - Automatic prefetching of linked pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

Copyright © 2026 Rainbow Construction Pvt. Ltd. All rights reserved.
