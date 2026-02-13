import { Metadata } from "next";
import { Suspense } from "react";
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
      <section className="section-padding bg-white text-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Schedule a strategy audit or discuss how WH Advisory can transform your compliance into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
