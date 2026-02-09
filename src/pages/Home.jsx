import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedServices from '../components/FeaturedServices';
import FinalCTA from '../components/FinalCTA';
import GlitterBackground from '../components/GlitterBackground';
import SectionSeparator from '../components/sectionSeparator';

function Home() {
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [ctaRef, ctaVisible] = useScrollAnimation();
    const [aboutRef, aboutVisible] = useScrollAnimation();

    return (
        <div className="text-neutral-300 min-h-screen">
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />
            <GlitterBackground count={550} />

            <HeroSection />
            <SectionSeparator />

            <AboutSection
                aboutRef={aboutRef}
                aboutVisible={aboutVisible}
            />
            <SectionSeparator />

            <FeaturedServices
                servicesRef={servicesRef}
                servicesVisible={servicesVisible}
            />
            <SectionSeparator />

            <FinalCTA
                ctaRef={ctaRef}
                ctaVisible={ctaVisible}
            />

            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-neutral-200 text-black p-4 rounded-full shadow-lg hover:bg-white transition duration-300"
                >
                    ↑
                </button>
            </div>
        </div>
    );
}

export default Home;
