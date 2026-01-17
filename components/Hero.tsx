"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { trackCTAClick } from "@/lib/analytics";

export default function Hero() {
  const handleCTAClick = (text: string, href: string) => {
    trackCTAClick(text, href);
  };
  return (
    <section className="bg-gray-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {siteContent.hero.headline}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {siteContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                onClick={() => handleCTAClick(siteContent.hero.primaryCTA, "/contact")}
                className="bg-gold text-gray-dark px-8 py-3 rounded-lg font-bold hover:bg-gold-light transition-colors text-center"
              >
                {siteContent.hero.primaryCTA}
              </Link>
              <Link
                href="/services/grc-regulatory"
                onClick={() => handleCTAClick(siteContent.hero.secondaryCTA, "/services/grc-regulatory")}
                className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-gray-dark transition-colors text-center"
              >
                {siteContent.hero.secondaryCTA}
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/clay-white.jpg"
              alt="Clay White - Founder & Principal, WH Advisory Services"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                // Fallback to placeholder if image not found
                const target = e.target as HTMLImageElement;
                if (target.src && !target.src.includes('placeholder')) {
                  target.classList.add('hidden');
                  if (target.parentElement) {
                    const placeholder = target.parentElement.querySelector('.image-placeholder') as HTMLElement;
                    if (placeholder) {
                      placeholder.classList.remove('hidden');
                      placeholder.classList.add('flex');
                    }
                  }
                }
              }}
            />
            <div className="image-placeholder absolute inset-0 bg-gradient-to-br from-gold/20 to-gray-dark/80 flex items-center justify-center hidden">
              <div className="text-center text-white">
                <div className="w-48 h-48 mx-auto bg-charcoal rounded-full flex items-center justify-center mb-4">
                  <span className="text-6xl font-bold text-gold">CW</span>
                </div>
                <p className="text-sm text-gray-300">Clay White</p>
                <p className="text-xs text-gray-400 mt-2">Please add clay-white.jpg to /public/images/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
