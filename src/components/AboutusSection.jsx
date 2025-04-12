// "use client"
// import { motion } from "framer-motion";
// import {
//     FaRocket,
//     FaPalette,
//     FaCogs,
//     FaShoppingCart,
//     FaBolt,
//     FaHandshake,
// } from "react-icons/fa";


// export default function AboutusSection() {

//     const featuresData = [
//         {
//             icon: <FaRocket className="text-xl" />,
//             title: "Custom Solutions",
//             text: "Tailored websites and apps built to match your unique business needs, ensuring seamless performance and adaptability.",
//             zIndex: "z-[60]",
//             className: "col-span-2",
//             animation: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, ease: "easeOut" } },
//         },
//         {
//             icon: <FaPalette className="text-xl" />,
//             title: "UI/UX Expertise",
//             text: "Beautiful, intuitive designs that enhance user engagement and conversion.",
//             zIndex: "z-[50]",
//             className: "",
//             animation: { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { type: "spring", stiffness: 80, damping: 16, duration: 0.5 } },
//         },
//         {
//             title: "Full-Stack Team",
//             text: "From frontend to backend, our skilled devs handle it all in-house.",
//             icon: <FaCogs />,
//             zIndex: "z-[40]",
//             className: "sm:row-span-2",
//             isLarge: true,
//             animation: {
//                 initial: { opacity: 0, y: -50 },
//                 whileInView: { opacity: 1, y: 0 },
//                 transition: { type: "spring", stiffness: 80, damping: 16, duration: 0.5, delay: 0.1 }
//             },
//             extraContent: [
//                 {
//                     heading: "Frontend",
//                     items: ["React / Next.js", "Tailwind / CSS", "TypeScript"]
//                 },
//                 {
//                     heading: "Backend",
//                     items: ["Node.js / Express", "MongoDB / PostgreSQL", "API Integration"]
//                 }
//             ]
//         },
//         {
//             icon: <FaShoppingCart className="text-xl" />,
//             title: "E-Commerce Pros",
//             text: "Scalable and secure online stores optimized for performance and sales.",
//             zIndex: "z-[30]",
//             className: "",
//             animation: { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { type: "spring", stiffness: 80, damping: 16, duration: 0.5, delay: 0.3 } },
//         },
//         {
//             icon: <FaBolt className="text-xl" />,
//             title: "Fast & Reliable",
//             text: "We deliver projects on time—without compromising on quality.",
//             zIndex: "z-[20]",
//             className: "",
//             animation: { initial: { opacity: 0, y: -50 }, whileInView: { opacity: 1, y: 0 }, transition: { type: "spring", stiffness: 80, damping: 16, duration: 0.5, delay: 0.3 } },
//         },
//         {
//             icon: <FaHandshake className="text-xl" />,
//             title: "Transparent Collaboration",
//             text: "We keep you in the loop every step of the way, ensuring clarity, communication, and confidence.",
//             zIndex: "z-[10]",
//             className: "col-span-2",
//             animation: { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { type: "spring", stiffness: 80, damping: 16, duration: 0.5, delay: 0.5 } },
//         },
//     ];


//     const paragraphVariants = {
//         hidden: { opacity: 0, y: -30 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
//         }),
//         exit: (i) => ({
//             opacity: 0,
//             y: 30,
//             transition: { duration: 0.5, ease: "easeIn", delay: i * 0.1 },
//         }),
//     };


//     return (
//         <div className="w-full relative min-h-screen bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] z-20 pt-32
//             shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.05)]
//             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-10 
//             before:bg-gradient-to-b before:from-black/10 before:to-transparent dark:before:from-white/10 pb-16">

//             <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
//                 {/* Left Section - Vertical Line & Animated Text */}
//                 <div className="md:w-1/2 relative flex">
//                     {/* Vertical Thick Rounded Line */}
//                     <motion.div
//                         className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-sky-400 dark:from-blue-400 dark:to-sky-300 rounded-full"
//                         initial={{ opacity: 0, scaleY: 0 }}
//                         whileInView={{ opacity: 1, scaleY: 1 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         viewport={{ once: false }}
//                     ></motion.div>

//                     <div className="ml-6">
//                         <div className=" bg-opacity-90 pb-11 text-center w-full z-20">
//                             <h1 className="text-3xl heading-with-border font-bold logo text-gray-900 dark:text-[#f4f4f4]">About US</h1>
//                         </div>

