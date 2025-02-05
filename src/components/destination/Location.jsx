import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const destinations = [
    {
        name: "Japan",
        image: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmFwYW58ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Indonesia",
        image: "https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Egypt",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWd5cHR8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Canada",
        image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "India",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "America",
        image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QU1lcmljYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Switzerland",
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Hongkong",
        image: "https://plus.unsplash.com/premium_photo-1661901524323-f8e2c79fd31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG9uZ2tvbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Palestine",
        image: "https://plus.unsplash.com/premium_photo-1697730130972-627b46998282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGFsZXN0aW5lfGVufDB8fDB8fHww",
    },
    {
        name: "Syria",
        image: "https://images.unsplash.com/photo-1602021007294-6c4ac6901d97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3lyaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Turkey",
        image: "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHVya2V5fGVufDB8fDB8fHww",
    },
    {
        name: "Bangladesh",
        image: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const Destinations = () => {
    return (
        <section className="px-6 py-12 bg-slate-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8 font-lora">
                    Explore All Destinations
                </h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
                >
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative group overflow-hidden rounded-2xl shadow-xl w-68 h-[400px]"
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-end justify-center">
                                <span className="text-white text-xl font-semibold mb-7 font-lora">
                                    {destination.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex items-center justify-center mt-8 gap-6">
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            className={
                                num === 1
                                    ? `bg-blue-500 text-white rounded-sm px-4 py-2 shadow-md hover:bg-blue-700 btn-transition`
                                    : `border border-blue-500 text-blue-500 rounded-sm px-4 py-2 shadow-md hover:bg-blue-500 hover:text-white btn-transition`
                            }
                        >
                            {num}
                        </button>
                    ))}
                    <motion.div
                        initial={{ x: 0 }}
                        whileInView={{ x: 10 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <FaArrowRightLong className="text-blue-500 text-2xl hover:text-blue-600 btn-transition"></FaArrowRightLong>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;

