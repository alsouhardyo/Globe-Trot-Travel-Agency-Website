import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import Button from "./Button";

const Header = () => {
    const navItems = [
        "Home",
        "About",
        "Destinations",
        "Packages",
        "Booking",
        "Contact",
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    // Sticky Header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header
            className={`w-full ${
                sticky ? "header-effect" : "bg-transparent shadow-none"
            }`}
        >
            <div className="md:flex-between-x gap-4 px-8 py-4 md:px-10 md:py-6 lg:px-14 lg:py-6">
                <div className="flex-between-x">
                    <Link
                        to={"/"}
                        className="font-lora text-xl lg:text-2xl font-medium cursor-pointer"
                    >
                        Globe <span className="text-blue-500 italic">Trot</span>
                    </Link>
                    {/* Mobile menu toggle */}
                    <div
                        onClick={toggleMobileMenu}
                        className="md:hidden relative"
                    >
                        <FiMenu
                            className={isMobileMenuOpen ? "hidden" : "block"}
                        />
                        <RxCross2
                            className={
                                isMobileMenuOpen
                                    ? "block absolute top-0 right-0 z-40 text-xl"
                                    : "hidden"
                            }
                        />
                    </div>
                </div>
                {/* Navigation */}
                <nav
                    className={
                        isMobileMenuOpen
                            ? "absolute top-0 left-0 z-30 shadow-md w-full text-center py-8 bg-white/30 backdrop-blur-lg"
                            : "hidden md:flex-between-x gap-8"
                    }
                >
                    <ul
                        className={
                            isMobileMenuOpen
                                ? "space-y-4 font-semibold"
                                : "md:flex-between-x md:gap-6 lg:gap-10"
                        }
                    >
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`hover:text-blue-500 transition-colors duration-300 ${
                                    isMobileMenuOpen ? "text-2xl" : ""
                                }`}
                            >
                                <Link
                                    to={
                                        item === "Home"
                                            ? "/"
                                            : `/${item.toLowerCase()}`
                                    }
                                    className="text-sm"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button />
                </nav>
            </div>
        </header>
    );
};

export default Header;