//                         {[
//                             "At [Your Company Name], we believe in innovation, quality, and a customer-first approach. Our team is dedicated to delivering top-notch solutions that not only meet industry standards but also redefine them.",
//                             "With years of expertise, we craft cutting-edge products and services that help businesses thrive in a competitive digital landscape. Whether it’s custom development, strategic consulting, or technology-driven solutions, we empower brands to achieve their full potential.",
//                             "We are not just a company; we are a partner in your success, ensuring that every project we undertake is driven by passion, precision, and purpose. Let’s build the future, together."
//                         ].map((text, i) => (
//                             <motion.p
//                                 key={i}
//                                 className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
//                                 variants={paragraphVariants}
//                                 custom={i}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 exit="exit"
//                                 viewport={{ once: false, amount: 0.3 }}
//                             >
//                                 {text}
//                             </motion.p>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Section - Animated Illustration */}
//                 <motion.div
//                     className="md:w-1/2 flex justify-center"
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                 >
//                     <img
//                         src="/aboutus.svg"
//                         alt="About Us Illustration"
//                         className="w-full max-w-md md:max-w-lg"
//                     />
//                 </motion.div>
//             </div>

//             <div className="max-w-6xl mx-auto px-4">
//                 <div className="text-center mb-12 ">
//                     <h2 className="text-3xl font-bold dark:text-[#f4f4f4] text-gray-800">Why Brands Trust Webkode</h2>
//                     <p className="text-gray-500 mt-2 dark:text-[#f4f4f4]/80">
//                         We blend creativity, technology, and strategy to deliver digital experiences that drive results.
//                     </p>
//                 </div>

//                 {/* Asymmetric grid layout */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,_auto)] gap-6">
//                     {featuresData.map((feature, index) => (
//                         <motion.div
//                             key={index}
//                             className={`relative ${feature.zIndex} p-6 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 ${feature.className}`}
//                             initial={feature.animation.initial}
//                             whileInView={feature.animation.whileInView}
//                             transition={feature.animation.transition}
//                             viewport={{ once: false, amount: 0.3 }}
//                         >
//                             <div className="relative z-10 space-y-4">
//                                 <motion.div
//                                     whileHover={{ scale: 1.1, rotate: 4 }}
//                                     whileInView={{ scale: 1, opacity: 1 }}
//                                     initial={{ scale: 0.9, opacity: 0 }}
//                                     transition={{ type: "spring", stiffness: 120, damping: 14 }}
//                                     className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-3"
//                                 >
//                                     {feature.icon}
//                                 </motion.div>

//                                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                                     {feature.title}
//                                 </h3>

//                                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                                     {feature.text}
//                                 </p>

//                                 {/* Extra content for large cards */}
//                                 {feature.isLarge && feature.extraContent && (
//                                     <div className="mt-3 space-y-3">
//                                         {feature.extraContent.map((section, i) => (
//                                             <div
//                                                 key={i}
//                                                 className="transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/40 p-2 rounded-md"
//                                             >
//                                                 <h4 className="font-medium text-indigo-600 dark:text-indigo-300 mb-1 text-xs tracking-wide uppercase">
//                                                     {section.heading}
//                                                 </h4>
//                                                 <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-xs leading-snug">
//                                                     {section.items.map((item, j) => (
//                                                         <li key={j}>{item}</li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//             </div>


//         </div>
//     )
// }

"use client"
import { motion } from "framer-motion";
import {
    FaRocket,
    FaPalette,
    FaCogs,
    FaShoppingCart,
    FaBolt,
    FaHandshake,
} from "react-icons/fa";

