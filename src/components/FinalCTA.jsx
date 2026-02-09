function FinalCTA({ ctaRef, ctaVisible }) {
    return (
        <section
            ref={ctaRef}
            className={`px-6 py-12 sm:py-20 transition-all mx-auto duration-1000 ease-out ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-neutral-300 tracking-wider">
                    Ready to Elevate Your Brows?
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    Book your appointment today and experience personalized brow artistry
                    in a private, comfortable setting.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                    <a
                        href="https://instagram.com/divineme.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-200 text-black px-6 py-2 sm:px-8 sm:py-3 font-serif text-sm sm:text-lg tracking-wider uppercase hover:bg-white transition-colors duration-300 w-full sm:w-auto"
                    >
                        Book on Instagram
                    </a>
                    <a
                        href="/faq"
                        className="inline-block border-2 border-[#d2b48c] text-[#d2b48c] px-6 py-2 sm:px-8 sm:py-3 font-serif text-sm sm:text-lg tracking-wider uppercase hover:bg-[#d2b48c] hover:text-black transition-all duration-300 w-full sm:w-auto"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;
