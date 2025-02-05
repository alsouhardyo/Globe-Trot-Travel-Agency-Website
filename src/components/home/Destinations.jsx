import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Bora Bora in Island",
        description: "Fall in love among the winding streets and snow-covered.",
        rating: 4.9,
        price: "$200",
        duration: "10 days tour",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1489252614717-e24ec918e368?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Azure Haven, Maldives",
        description: "Fall in love among the winding streets and snow-covered.",
        rating: 4.9,
        price: "$200",
        duration: "10 days tour",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1460627390041-532a28402358?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tropical Twilight, Fiji",
        description: "Fall in love among the winding streets and snow-covered.",
        rating: 4.9,
        price: "$200",
        duration: "10 days tour",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1697986441864-0be0ad94573a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Blissful Bay, Seychelles",
        description: "Fall in love among the winding streets and snow-covered.",
        rating: 4.9,
        price: "$200",
        duration: "10 days tour",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const Destinations = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white py-16 px-6 sm:px-12 lg:px-18"
        >
            <div className="text-center mb-12 space-y-4">
                <motion.h4
                    className="text-base text-blue-500 font-semibold font-Lora"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.5 } },
                    }}
                >
                    Wonderful place For You
                </motion.h4>
                <motion.h2
                    className="text-4xl font-semibold font-lora"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        },
                    }}
                >
                    Popular Destinations
                </motion.h2>
                <motion.p
                    className="text-gray-600 font-Lora lg:w-[40vw] mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.7 },
                        },
                    }}
                >
                    Discover our Top Destinations, celebrated by over 100,000
                    satisfied travellers globally.
                </motion.p>
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
            >
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        variants={cardVariants}
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold font-lora">
                                {category.title}
                            </h3>
                            <p className="text-gray-600 text-sm font-Lora mt-2">
                                {category.description}
                            </p>
                            <div className="flex items-center mt-4">
                                <FaStar className="text-yellow-500 mr-1" />
                                <span className="text-gray-600 text-sm">
                                    {category.rating}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-semibold text-blue-500 font-Poppins">
                                    {category.price}
                                </span>
                                <span className="text-gray-500 text-sm font-Lora">
                                    {category.duration}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="text-center mt-12">
                <Link
                    to="/destinations"
                    className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:border-none hover:bg-blue-500 hover:text-white btn-transition"
                >
                    View All Destinations
                </Link>
            </div>
        </motion.section>
    );
};

export default Destinations;
