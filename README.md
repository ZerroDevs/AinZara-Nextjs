# AinZara Aluminum & Facades - Corporate Website

A premium, highly-optimized, bilingual landing page and corporate website built for AinZara Aluminum & Facades. The platform showcases structural glazing, aluminum systems, and architectural facades with a modern, glassmorphism-inspired aesthetic.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS v4 (Custom Dark/Light Themes)
- **Animations:** Framer Motion (Scroll animations, page transitions)
- **Internationalization:** `next-intl` (English & Arabic with RTL support)
- **Icons:** Lucide React
- **Theming:** `next-themes` (Light, Dark, System cycling)
- **Components:** shadcn/ui base components
- **Deployment:** Optimized for Cloudflare Pages (Static HTML Export)

## ✨ Key Features

- **Bilingual Interface:** Seamless switching between English (LTR) and Arabic (RTL) without reloading, fully statically pre-rendered.
- **Premium Aesthetics:** Deep blue and aluminum-tinted dark mode with frosted glass (glassmorphism) elements and no pure black.
- **Smooth Animations:** Staggered fade-ups, native-app-like page transitions, and interactive image sliders.
- **Responsive Layout:** Perfectly engineered for both desktop monitors and mobile devices with custom sliding drawers.
- **SEO Optimized:** Fully compliant OpenGraph (OG) metadata, distinct title tags, and optimized asset loading.

## 📁 Project Structure

```text
src/
├── app/
│   ├── [locale]/            # Internationalized routing group
│   │   ├── page.tsx         # Home Page
│   │   ├── services/        # Services Detailed Page
│   │   ├── works/           # Projects/Works Page
│   │   ├── layout.tsx       # Root layout containing Theme & i18n providers
│   │   └── template.tsx     # Framer Motion page transition wrapper
│   ├── not-found.tsx        # Global static 404 page (Statically exported)
│   └── globals.css          # Tailwind CSS v4 & custom color variables
├── components/
│   ├── layout/              # Header, Footer, Mobile Menu
│   ├── sections/            # Reusable page sections (Hero, About, Contact, etc.)
│   └── ui/                  # Base UI components (Buttons, Sliders, Inputs)
├── i18n/                    # next-intl configuration and routing
└── lib/                     # Utilities and helper functions
```

## 🛠️ Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment (Cloudflare Pages)

This project is configured for a purely static export (`output: "export"`).

1. Build the static HTML:
   ```bash
   npm run build
   ```
2. The output will be generated in the `out/` directory.
3. Configure your hosting provider (e.g., Cloudflare Pages) to serve the `out/` directory.

## 📜 License

See the `LICENSE` file for full terms and conditions.

---
*Built by [ZerroDevs](https://github.com/ZerroDevs).*
