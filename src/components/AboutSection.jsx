import {galleryData} from "../data/galleryData.jsx";
import {useScrollAnimation} from "../hooks/useScrollAnimation.js";

function AboutSection() {
    const allImages = [...galleryData, ...galleryData];
    const [aboutRef, aboutVisible] = useScrollAnimation();

    return (
        <section
            ref={aboutRef}
            className={`px-6 py-16 transition-all duration-1000 ease-out ${
                aboutVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* LEFT SIDE - About Text */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-5xl text-[#d4d4d4] tracking-wider mb-6 uppercase">
                            About Divine Me
                        </h2>

                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            Welcome to Divine Me — where beauty meets intention. I'm a certified brow artist
                            specializing in natural, precision brow shaping, tinting, and lamination.
                        </p>

                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            Working from my private studio, I take the time to understand your
                            unique features and goals to create brows that enhance your natural
                            beauty. Each appointment is personalized, comfortable, and tailored
                            entirely for you.
                        </p>

                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            My approach combines technical skill with an artistic eye,
                            ensuring you leave feeling confident and radiant. I use only high-quality
                            products and stay current with the latest techniques to give you
                            the best results possible.
                        </p>

                        <div className="pt-6">
                            <a
                                href="/about-me"
                                className="inline-block border-2 border-[#d2b48c] text-[#d2b48c] px-8 py-3 font-serif text-base tracking-wider uppercase hover:bg-[#d2b48c] hover:text-black transition-all duration-300"
                            >
                                Learn More About Me
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Infinite Carousel */}
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="flex gap-6 w-max animate-scroll">
                            {allImages.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-64 h-80 sm:w-72 h-115 overflow-hidden rounded-lg"
                                >
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover transition-transform duration-400 hover:scale-110 block"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            muted
                                            autoPlay
                                            loop
                                            preload="none"
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-400 block"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Infinite scroll CSS */}
            <style>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
    
                    .animate-scroll {
                        animation: scroll 25s linear infinite;
                        will-change: transform;
                    }
                `}</style>
        </section>
    );
}

export default AboutSection;
