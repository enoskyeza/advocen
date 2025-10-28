# Quick Start Guide - Advocen Initiative Website

## Setup Instructions

Follow these steps to get your website running:

### Step 1: Set Up Assets

Run the setup script to copy all assets to the public folder:

```bash
chmod +x setup-assets.sh
./setup-assets.sh
```

Or manually copy the files:

```bash
mkdir -p public
cp logo-light.png public/
cp favicon_io/* public/
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
- All development dependencies

### Step 3: Start Development Server

```bash
npm run dev
```

Your website will open at `http://localhost:3000`

## What's Included

✅ **Maintenance Page** - Professional "Under Maintenance" page with:
  - Company logo
  - About section
  - Focus areas grid
  - Contact information
  - Social media placeholders
  - Smooth animations

✅ **Custom Color Palette**:
  - Primary (Navy): `#0a3d62`
  - Accent (Beige): `#f5f5dc`
  - Gold: `#d4af37`
  - Teal: `#2c7a7b`

✅ **SEO Optimization**:
  - Meta tags for description, keywords
  - Open Graph tags for social sharing
  - Twitter Card support
  - Proper favicon setup

✅ **Responsive Design**:
  - Mobile-first approach
  - Works on all screen sizes
  - Touch-friendly interactions

✅ **Custom CSS Support**:
  - Tailwind for utility classes
  - Custom CSS in `src/index.css` and `src/App.css`
  - Easy to extend and customize

## Next Steps

1. **Update Contact Info**: Edit social media links in `src/components/MaintenancePage.jsx`
2. **Customize Content**: Modify text and sections as needed
3. **Add Pages**: When ready, create additional components for full site
4. **Deploy**: Build with `npm run build` and deploy the `dist` folder

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Support

For questions or issues, contact: info@advoceninitiative.org

---

**Advocen Initiative** - Evidence-Based Policy • Health Law • Inclusive Development
