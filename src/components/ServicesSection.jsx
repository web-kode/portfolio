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
        <div className="relative w-full min-h-screen pb-16 py-9 bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] overflow-hidden">
            {/* Fixed Section Title */}
            <div className="sticky top-0 bg-opacity-90 py-6 text-center w-full z-20">
                <h1 className="text-3xl heading-with-border font-bold logo text-gray-900 dark:text-[#f4f4f4]">Our Services</h1>
                {/* <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">We craft digital experiences with perfection.</p> */}
            </div>
            <div className="max-w-6xl mx-auto px-6 pt-16 space-y-32">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center ${
                                isEven ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.div
                                className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg"
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[300px] object-contain rounded-xl"
                                />
                            </motion.div>
                            <motion.div
                                className={`w-full md:w-1/2 mt-6 md:mt-0 flex flex-col ${
                                    isEven ? "text-left items-start pl-9" : ""
                                }`}
                                initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {service?.title}
                                </h2>

                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                    {service?.description}
                                </p>

                                <div className="flex gap-4 mt-4">
                                    {service?.techStack?.map((tech, idx) => {
                                        const IconComponent = tech.icon; // Get the actual icon component
                                        return (
                                            <div key={idx} className="relative group flex flex-col items-center">
                                                {/* Tech Icon */}
                                                <IconComponent className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />

                                                {/* Tooltip */}
                                                <span className="absolute bottom-full mb-2 hidden px-2 py-1 text-xs text-white bg-black rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:flex whitespace-nowrap">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>


                                <ul className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
                                    {service?.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <BsDot className="text-2xl text-[YOUR_GRADIENT]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button href="#" className="px-4 py-2 justify-start gap-2 items-center w-fit mt-4 text-white rounded-full flex hover:bg-[#7f56d9]/50 relative cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                                    {service?.cta.text}
                                    <HiArrowRight className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>   
        </div>
    );
}