import React from "react";
import { motion } from "motion/react";

const PackageBanner = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&h=400&fit=crop&q=80&dpr=2&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)",
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
                Packages
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-medium lg:w-1/2 text-center relative"
            >
                Choose from our carefully curated packages, tailored to your
                every need, and let us take care of the rest.
            </motion.p>
        </section>
    );
};

export default PackageBanner;

