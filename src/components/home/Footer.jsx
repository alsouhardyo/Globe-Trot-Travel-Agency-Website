import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const sections = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", to: "#" },
            { name: "Packages", to: "/packages" },
            { name: "Contact Us", to: "/contact" },
            { name: "About Us", to: "/about" },
            { name: "Booking", to: "/booking" },
        ],
    },
    {
        title: "Destinations",
        links: [
            { name: "Exotic Beaches", to: "#" },
            { name: "Cultural Capitals", to: "#" },
            { name: "Adventure Escapes", to: "#" },
            { name: "Family Vacations", to: "#" },
            { name: "Luxury Travel", to: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", to: "#" },
            { name: "Anti-discrimination", to: "#" },
            { name: "Disability Support", to: "#" },
            { name: "Cancellation Options", to: "#" },
            { name: "Report Neighborhood Concern", to: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-gray-100 container-padding">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center mb-4">
                        <h1 className="text-xl font-bold font-lora">
                            Glob{" "}
                            <span className="text-blue-500 italic">Trot</span>
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        Explore the world's hidden treasures, waiting to be
                        discovered with us.
                    </p>
                </motion.div>

                {sections.map((section) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-lg font-semibold mb-4 text-gray-800 font-lora">
                            {section.title}
                        </h2>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-600 hover:text-blue-500 btn-transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-center text-gray-600">
                <p>
                    &#169; 2024 Globe Trot. All Rights Reserved
                    <span className="mx-2">|</span>
                    <span className="hover:text-gray-800">Privacy Policy</span>
                    <span className="mx-2">|</span>
                    <span className="hover:text-gray-800">
                        Terms of Service
                    </span>
                    <span className="mx-2">|</span>
                    <span className="hover:text-gray-800">Manage Cookies</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
