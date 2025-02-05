import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import BannerForm from "./BannerForm";
import { motion } from "motion/react";

const HeroBanner = () => {
    return (
        <section className="overflow-y-hidden relative px-4 py-8 md:px-8 md:py-6 lg:py-3">
            {/* Banner Area */}
            <div className="banner-height rounded-3xl flex-center-y bg-gray-400 gap-4 lg:gap-5 px-4 background-image">
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="text-center text-white text-sm font-lato px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg"
                >
                    Explore the World Your Way
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="text-center text-white font-lato text-2xl md:text-3xl lg:text-4xl font-bold capitalize md:w-[50vw] xl:w-[40vw] overflow-y-hidden"
                >
                    Lifelong memories just a few days away
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="text-center text-white md:w-[75vw] lg:w-[45vw] xl:w-[50vw]"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi debitis sint nemo, incidunt praesentium ab ut
                    repellendus fugiat libero architecto!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.9,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/destinations"
                        className="btn-style flex-between-x"
                    >
                        <p>Explore Now</p>
                        <FaArrowRightLong />
                    </Link>
                </motion.div>
            </div>
            <BannerForm />
        </section>
    );
};

export default HeroBanner;
