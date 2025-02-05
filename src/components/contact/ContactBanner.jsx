import React from "react";
import { motion } from "motion/react";

const ContactBanner = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1000&h=600&dpr=2&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbnRhY3R8ZW58MHx8MHx8fDA%3D)",
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
                Get in Touch
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-medium lg:w-1/2 text-center relative"
            >
                Have any questions or need help with your booking? Fill out the
                form below to get in touch with us.
            </motion.p>
        </section>
    );
};

export default ContactBanner;

