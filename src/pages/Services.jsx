import { useState } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import GlitterBackground from "../components/GlitterBackground.jsx";
import { AnimatePresence, motion } from "framer-motion";

function Services() {
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [expandedService, setExpandedService] = useState(null);

    const categories = [
        { id: 'shaping', label: 'SHAPING' },
        { id: 'tinting', label: 'TINTING' },
        { id: 'lamination', label: 'LAMINATION' },
        { id: 'combo', label: 'COMBO SERVICES' }
    ];

    const services = [
        {
            id: 1,
            name: 'BROW SHAPE AND WAX',
            price: '$20',
            duration: '30 minutes',
            categories: ['shaping'],
            description: 'Professional brow shaping and waxing to define your natural arch and create symmetry.',
            includes: ['Consultation', 'Precise shaping', 'Waxing', 'Finishing touches'],
            bestFor: 'Maintaining your ideal brow shape and removing unwanted hair'
        },
        {
            id: 2,
            name: 'BROW TINT',
            price: '$20',
            duration: '20 minutes',
            categories: ['tinting'],
            description: 'Semi-permanent dye that enhances your natural brows for a fuller, more defined look',
            includes: ['Color consultation', 'Custom tint application', 'Aftercare instructions'],
            bestFor: 'Adding depth and definition without daily makeup'
        },
        {
            id: 3,
            name: 'BROW WAX AND TINT',
            price: '$35',
            duration: '45 minutes',
            categories: ['shaping', 'tinting', 'combo'],
            description: 'Complete brow transformation combining precise shaping with color enhancement.',
            includes: ['Full consultation', 'Shaping & waxing', 'Custom tinting', 'Styling'],
            bestFor: 'A complete brow refresh in one appointment'
        },
        {
            id: 4,
            name: 'BROW LAMINATION',
            price: '$65',
            duration: '60 minutes',
            categories: ['lamination'],
            description: 'Chemical treatment that temporarily straightens and sets brow hairs in place for a fuller, sculpted look.',
            includes: ['Consultation', 'Lamination treatment', 'Brow shaping', 'Aftercare kit'],
            bestFor: 'Unruly, sparse, or downward-growing brows. Results last 4-6 weeks'
        },
        {
            id: 5,
            name: 'BROW LAMINATION, TINT AND WAX',
            price: '$80',
            duration: '90 minutes',
            categories: ['lamination', 'tinting', 'shaping', 'combo'],
            description: 'The ultimate brow treatment combining lamination, tinting, and precision shaping.',
            includes: ['Full consultation', 'Lamination treatment', 'Custom tinting', 'Aftercare kit'],
            bestFor: 'Maximum transformation and long-lasting results',
            note: 'shaping included'
        }
    ];

    const toggleCategory = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    const filteredServices = selectedCategories.length === 0
        ? services
        : services.filter(service => selectedCategories.some(cat => service.categories.includes(cat)));

    const toggleService = (serviceId) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    return (
        <div className="bg-black text-white min-h-screen flex justify-center px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
            <div className="relative max-w-[900px] w-full">
                <GlitterBackground count={550} /> {/* Glitter effect */}

                <h1 className="text-center font-serif text-[#d4d4d4] mb-12 sm:mb-16 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    BROW MENU
                </h1>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => toggleCategory(category.id)}
                            className={`px-4 py-2 font-serif text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                                selectedCategories.includes(category.id)
                                    ? 'bg-[#d2b48c] text-black'
                                    : 'border border-neutral-600 text-neutral-400 hover:border-[#d2b48c]'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Service List */}
                <motion.div layout="position" className={`space-y-4 mb-8 sm:mb-12 transition-all duration-1000 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={servicesRef}>
                    {filteredServices.map((service) => (
                        <div key={service.id}>
                            {/* Service Item */}
                            <button
                                onClick={() => toggleService(service.id)}
                                className="w-full text-left border border-neutral-700 p-4 hover:border-[#d2b48c] transition-all duration-300"
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-serif text-base sm:text-lg md:text-xl text-neutral-300 tracking-wider">
                                            {service.name}
                                        </h3>
                                        {service.note && (
                                            <p className="text-neutral-500 text-xs italic mt-1">({service.note})</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="font-serif text-lg sm:text-xl text-neutral-300 whitespace-nowrap">{service.price}</span>
                                        <span
                                            className="text-neutral-500 text-xl">{expandedService === service.id ? '−' : '+'}</span>
                                    </div>
                                </div>
                            </button>

                            {/* Animated Expansion */}
                            <AnimatePresence>
                                {expandedService === service.id && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="overflow-hidden border-x border-b border-neutral-700 bg-neutral-950"
                                    >
                                        <div className="p-6">
                                            <p className="text-neutral-500 text-sm mb-4">{service.duration}</p>
                                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">{service.description}</p>

                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-neutral-300 text-sm font-serif mb-2 tracking-wider">What's Included:</p>
                                                    <ul className="text-neutral-500 text-sm space-y-2">
                                                        {service.includes.map((item, index) => (
                                                            <li key={index} className="flex items-start gap-2">
                                                                <span className="text-[#d2b48c] mt-.5">♥</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-neutral-300 text-sm font-serif mt-6 mb-2 tracking-wider">Best For:</p>
                                                    <p className="text-neutral-500 text-sm">{service.bestFor}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                {filteredServices.length === 0 && (
                    <p className="text-center text-neutral-500 text-sm mb-12">
                        No services match the selected categories
                    </p>
                )}

                <div className="border-t border-neutral-800 my-12 sm:my-16 md:my-20 mx-auto max-w-[600px]" />

                <div className="text-center space-y-4 sm:space-y-6">
                    <p className="text-neutral-400 tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase">
                        TO BOOK, DM FOR AVAILABILITY
                    </p>
                    <a
                        href="https://instagram.com/divineme.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-neutral-300 text-1xl sm:text-2xl md:text-3xl font-serif hover:text-[#d2b48c] transition-colors duration-300"
                    >
                        divineme.co
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Services;
