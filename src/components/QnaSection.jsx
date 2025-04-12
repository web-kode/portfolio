"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function QnaSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer web and mobile development, UI/UX design, and e-commerce solutions tailored to your needs.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Most projects take 4–8 weeks depending on complexity and client collaboration.",
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer post-launch support, updates, and maintenance packages.",
        },
        {
            question: "Can I be involved in the design process?",
            answer: "Absolutely. We believe in transparent collaboration and regular feedback loops.",
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const testimonials = [
        {
            name: "Anjali Mehra",
            role: "Founder, SweetTreats Bakery",
            location: "Jaipur",
            quote:
                "Webkode helped us take our small home bakery online. Their team made everything so easy—from design to payment integration. We started getting orders from all over the city within a week!",
            image: "https://ui-avatars.com/api/?name=Anjali+Mehra&background=0D8ABC&color=fff"
        },
        {
            name: "Rakesh Patil",
            role: "Owner, Patil Agro Mart",
            location: "Nashik",
            quote:
                "We needed a simple and fast-loading site to showcase our farm products. Webkode delivered exactly what we had in mind—clean, mobile-friendly, and super efficient.",
            image: "https://ui-avatars.com/api/?name=Rakesh+Patil&background=4B5563&color=fff"
        },
        {
            name: "Shreya Nair",
            role: "Freelance Interior Designer",
            location: "Kochi",
            quote:
                "As a solo entrepreneur, I really valued how Webkode involved me in the design process. My portfolio looks stunning now, and clients always compliment the site!",
            image: "https://ui-avatars.com/api/?name=Shreya+Nair&background=6366F1&color=fff"
        },
        {
            name: "Vikram Joshi",
            role: "Co-founder, EcoShades",
            location: "Ahmedabad",
            quote:
                "We’re a small brand making sustainable sunglasses. The e-commerce site Webkode built gave us a real identity online. The attention to branding and performance was top-notch.",
            image: "https://ui-avatars.com/api/?name=Vikram+Joshi&background=10B981&color=fff"
        },
        {
            name: "Neha Kapoor",
            role: "Boutique Owner, KapStyle Clothing",
            location: "Lucknow",
            quote:
                "We saw a jump in customer engagement after our website revamp. The Webkode team understood what our audience wanted and built a seamless shopping experience.",
            image: "https://ui-avatars.com/api/?name=Neha+Kapoor&background=F59E0B&color=fff"
        },
        {
            name: "Rohit Deshmukh",
            role: "IT Consultant",
            location: "Pune",
            quote:
                "I had a personal blog I wanted to turn into a professional resource site. Webkode added the right features, clean UI, and it now gets regular visitors. Highly recommend them for tech and creative work!",
            image: "https://ui-avatars.com/api/?name=Rohit+Deshmukh&background=EF4444&color=fff"
        }
    ];


    return (
        <div className="w-full relative min-h-screen bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] z-20 pt-32
            shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.05)]
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-10 
            before:bg-gradient-to-b before:from-black/10 before:to-transparent dark:before:from-white/10 pb-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Illustration with slide-in animation */}
                <div className="hidden lg:block">
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex justify-center"
                    >
                        <img
                            src="/faq.svg"
                            alt="FAQ Illustration"
                            className="w-full max-w-md"
                        />
                    </motion.div>
                </div>

                {/* FAQ Content */}
                <div>
                    <div className="bg-opacity-90 pb-11 text-left w-full z-20">
                        <h1 className="text-3xl heading-with-border logo text-gray-900 dark:text-[#f4f4f4]">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="block lg:hidden">
                        <motion.div
                            initial={{ x: -60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex justify-center"
                        >
                            <img
                                src="/faq.svg"
                                alt="FAQ Illustration"
                                className="w-full max-w-md"
                            />
                        </motion.div>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="border border-indigo-100 dark:border-indigo-900 rounded-xl overflow-hidden"
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={itemVariants}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full cursor-pointer flex justify-between items-center text-left px-5 py-4 bg-[#f3f0ff] dark:bg-[#6366F1]/20 hover:bg-[#ebe6ff] dark:hover:bg-[#6366F1] transition-colors"
                                    >
                                        <span className="text-sm font-semibold text-indigo-700 dark:text-[#f4f4f4]">
                                            {faq.question}
                                        </span>
                                        <FaChevronDown
                                            className={`ml-3 text-indigo-600 dark:text-[#f4f4f4] transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1c1c2c] ${activeIndex === index ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto text-center mb-12 pt-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    What Our Clients Say
                </h2>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                    Small businesses, big impact. Here’s what our clients say about Webkode.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%]">
                {testimonials.map((testimonial, index) => {
                    // Determine animation direction
                    let animation = {};
                    if (index % 3 === 1) {
                        // Center card
                        animation = {
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                        };
                    } else if (index % 3 === 0) {
                        // Left card
                        animation = {
                            initial: { opacity: 0, x: 40 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                        };
                    } else {
                        // Right card
                        animation = {
                            initial: { opacity: 0, x: -40 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                        };
                    }

                    return (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
                            initial={animation.initial}
                            whileInView={animation.animate}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={animation.transition}
                        >
                            <div className="text-3xl text-indigo-500 dark:text-indigo-400 -mt-2">“</div>
                            <p className="text-gray-700 dark:text-gray-300 italic text-[15px] leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2"></div>
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-600 object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

            </div>
        </div>
    );
}
