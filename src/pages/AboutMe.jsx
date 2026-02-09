import React from 'react';
import {useScrollAnimation} from "../hooks/useScrollAnimation.js";
import GlitterBackground from "../components/GlitterBackground.jsx";

function AboutMe() {
    const [aboutRef, aboutVisible] = useScrollAnimation();
    return (
        <section ref={aboutRef}>
            <GlitterBackground count={200}/> {/* more count = denser glitter */}
            <div
                className={`transition-all duration-1000 ease-out ${
                    aboutVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="min-h-screen py-12 sm:py-16 md:py-20 px-6 text-neutral-300">
                    <div className="max-w-6xl mx-auto">

                        {/* Title Section */}
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#d4d4d4] tracking-wider mb-4 sm:mb-6">
                                Jacqueline Escarcega
                            </h1>
                            <p className="text-neutral-500 text-sm sm:text-base tracking-widest uppercase">
                                Owner & Licensed Esthetician
                            </p>
                        </div>

                        {/* Main Content: image left, text right */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* Photo on left */}
                            <div className="w-full md:w-3/5 flex justify-center">
                                <img
                                    src="/images/aboutme.jpeg"
                                    alt="Jacqueline Escarcega"
                                    className="w-full max-w-[500px] aspect-[3/4] object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-[1.015]"
                                />
                            </div>

                            {/* Text on right */}
                            <div className="w-full md:w-3/5 space-y-6">

                                {/* Bio */}
                                <div className="space-y-5 text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <p>
                                        Hi everyone! My name is Jackie, and I'm a licensed Esthetician specializing in
                                        brow
                                        artistry.
                                    </p>
                                    <p>
                                        My passion for beauty services started my journey in 2023 when I earned my
                                        license
                                        from IBBI in El Paso, TX. Since then, I've dedicated myself to perfecting the
                                        art of
                                        brow shaping, tinting, and lamination.
                                    </p>
                                    <p>
                                        I'm so excited to start fresh in Houston! I have many plans I'm eager to bring
                                        to
                                        life, including expanding my services and creating a welcoming space where every
                                        client feels confident and beautiful.
                                    </p>
                                    <p>
                                        Thank you to everyone who has trusted me so far, and to those who will continue
                                        to
                                        support me on this journey. Each appointment is an opportunity to enhance your
                                        natural beauty, and I can't wait to work with you!
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="border-t border-neutral-800 pt-8 mt-8 space-y-3">
                                    <h2 className="font-serif text-xl text-neutral-300 tracking-wider mb-4">
                                        GET IN TOUCH
                                    </h2>

                                    <p className="flex items-center gap-2">
                                        <span className="text-neutral-500">Instagram:</span>
                                        <a
                                            href="https://instagram.com/divineme.co"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#d2b48c] hover:text-white transition-colors duration-300"
                                        >
                                            @divineme.co
                                        </a>
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <span className="text-neutral-500">Phone:</span>
                                        <a
                                            href="tel:+19152224780"
                                            className="text-[#d2b48c] hover:text-white transition-colors duration-300"
                                        >
                                            (915) 222-4780
                                        </a>
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <span className="text-neutral-500">Location:</span>
                                        <span className="text-neutral-400">Houston, TX</span>
                                    </p>

                                    {/* Instagram icon */}
                                    <a
                                        href="https://instagram.com/jackiescarcega"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-neutral-100 hover:text-pink-400 transition-colors transform hover:scale-110 mt-3"
                                        aria-label="Instagram"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="inline-block"
                                        >
                                            <path
                                                d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
