import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../home/Header";
import Loader from "./Loader";
import { useLoading } from "../context/LoadingContext"; // Import the context hook
import Footer from "./../home/Footer";
import Scroller from './Scroller';

const Layout = () => {
    const { isLoading, setIsLoading } = useLoading(); // Get isLoading and setIsLoading from context
    const location = useLocation();

    useEffect(() => {
        const handleRouteChange = async () => {
            setIsLoading(true); // Set isLoading in the context
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsLoading(false); // Set isLoading in the context
        };

        handleRouteChange();
    }, [location, setIsLoading]); // Include setIsLoading in the dependency array

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
        },
    };
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <motion.div
                    key={location.pathname}
                    variants={variants}
                    initial="hidden"
                    animate={!isLoading && "visible"}
                >
                    <Scroller />
                    <Header />
                    <Outlet />
                    <Footer />
                </motion.div>
            )}
        </>
    );
};

export default Layout;
