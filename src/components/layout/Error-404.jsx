import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center px-6 py-10">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-9xl font-bold text-gray-800 mb-4 font-lora"
            >
                !404
            </motion.div>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl font-semibold text-red-500 mb-2 text-center font-lora"
            >
                Oops! Page Not Found
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 text-center max-w-md"
            >
                The page you're looking for might have been moved or doesn't
                exist. Let's get you back on track!
            </motion.p>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Go Back Home
                </Link>
            </motion.div>
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                src="/assets/404.png"
                alt="404 Illustration"
                className="mt-8 w-72 h-72"
            />
        </div>
    );
};

export default NotFoundPage;
