import { ServiceCard } from './ServiceCard';

function FeaturedServices({ servicesRef, servicesVisible }) {
    return (
        <section
            ref={servicesRef}
            className={`px-6 py-12 sm:py-20 max-w-6xl mx-auto transition-all duration-1000 ease-out ${
                servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-300 tracking-wider mb-2 sm:mb-4">
                FEATURED SERVICES
            </h2>
            <p className="text-center text-neutral-500 text-xs sm:text-sm md:text-base mb-8 sm:mb-16 tracking-widest uppercase">
                Precision Brow Treatments
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 sm:gap-x-8 mb-8 sm:mb-12">
                <ServiceCard
                    title="BROW SHAPING"
                    description="Expert shaping and waxing to define your natural arch and create symmetry. Perfect for maintaining your ideal brow shape."
                    price="From $20"
                />
                <ServiceCard
                    title="BROW TINTING"
                    description="Semi-permanent dye that enhances your natural brows, creating fuller and more defined appearance without daily makeup."
                    price="From $20"
                />
                <ServiceCard
                    title="BROW LAMINATION"
                    description="Chemical treatment that creates groomed, sculpted brows with a brushed-up effect. Results last 4-6 weeks."
                    price="From $65"
                />
            </div>

            <div className="text-center">
                <a
                    href="/services"
                    className="inline-block border-2 border-neutral-400 text-neutral-300 px-6 py-2 sm:px-8 sm:py-3 font-serif text-sm sm:text-base tracking-wider uppercase hover:bg-neutral-900 transition-colors duration-300"
                >
                    View Full Menu →
                </a>
            </div>
        </section>
    );
}

export default FeaturedServices;

