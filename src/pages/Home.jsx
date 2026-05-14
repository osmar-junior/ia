import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhyNowSection } from '../components/home/WhyNowSection';
import { TrainingSection } from '../components/home/TrainingSection';
import { PlatformSection } from '../components/home/PlatformSection';
import { FormatsSection } from '../components/home/FormatsSection';
import { ForWhoSection } from '../components/home/ForWhoSection';
import { InstructorSection } from '../components/home/InstructorSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

export function Home() {
    return (
        <div className="bg-dark min-h-screen">
            <HeroSection />
            <WhyNowSection />
            <TrainingSection />
            <PlatformSection />
            <FormatsSection />
            <ForWhoSection />
            <InstructorSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
}
