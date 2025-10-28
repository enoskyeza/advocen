# Advocen Initiative Website

A modern, responsive website for Advocen Initiative - a Uganda-based research and advocacy organization.

## About Advocen Initiative

### Who We Are

Advocen Initiative is a Uganda-based research and advocacy organization dedicated to advancing evidence-based policy, health law, and inclusive development.

We unite researchers, policy experts, and advocates who believe that sustainable progress begins with credible data, informed debate, and equitable governance.

Our work bridges research and real-world impact — supporting government institutions, civil society, and the private sector to make informed policy decisions that strengthen health systems, empower communities, and promote sustainable use of natural resources.

---

### Our Vision

A just, healthy, and prosperous Uganda where policies are guided by evidence, human rights are protected, and sustainable development benefits every citizen.

---

### Our Mission

To generate high-quality research and advocate for policies that strengthen governance, health systems, and community wellbeing across Uganda's key sectors — including economic development, education, human rights, energy, natural resources, and environmental protection.

Through collaboration with policymakers, researchers, and development partners, we transform data into action and evidence into lasting impact.

---

### What We Do

We conduct research, policy analysis, and advocacy in the following areas:

- **Health Law & Policy**: Advancing equitable healthcare access and governance through evidence-based policy research on health systems, regulation, and public health law.
- **Economic Development & Policy**: Promoting inclusive and resilient economic growth through effective governance and policy reform.
- **Education & Skills Development**: Strengthening learning systems, innovation, and equitable access to quality education.
- **Human Rights & Governance**: Upholding justice, participation, and accountability in public policy and governance.
- **Private Sector Development**: Supporting entrepreneurship, innovation, and sustainable business ecosystems.
- **Energy, Natural Resources & Environment**: Encouraging responsible resource use, clean energy transitions, and climate resilience.

---

### Our Approach

- **Evidence-Based**: Every position we take is grounded in research and reliable data.
- **Collaborative**: We engage governments, academia, and communities to co-create solutions.
- **Advocacy-Focused**: We ensure that research drives policy reform and measurable change.
- **Health-Centered**: We integrate public health and wellbeing into all aspects of development.
- **Inclusive**: Our work promotes equity, participation, and empowerment for all Ugandans.

---

### Our Values

- **Integrity**: We uphold transparency and accountability in all our work.
- **Equity**: We champion fairness and access to opportunity and care.
- **Innovation**: We embrace new ideas and technology to enhance policy impact.
- **Empowerment**: We strengthen voices and systems that advocate for positive change.

---

### Join Us

At Advocen Initiative, we believe policy can save lives, uplift communities, and protect the planet.
Whether you're a policymaker, researcher, student, or advocate, your contribution matters.
Together, we can shape a Uganda where progress is informed, equitable, and sustainable.

---

## Tech Stack

This website is built with:

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **Lucide React** - Beautiful icon library
- **Custom CSS** - For additional styling flexibility

### Color Palette

- **Primary (Navy Blue)**: `#0a3d62` - Professional, trustworthy, authoritative
- **Accent (Beige)**: `#f5f5dc` - Warm, accessible, neutral
- **Gold**: `#d4af37` - Excellence, achievement, quality
- **Teal**: `#2c7a7b` - Growth, healing, balance

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Move assets to public folder (if not already done):
```bash
# Create public directory
mkdir -p public

# Copy logo and favicons
cp logo-light.png public/
cp favicon_io/* public/
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
advocen/
├── public/              # Static assets
│   ├── logo-light.png
│   ├── favicon.ico
│   └── ...favicons
├── src/
│   ├── components/      # React components
│   │   └── MaintenancePage.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template with SEO
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind + color palette
└── postcss.config.js    # PostCSS configuration
```

## Features

- ✅ Fully responsive design
- ✅ Modern maintenance page
- ✅ SEO optimized with meta tags
- ✅ Custom color palette
- ✅ Smooth animations
- ✅ Accessible components
- ✅ Fast loading with Vite
- ✅ Custom CSS support alongside Tailwind

## Deployment

This site can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project and deploy the `dist` folder.

## License

© 2024 Advocen Initiative. All rights reserved.

---

**Contact**: info@advoceninitiative.org
