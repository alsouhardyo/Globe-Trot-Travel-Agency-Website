import React from "react";
import { motion } from "motion/react";
const AboutBanner = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1374&h=450&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-[400px] flex-center-y gap-2"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                className="text-4xl lg:text-5xl font-bold font-lora text-white relative"
            >
                About Us
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-medium text-white relative"
            >
                Learn More About Globe Trot
            </motion.p>
        </section>
    );
};

export default AboutBanner;

