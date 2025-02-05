import React from "react";
import { motion } from "motion/react";
const Info = () => {
    return (
        <section className="bg-gray-50">
            <div className="lg:flex lg:items-center space-y-8 lg:space-y-0 lg:gap-16 px-10 py-20">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHJhdmVsJTIwQUdlbmN5fGVufDB8fDB8fHww"
                        alt="Travel Adventure"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <h3 className="text-lg capitalize font-semibold text-blue-500 mb-4">
                        Discover the World with Us
                    </h3>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-lora">
                        Welcome to Globe Trot - A Gateway to Wonders
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        At Globe Trot, we celebrate the spirit of exploration
                        and discovery. Our mission is to create unforgettable
                        journeys, offering you a window into the world's most
                        stunning landscapes and vibrant cultures.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        From tranquil escapes to thrilling adventures, our
                        tailor-made itineraries are crafted with care, ensuring
                        every journey is unique and memorable. Discover hidden
                        gems, connect with diverse communities, and immerse
                        yourself in experiences that inspire.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join us in exploring the extraordinary. Together, we'll
                        create stories that last a lifetime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Info;
