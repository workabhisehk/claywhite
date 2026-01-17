import { Metadata } from "next";
import { siteContent } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact WH Advisory Services | Schedule a Strategy Audit",
  description: "Schedule a strategy audit or discuss your compliance and GRC needs. Serving Dallas, TX and Orange County, CA. Get expert fractional COO/CRO and GRC advisory services.",
  keywords: [
    "contact wh advisory",
    "schedule strategy audit",
    "grc consultation",
    "compliance consultation",
    "dallas compliance consultant",
    "orange county grc",
  ],
  openGraph: {
    title: "Contact WH Advisory Services | Schedule a Strategy Audit",
    description: "Get in touch with WH Advisory Services. Schedule a strategy audit or discuss your compliance and GRC needs.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding bg-gray-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-200">
              Schedule a strategy audit or discuss how WH Advisory can transform your compliance into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <ContactForm />
            </div>
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-dark mb-6">Schedule a Call</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
                  <div>
                    <p className="text-charcoal mb-4">
                      {siteContent.contact.calendlyPlaceholder}
                    </p>
                    <p className="text-sm text-gray-500">
                      Calendly embed can be added here
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Locations</h3>
                <div className="space-y-3 text-charcoal">
                  {siteContent.principal.locations.map((location, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-gold mr-2">📍</span>
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
