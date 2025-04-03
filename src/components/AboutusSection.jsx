"use client"
import { motion } from "framer-motion";


export default function AboutusSection () {

    const paragraphVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
        }),
        exit: (i) => ({
            opacity: 0,
            y: 30,
            transition: { duration: 0.5, ease: "easeIn", delay: i * 0.1 },
        }),
    };

    return (
        <div className="w-full relative min-h-screen bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] z-20 pt-32
            shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.05)]
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-10 
            before:bg-gradient-to-b before:from-black/10 before:to-transparent dark:before:from-white/10">

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Vertical Line & Animated Text */}
                <div className="md:w-1/2 relative flex">
                    {/* Vertical Thick Rounded Line */}
                    <motion.div
                        className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-sky-400 dark:from-blue-400 dark:to-sky-300 rounded-full"
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                    ></motion.div>

                    <div className="ml-6">
                        <div className=" bg-opacity-90 pb-11 text-center w-full z-20">
                            <h1 className="text-3xl heading-with-border font-bold logo text-gray-900 dark:text-[#f4f4f4]">About US</h1>
                        </div>
                        
                        {[
                            "At [Your Company Name], we believe in innovation, quality, and a customer-first approach. Our team is dedicated to delivering top-notch solutions that not only meet industry standards but also redefine them.",
                            "With years of expertise, we craft cutting-edge products and services that help businesses thrive in a competitive digital landscape. Whether it’s custom development, strategic consulting, or technology-driven solutions, we empower brands to achieve their full potential.",
                            "We are not just a company; we are a partner in your success, ensuring that every project we undertake is driven by passion, precision, and purpose. Let’s build the future, together."
                        ].map((text, i) => (
                            <motion.p
                                key={i}
                                className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                                variants={paragraphVariants}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                exit="exit"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* Right Section - Animated Illustration */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <img
                        src="/aboutus.svg"
                        alt="About Us Illustration"
                        className="w-full max-w-md md:max-w-lg"
                    />
                </motion.div>
            </div>
        </div>
    )
}