export default function AboutusSection() {
    const featuresData = [
        {
            icon: <FaRocket className="text-xl" />,
            title: "Custom Solutions",
            text: "Tailored websites and apps built to match your unique business needs, ensuring seamless performance and adaptability.",
            zIndex: "z-[60]",
            className: "col-span-2",
        },
        {
            icon: <FaPalette className="text-xl" />,
            title: "UI/UX Expertise",
            text: "Beautiful, intuitive designs that enhance user engagement and conversion.",
            zIndex: "z-[50]",
            className: "",
        },
        {
            title: "Full-Stack Team",
            text: "From frontend to backend, our skilled devs handle it all in-house.",
            icon: <FaCogs />,
            zIndex: "z-[40]",
            className: "sm:row-span-2",
            isLarge: true,
            extraContent: [
                {
                    heading: "Frontend",
                    items: ["React / Next.js", "Tailwind / CSS", "TypeScript"]
                },
                {
                    heading: "Backend",
                    items: ["Node.js / Express", "MongoDB / PostgreSQL", "API Integration"]
                }
            ]
        },
        {
            icon: <FaShoppingCart className="text-xl" />,
            title: "E-Commerce Pros",
            text: "Scalable and secure online stores optimized for performance and sales.",
            zIndex: "z-[30]",
            className: "",
        },
        {
            icon: <FaBolt className="text-xl" />,
            title: "Fast & Reliable",
            text: "We deliver projects on time—without compromising on quality.",
            zIndex: "z-[20]",
            className: "",
        },
        {
            icon: <FaHandshake className="text-xl" />,
            title: "Transparent Collaboration",
            text: "We keep you in the loop every step of the way, ensuring clarity, communication, and confidence.",
            zIndex: "z-[10]",
            className: "col-span-2",
        },
    ];

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
        <div className="w-full relative min-h-screen bg-gradient-to-b from-gray-50 to-sky-100 dark:from-[#0a0f1e] dark:to-[#101828] z-20 pt-32 shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.05)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:bg-gradient-to-b before:from-black/10 before:to-transparent dark:before:from-white/10 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative flex">
                    <motion.div
                        className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-sky-400 dark:from-blue-400 dark:to-sky-300 rounded-full"
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                    ></motion.div>

                    <div className="ml-6">
                        <div className="bg-opacity-90 pb-11 text-center w-full z-20">
                            <h1 className="text-3xl heading-with-border font-bold logo text-gray-900 dark:text-[#f4f4f4]">About US</h1>
                        </div>
                        <div className="block lg:hidden">
                            <motion.div
                                className="md:w-1/2 flex justify-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                <img
                                    src="/aboutus.svg"
                                    alt="About Us Illustration"
                                    className="w-full max-w-md md:max-w-lg"
                                />
                            </motion.div>
                        </div>

                        {[
                            "At Webkode, we believe in innovation, quality, and a customer-first approach. Our team is dedicated to delivering top-notch solutions that not only meet industry standards but also redefine them.",
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

                <div className="hidden lg:block md:w-1/2">
                    <motion.div
                        className="w-full flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <img
                            src="/aboutus.svg"
                            alt="About Us Illustration"
                            className="w-full max-w-md md:max-w-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold dark:text-[#f4f4f4] text-gray-800">Why Brands Trust Webkode</h2>
                    <p className="text-gray-500 mt-2 dark:text-[#f4f4f4]/80">
                        We blend creativity, technology, and strategy to deliver digital experiences that drive results.
                    </p>
                </div>

                {/* ✅ Large screens (grid layout) */}
                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative p-6 rounded-2xl shadow-md bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-transform duration-300 ${feature.className}`}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                delay: index * 0.08
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="relative z-10 space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.08, rotate: 2 }}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-3"
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {feature.text}
                                </p>

                                {feature.isLarge && feature.extraContent && (
                                    <div className="mt-3 space-y-3">
                                        {feature.extraContent.map((section, i) => (
                                            <div
                                                key={i}
                                                className="transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/40 p-2 rounded-md"
                                            >
                                                <h4 className="font-medium text-indigo-600 dark:text-indigo-300 mb-1 text-xs tracking-wide uppercase">
                                                    {section.heading}
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-xs leading-snug">
                                                    {section.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* ✅ Mobile + Tablet (stacked) */}
                <div className="flex flex-col gap-6 lg:hidden">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative p-6 rounded-2xl shadow-md bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-transform duration-300 ${feature.className}`}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                delay: index * 0.08
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="relative z-10 space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.08, rotate: 2 }}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-3"
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {feature.text}
                                </p>

                                {feature.isLarge && feature.extraContent && (
                                    <div className="mt-3 space-y-3">
                                        {feature.extraContent.map((section, i) => (
                                            <div
                                                key={i}
                                                className="transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/40 p-2 rounded-md"
                                            >
                                                <h4 className="font-medium text-indigo-600 dark:text-indigo-300 mb-1 text-xs tracking-wide uppercase">
                                                    {section.heading}
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-xs leading-snug">
                                                    {section.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative ${feature.zIndex} p-6 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 ${feature.className}`}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                delay: index * 0.08
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="relative z-10 space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.08, rotate: 2 }}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-3"
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {feature.text}
                                </p>

                                {feature.isLarge && feature.extraContent && (
                                    <div className="mt-3 space-y-3">
                                        {feature.extraContent.map((section, i) => (
                                            <div
                                                key={i}
                                                className="transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/40 p-2 rounded-md"
                                            >
                                                <h4 className="font-medium text-indigo-600 dark:text-indigo-300 mb-1 text-xs tracking-wide uppercase">
                                                    {section.heading}
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-xs leading-snug">
                                                    {section.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
