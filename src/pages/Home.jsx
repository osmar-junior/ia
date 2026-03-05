import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { InstructorSection } from '../components/home/InstructorSection';
import { TracksSection } from '../components/home/TracksSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export function Home() {
    return (
        <div className="bg-dark min-h-screen">
            <HeroSection />
            <InstructorSection />
            <TracksSection />
            <TestimonialsSection />
        </div>
    );
}
