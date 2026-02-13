"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChallengeInput() {
    const [challenge, setChallenge] = useState("");
    const router = useRouter();

    const handleNext = () => {
        if (challenge.trim()) {
            router.push(`/contact?challenge=${encodeURIComponent(challenge)}`);
        }
    };

    return (
        <section className="py-12 bg-charcoal text-white">
            <div className="container-custom text-center">
                <h2 id="compliance-challenge-heading" className="text-2xl md:text-3xl font-bold mb-6">
                    What is your biggest compliance challenge?
                </h2>
                <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
                    <input
                        type="text"
                        aria-labelledby="compliance-challenge-heading"
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        placeholder="E.g. Preparing for SOC 2 audit..."
                        className="flex-1 w-full px-4 py-3 rounded-lg text-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleNext();
                            }
                        }}
                    />
                    <button
                        onClick={handleNext}
                        disabled={!challenge.trim()}
                        className="w-full sm:w-auto px-8 py-3 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
