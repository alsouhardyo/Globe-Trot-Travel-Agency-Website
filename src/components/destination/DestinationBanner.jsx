import React from "react";
import { motion } from "motion/react";

const DestinationBanner = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1619943379511-10dafc6e128c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative h-[400px] flex-center-y gap-2 text-white"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                className="text-4xl lg:text-5xl font-bold font-lora relative"
            >
                Destinations
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-medium lg:w-1/2 text-center relative"
            >
                Explore stunning destinations, from serene beaches to vibrant
                cities, and let us craft unforgettable travel experiences just
                for you.
            </motion.p>
        </section>
    );
};

export default DestinationBanner;

