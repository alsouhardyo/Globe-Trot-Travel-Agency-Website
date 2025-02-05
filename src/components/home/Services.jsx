import React from "react";
import { FaPlane, FaHotel, FaPassport } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
    {
        id: 1,
        title: "Flight Finder",
        description:
            "Seamless flight search and booking to worldwide destinations.",
        icon: <FaPlane className="text-blue-500 text-3xl" />,
        buttonColor: "bg-blue-500",
    },
    {
        id: 2,
        title: "Hotels Service",
        description:
            "Find top hotels at best rates with hassle-free booking.",
        icon: <FaHotel className="text-green-500 text-3xl" />,
        buttonColor: "bg-neutral-600",
    },
    {
        id: 3,
        title: "Visa Processing",
        description:
            "Simplify your travel with our hassle-free visa processing services.",
        icon: <FaPassport className="text-orange-500 text-3xl" />,
        buttonColor: "bg-neutral-600",
    },
];

const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const Services = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={animationVariants}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold text-center mb-4 font-lora"
            >
                What Services we provide to our customers.
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={animationVariants}
                viewport={{ once: true }}
                className="text-center text-gray-600 mb-12"
            >
                Find trips that fit a flexible lifestyle
            </motion.p>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={animationVariants}
                viewport={{ once: true }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className={`p-6 rounded-lg shadow-lg bg-white`}
                        variants={itemVariants}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mt-4 font-lora">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                            {service.description}
                        </p>
                        <Link
                            to="/about"
                            className={`inline-block mt-4 btn-style ${service.buttonColor}`}
                        >
                            Learn More
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;

