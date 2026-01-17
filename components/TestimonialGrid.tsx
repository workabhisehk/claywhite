import { siteContent } from "@/content/site";

export default function TestimonialGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center">
          Track Record
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-3xl mx-auto">
          Proven results for companies preparing for audits, SEC filings, and acquisition
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gold">
              <p className="text-charcoal mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="text-sm">
                <p className="font-bold text-gray-dark">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
