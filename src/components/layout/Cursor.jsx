import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const outerVariants = {
        default: {
            x: mousePosition.x + 16, // Adjust for the size of the outer div
            y: mousePosition.y + 16,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 0.5,
            },
        },
    };

    const innerVariants = {
        default: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
        hover: {
            scale: 1.5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
            },
        },
    };

    return (
        isVisible && (
            <div className="hidden lg:block">
                <motion.div
                    className="border bg-gray-200/50 backdrop-blur-lg rounded-full w-8 h-8 fixed top-0 left-0 z-[5000] drop-shadow-2xl flex-center-x"
                    variants={outerVariants}
                    animate="default"
                    style={{ originX: 0.5, originY: 0.5 }} // Center the origin for smoother rotation
                >
                    <motion.div
                        className="w-[25%] h-[25%] rounded-full bg-blue-500"
                        variants={innerVariants}
                        animate="default"
                        whileHover="hover"
                    />
                </motion.div>
            </div>
        )
    );
};

export default Cursor;
