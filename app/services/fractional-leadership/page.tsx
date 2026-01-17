import { Metadata } from "next";
import { siteContent } from "@/content/site";
import CTA from "@/components/CTA";
import StructuredData from "@/components/StructuredData";
import { getKeywordsForPage } from "@/lib/keywords";

export const metadata: Metadata = {
  title: "Fractional Executive Leadership | Fractional COO & CRO Services",
  description: "Fractional COO and CRO services for growing enterprises. Cost-efficient executive leadership with 20+ years of C-suite experience. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "fractional coo",
    "fractional cro",
    "fractional executive leadership",
    "fractional chief operating officer",
    "fractional chief risk officer",
    "fractional c-suite",
    "dallas fractional coo",
    "orange county fractional executive",
  ],
  openGraph: {
    title: "Fractional Executive Leadership | WH Advisory Services",
    description: "Fractional COO and CRO services for growing enterprises. Cost-efficient executive leadership with 20+ years of C-suite experience.",
    type: "website",
  },
};

export default function FractionalLeadershipPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Fractional Executive Leadership',
          name: 'Fractional COO and CRO Services',
          description: siteContent.services.fractional.description,
          provider: {
            '@type': 'Organization',
            name: 'WH Advisory Services',
          },
          areaServed: ['United States'],
          serviceOutput: [
            'Cost-efficient executive leadership',
            'Immediate expertise and strategic guidance',
            'Scalable operations without full-time overhead',
          ],
        }}
      />
      <div>
      <section className="section-padding bg-gray-dark text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {siteContent.services.fractional.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {siteContent.services.fractional.description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-8">The Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {siteContent.services.fractional.models.map((model, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 border-l-4 border-gold">
                  <h3 className="text-2xl font-bold text-gray-dark mb-4">{model.role}</h3>
                  <p className="text-charcoal">{model.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-dark mb-6">Benefits</h2>
            <ul className="space-y-4 mb-12">
              {siteContent.services.fractional.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">✓</span>
                  <div>
                    <p className="text-lg text-charcoal font-semibold">{benefit}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Why Fractional Leadership?</h3>
              <p className="text-charcoal mb-4">
                Many growing companies need executive-level oversight but aren't ready for the full-time commitment and overhead of a C-suite hire. Our fractional model provides:
              </p>
              <ul className="space-y-2 text-charcoal">
                <li>• Immediate access to 20+ years of C-suite experience</li>
                <li>• Strategic guidance without long-term contracts</li>
                <li>• Scalable support that grows with your needs</li>
                <li>• Practical solutions informed by both corporate and entrepreneurial experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        primaryText="Schedule a Strategy Audit"
        secondaryText="View GRC Services"
        primaryHref="/contact"
        secondaryHref="/services/grc-regulatory"
      />
    </div>
    </>
  );
}
