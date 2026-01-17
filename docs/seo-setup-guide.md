# SEO Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://whadvisory.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

**Important:** Add `.env.local` to `.gitignore` (already included) to keep credentials secure.

## Google Analytics Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property for whadvisory.com
   - Copy the Measurement ID (format: G-XXXXXXXXXX)

2. **Add Measurement ID**
   - Add `NEXT_PUBLIC_GA_ID` to `.env.local` with your Measurement ID
   - The Analytics component will automatically load GA4

3. **Verify Tracking**
   - Deploy site or run locally
   - Visit site and check GA4 Real-Time reports to confirm tracking

## Google Search Console Setup

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property: https://whadvisory.com
   - Choose verification method (HTML tag recommended)

2. **Get Verification Code**
   - Copy the verification meta tag content
   - Add to `NEXT_PUBLIC_GOOGLE_VERIFICATION` in `.env.local`
   - The verification tag is automatically added via metadata

3. **Submit Sitemap**
   - Once verified, submit sitemap: `https://whadvisory.com/sitemap.xml`
   - Monitor indexing status in Search Console

## Sitemap & Robots.txt

- **Sitemap:** Automatically generated at `/sitemap.xml`
- **Robots.txt:** Automatically generated at `/robots.txt`
- Both use `NEXT_PUBLIC_SITE_URL` from environment variables

## Structured Data

Structured data (Schema.org) is automatically added:
- **Organization schema:** In root layout
- **Person schema:** On about page
- **Service schema:** On service pages
- **WebSite schema:** In root layout

Verify with [Google Rich Results Test](https://search.google.com/test/rich-results)

## Conversion Tracking

Conversion events are automatically tracked:
- **Contact form submission:** `trackContactFormSubmit()`
- **CTA clicks:** `trackCTAClick(text, location)`
- **Service page views:** `trackServicePageView(serviceName)`

View conversions in GA4 under Events.

## Next Steps

1. Set up environment variables
2. Configure Google Analytics
3. Verify Google Search Console
4. Test conversion tracking
5. Submit sitemap to Search Console
6. Monitor initial indexing
