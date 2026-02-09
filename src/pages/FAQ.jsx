import {useState} from 'react';
import {useScrollAnimation} from "../hooks/useScrollAnimation.js";
import GlitterBackground from "../components/GlitterBackground.jsx";
import {AnimatePresence, motion} from "framer-motion";

function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);
    const [faqRef, faqVisible] = useScrollAnimation(); // Hook for scroll visibility animation

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "How do I book an appointment?",
            answer: "DM me on Instagram @divineme.co with your preferred date and time. I'll confirm availability and send you booking details!"
        },
        {
            id: 2,
            question: "Where are you located?",
            answer: "I work from my private studio in Houston, TX. The exact address will be provided once your appointment is confirmed."
        },
        {
            id: 3,
            question: "What should I do before my appointment?",
            answer: "Avoid waxing or threading for at least 2 weeks before your appointment. Come with clean, makeup-free brows. If you're getting a tint, avoid retinol and exfoliating products for 48 hours prior."
        },
        {
            id: 4,
            question: "What should I do to care for my brows after a brow lamination or tinting session?",
            answer: (
                <>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        After your brow lamination or tinting session, here are a few essential aftercare tips to keep
                        your brows looking their best:
                    </p>
                    <div className="space-y-4 pt-4">
                        <p className="flex items-start gap-2 text-neutral-400 leading-relaxed">
                            <span className="text-[#d2b48c] mt-.5">♥</span>
                            <span>Avoid moisture for 24 hours (48 hours if tinted). This includes sweat, steam, and washing your face, to allow the treatment to set properly.</span>
                        </p>
                        <p className="flex items-start gap-2 text-neutral-400 leading-relaxed">
                            <span className="text-[#d2b48c] mt-.5">♥</span>
                            <span>Avoid applying makeup, harsh skincare, and excessive sun exposure during the first 24 hours. This helps prevent irritation and ensures the results last longer.</span>
                        </p>
                        <p className="flex items-start gap-2 text-neutral-400 leading-relaxed">
                            <span className="text-[#d2b48c] mt-.5">♥</span>
                            <span>After the first 24 hours, you may gently cleanse the brow area with a mild cleanser. Always pat dry and brush upwards to maintain the desired shape and prevent them from getting unruly.</span>
                        </p>
                        <p className="flex items-start gap-2 text-neutral-400 leading-relaxed">
                            <span className="text-[#d2b48c] mt-.5">♥</span>
                            <span>Apply a nourishing oil or serum (like castor oil or brow serum) to keep your brows hydrated and healthy.</span>
                        </p>
                        <p className="flex items-start gap-2 text-neutral-400 leading-relaxed">
                            <span className="text-[#d2b48c] mt-.5">♥</span>
                            <span>Schedule a follow-up session every 4-6 weeks to keep your brows looking fresh. Tinting and shaping can be done prior to 6 weeks if necessary.</span>
                        </p>
                    </div>
                </>
            ),
        },
        {
            id: 5,
            question: "What's your cancellation policy?",
            answer: "Please give at least 24 hours notice if you need to cancel or reschedule. Last-minute cancellations may require a deposit for future bookings."
        }
    ];

    return (
        <div className="min-h-screen text-neutral-300">
            <GlitterBackground count={300}/> {/* Glitter effect */}

            <div className="relative px-6 py-16 sm:py-20" ref={faqRef}>
                <div className="max-w-4xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#d4d4d4] tracking-widest mb-6">
                            FREQUENTLY ASKED QUESTIONS
                        </h1>
                        <p className="text-neutral-500 text-sm tracking-widest sm:text-base uppercase">
                            Everything you need to know
                        </p>
                    </div>

                    {/* General FAQ Section */}
                    <div
                        className={`space-y-4 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 ease-out`}>
                        <h2 className="font-serif text-2xl sm:text-3xl text-neutral-300 tracking-wider mb-8 text-center">
                            General Questions
                        </h2>

                        <AnimatePresence>
                            {faqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 20}}
                                    transition={{duration: 0.5}}
                                >
                                    <div className="">
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full text-left border border-neutral-700 p-6 hover:border-[#d2b48c] flex justify-between items-center transition-colors"
                                        >
                                            <span className="font-serif text-base sm:text-lg text-neutral-300">
                                                {faq.question}
                                            </span>
                                            <span className="text-2xl text-neutral-500">
                                                {openFaq === faq.id ? '−' : '+'}
                                            </span>
                                        </button>

                                        {openFaq === faq.id && (
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                transition={{duration: 0.3, ease: "easeOut"}}
                                                className="bg-neutral-950 px-6 pb-6 text-neutral-400 text-sm sm:text-base leading-relaxed border-x border-b border-neutral-700"
                                            >
                                                <p className="pt-4">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
