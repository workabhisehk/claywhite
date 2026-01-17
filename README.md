# WH Advisory Services Website

A Next.js portfolio and lead-generation website for WH Advisory Services, featuring fractional COO/CRO services and GRC advisory.

## Features

- **Portfolio & Lead Generation**: Showcase services, testimonials, and track record
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Metadata, sitemap, and robots.txt
- **Design System**: Deep Navy, Charcoal Grey, and Metallic Gold palette
- **Location Presence**: Dallas, TX and Orange County, CA featured sitewide

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── services/          # Service pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # React components
│   ├── Header.tsx         # Site header/navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section with Clay's photo
│   ├── Stats.tsx          # Statistics section
│   ├── TestimonialGrid.tsx # Testimonials
│   ├── SectorList.tsx     # Sectors served
│   ├── ContactForm.tsx    # Contact form
│   └── ...                # Other components
├── content/               # Content data
│   └── site.ts            # Centralized site content
└── public/                # Static assets
```

## Content Management

Site content is managed in `content/site.ts` for easy updates. This includes:
- Principal information and bio
- Hero section copy
- Services descriptions
- Testimonials
- Sectors served
- Company history
- Contact form fields

## Design System

- **Colors**: Deep Navy (#001F3F), Charcoal Grey (#2C3E50), Metallic Gold (#D4AF37)
- **Typography**: Inter (sans-serif) for headers, Georgia/Times (serif) for body
- **Spacing**: Consistent section padding and container widths via Tailwind

## Next Steps

1. **Add Clay's Photo**: Replace placeholder in `components/Hero.tsx` with professional headshot
2. **Calendly Integration**: Add Calendly embed code to `app/contact/page.tsx`
3. **Form Backend**: Connect `components/ContactForm.tsx` to email service or API
4. **Domain Configuration**: Update base URL in `app/sitemap.ts` and `app/robots.ts`
5. **Analytics**: Add Google Analytics or other tracking
6. **Images**: Add actual photos for architectural/data abstract imagery

## Build & Deploy

```bash
npm run build
npm start
```

For production deployment, consider platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

## License

Private - WH Advisory Services
