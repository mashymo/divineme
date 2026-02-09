function HeroSection() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 py-12 sm:py-20">
            <div className="relative max-w-6xl w-full text-center space-y-6 sm:space-y-8">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#d4d4d4] tracking-[0.2em] mb-4 sm:mb-6">
                    DIVINE ME
                </h1>
                <p className="text-neutral-500 text-base sm:text-xl md:text-2xl tracking-[0.15em] mb-4 sm:mb-8">
                    by Jackie
                </p>
                <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    Elevate your natural beauty with precision brow shaping, tinting, and lamination.
                    Each service is tailored to enhance your unique features and bring out your best self.
                </p>
                <div className="flex justify-center mt-4 sm:mt-8">
                    <a
                        href="https://instagram.com/divineme.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-200 text-black px-6 py-3 sm:px-8 sm:py-4 font-serif text-base sm:text-lg tracking-wider uppercase hover:bg-white transition-colors duration-300"
                    >
                        Book Appointment
                    </a>
                </div>
                <p className="text-neutral-400 text-xs sm:text-sm md:text-base mt-2 tracking-widest">
                    <a
                        href="https://instagram.com/divineme.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#d2b48c] transition-colors duration-300"
                    >
                        divineme.co
                    </a>
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
