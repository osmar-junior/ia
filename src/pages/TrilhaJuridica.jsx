import React, { useEffect } from 'react';
import { TrackHero } from '../components/track/TrackHero';
import { SyllabusSection } from '../components/track/SyllabusSection';
import { PricingSection } from '../components/track/PricingSection';
import { FAQSection } from '../components/track/FAQSection';

export function TrilhaJuridica() {

    // Scroll to top when page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-dark min-h-screen">
            <TrackHero />
            <SyllabusSection />
            <PricingSection />
            <FAQSection />
        </div>
    );
}
