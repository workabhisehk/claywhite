import { siteContent } from "@/content/site";

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Person' | 'WebSite';
  data?: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://whadvisory.com';

  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'WH Advisory Services',
          url: baseUrl,
          logo: `${baseUrl}/images/wh-advisory-logo.png`,
          description: siteContent.about.valueProposition,
          address: [
            {
              '@type': 'PostalAddress',
              addressLocality: 'Dallas',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
            {
              '@type': 'PostalAddress',
              addressLocality: 'Orange County',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
          ],
          areaServed: ['United States'],
          serviceType: ['GRC Advisory', 'Fractional Executive Leadership', 'Compliance Consulting'],
          founder: {
            '@type': 'Person',
            name: siteContent.principal.name,
            jobTitle: siteContent.principal.title,
          },
        };

      case 'Person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteContent.principal.name,
          jobTitle: siteContent.principal.title,
          description: siteContent.principal.bio,
          worksFor: {
            '@type': 'Organization',
            name: 'WH Advisory Services',
          },
          address: [
            {
              '@type': 'PostalAddress',
              addressLocality: 'Dallas',
              addressRegion: 'TX',
            },
            {
              '@type': 'PostalAddress',
              addressLocality: 'Orange County',
              addressRegion: 'CA',
            },
          ],
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'WH Advisory Services',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Service':
        return data || {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'GRC Advisory',
          provider: {
            '@type': 'Organization',
            name: 'WH Advisory Services',
          },
          areaServed: 'United States',
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
