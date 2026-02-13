import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

import LogoCloud from "@/components/LogoCloud";

import CTA from "@/components/CTA";
import ChallengeInput from "@/components/ChallengeInput";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Clay White | 20+ Years C-Suite GRC Experience",
  description: "Clay White brings 20+ years of C-suite experience in Governance, Risk, and Compliance. Executive leadership at Maximus, Title365, Aseptic Technology, and founder of Casablanca Cocktails. Based in Dallas, TX and Orange County, CA.",
  keywords: [
    "clay white",
    "grc executive",
    "compliance executive",
    "c-suite experience",
    "fractional executive",
    "dallas compliance consultant",
    "orange county grc",
  ],
  openGraph: {
    title: "About Clay White | WH Advisory Services",
    description: "20+ years of C-suite experience in GRC. Executive leadership at Maximus, Title365, Aseptic Technology, and founder of Casablanca Cocktails.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData type="Person" />
      <div>
        <section className="section-padding bg-white text-charcoal">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Clay White</h1>
                <p className="text-lg text-gray-600">
                  {siteContent.principal.title}
                </p>
              </div>
              <div className="relative h-[350px] w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/clay-white.jpg"
                  alt="Clay White - Founder & Principal, WH Advisory Services"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-charcoal mb-6 leading-relaxed">
                  {siteContent.about.narrative}
                </p>
                <p className="text-lg text-charcoal mb-6">
                  {siteContent.principal.bio}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-dark mb-4">Value Proposition</h2>
                <p className="text-charcoal leading-relaxed">
                  {siteContent.about.valueProposition}
                </p>
              </div>

              {siteContent.about.problemsWeSolve && (
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                  <h2 className="text-2xl font-bold text-gray-dark mb-4">The Problems We Solve</h2>
                  <ul className="space-y-3 text-charcoal">
                    {siteContent.about.problemsWeSolve.map((problem, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {siteContent.about.roi && (
                <div className="bg-gray-50 rounded-lg p-8 mb-12">
                  <h2 className="text-2xl font-bold text-gray-dark mb-4">Value & ROI</h2>
                  <div className="space-y-4 text-charcoal">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span dangerouslySetInnerHTML={{ __html: siteContent.about.roi.math.replace('Total cost math:', '<strong>Total cost math:</strong>') }} />
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <div>
                          <span className="font-bold">{siteContent.about.roi.benchmarks.title}</span>
                          <ul className="pl-5 mt-2 space-y-2 list-disc text-gray-600">
                            {siteContent.about.roi.benchmarks.items.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-3">•</span>
                        <span dangerouslySetInnerHTML={{ __html: siteContent.about.roi.timeToImpact.replace('Time-to-impact:', '<strong>Time-to-impact:</strong>') }} />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                {siteContent.services.fractional.title}
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                {siteContent.services.fractional.description}
              </p>

              <h2 className="text-3xl font-bold text-gray-dark mb-8">The Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {siteContent.services.fractional.models.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-gold shadow-sm">
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

              <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Customized Solutions</h3>
                <ul className="space-y-3 text-charcoal">
                  {siteContent.services.fractional.solutions?.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-dark mb-6">Engagement & Roadmaps</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {siteContent.services.fractional.engagementModels?.map((model, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold transition-colors">
                    <h3 className="text-xl font-bold text-gray-dark mb-3">{model.name}</h3>
                    <p className="text-charcoal">{model.description}</p>
                  </div>
                ))}
              </div>
              {siteContent.services.fractional.engagementAddOns && (
                <div className="bg-white rounded-lg p-6 mb-12 border-l-4 border-charcoal shadow-sm">
                  <p className="text-charcoal font-semibold">
                    {siteContent.services.fractional.engagementAddOns}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <LogoCloud />

        <ChallengeInput />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">Connect</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={siteContent.principal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-semibold"
                >
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>Clay White on LinkedIn</span>
                </a>
                <span className="text-charcoal hidden sm:inline">•</span>
                <a
                  href={siteContent.company.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-semibold"
                >
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>WH Advisory Services on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTA
          primaryText="Schedule a Strategy Audit"
          primaryHref="/contact"
        />
      </div>
    </>
  );
}
