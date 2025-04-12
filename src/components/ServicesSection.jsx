"use client";

import { HiArrowRight } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaShopify } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress, SiAdobexd, SiFlutter, SiDjango, SiWoo } from "react-icons/si";
import { Button } from "./ui/button";

const services = [
    {
        title: "Web Development & Design",
        description: "Building high-performance, SEO-friendly, and scalable websites using modern technologies.",
        image: "/web-development.svg",
        techStack: [
            { icon: FaReact, name: "React JS" },
            { icon: SiNextdotjs, name: "Next JS" },
            { icon: FaNodeJs, name: "Node JS" },
            { icon: SiExpress, name: "Express JS" },
            { icon: SiMongodb, name: "MongoDB" }
        ],
        features: [
            "Blazing fast performance",
            "Custom UI with animations",
            "Fully responsive & SEO-optimized",
        ],
        cta: { text: "See My Web Projects", quote: "Your vision, my code—let's build it!" }
    },
    {
        title: "App Design & Development",
        description: "Creating powerful mobile apps with sleek UI and smooth user experience.",
        image: "/app-development.svg",
        techStack: [
            { icon: FaReact, name: "React Native" },
            { icon: SiFlutter, name: "Flutter" },
            { icon: SiDjango, name: "Django" }
        ],
        features: [
            "Cross-platform mobile apps",
            "API integrations & real-time updates",
            "User-friendly and feature-rich design",
        ],
        cta: { text: "See My Apps", quote: "From idea to app store—let’s make it happen!" }
    },
    {
        title: "E-Commerce Solutions",
        description: "Crafting scalable, secure, and user-friendly online stores that drive sales.",
        image: "/ecommerce.svg",
        techStack: [
            { icon: FaShopify, name: "Shopify" },
            { icon: SiWoo, name: "WooCommerce" },
            { icon: SiNextdotjs, name: "Next JS" },
            { icon: FaNodeJs, name: "Node JS" }
        ],
        features: [
            "Seamless shopping experience",
            "Secure payment gateways",
            "Analytics & conversion tracking",
        ],
        cta: { text: "Explore My E-Commerce Work", quote: "Sell smart, scale fast—your store, my expertise!" }
    },
    {
        title: "UI/UX Design",
        description: "Designing visually appealing and highly intuitive user experiences.",
        image: "/ui-ux.svg",
        techStack: [
            { icon: FaFigma, name: "Figma" },
            { icon: SiAdobexd, name: "Adobe XD" }
        ],
        features: [
            "Aesthetic and functional UI",
            "User-centric experience",
            "Attention to micro-interactions",
        ],
        cta: { text: "View My Designs", quote: "Good design is good business—let’s elevate yours!" }
    }
];


export default function ServicesSection() {


    return (
        <div className="relative w-full mx-0 inset-0 bg-amber-200 min-h-screen pb-16 py-9 bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] overflow-x-hidden">
            {/* Fixed Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold dark:text-[#f4f4f4] text-gray-800">What We Offer at Webkode</h2>
                <p className="text-gray-500 mt-2 dark:text-[#f4f4f4]/80">
                    Empowering businesses with tailored web solutions—designed to captivate, built to perform, and optimized for growth.
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", type: "spring", stiffness: 70 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Illustration (no card, plain) */}
                            <motion.div
                                className="w-full md:w-1/2 flex justify-center items-center"
                                initial={{ opacity: 0.6, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full max-w-md object-contain"
                                />
                            </motion.div>

                            {/* Content Section (inside card) */}
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ x: isEven ? -40 : 40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <div className="bg-white dark:bg-[#0a0f1e] rounded-2xl p-6 sm:p-8 shadow-xl">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                        {service?.title}
                                    </h2>

                                    <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                                        {service?.description}
                                    </p>

                                    {/* Tech Icons */}
                                    <div className="flex flex-wrap gap-4 mt-6">
                                        {service?.techStack?.map((tech, idx) => {
                                            const IconComponent = tech.icon;
                                            return (
                                                <div key={idx} className="relative group flex flex-col items-center">
                                                    <IconComponent className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                                                    <span className="absolute bottom-full mb-2 hidden px-2 py-1 text-xs text-white bg-black rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:flex whitespace-nowrap">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Feature List */}
                                    <ul className="mt-6 text-gray-600 dark:text-gray-300 space-y-2">
                                        {service?.features?.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <BsDot className="text-2xl text-blue-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Button
                                        href="#"
                                        className="px-4 py-2 justify-start gap-2 items-center w-fit mt-6 text-white rounded-full flex hover:bg-[#7f56d9]/50 relative cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        {service?.cta.text}
                                        <HiArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
}