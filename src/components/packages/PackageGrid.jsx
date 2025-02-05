import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

const countries = [
    {
        category: "Asia",
        countryName: "Indonesia",
        location: "Jakarta",
        personCount: 3,
        dayCount: 12,
        price: 4000,
        reviewCount: 20,
        image: "https://images.unsplash.com/photo-1617687611017-48db8d42fd8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        category: "Europe",
        countryName: "Italy",
        location: "Rome",
        personCount: 2,
        dayCount: 7,
        price: 4200,
        reviewCount: 25,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        category: "Europe",
        countryName: "Germany",
        location: "Berlin",
        personCount: 4,
        dayCount: 10,
        price: 2200,
        reviewCount: 25,
        image: "https://images.unsplash.com/photo-1552553302-9211bf7f7053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        category: "America",
        countryName: "Brazil",
        location: "Rio de Janeiro",
        personCount: 2,
        dayCount: 7,
        price: 4800,
        reviewCount: 20,
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmlvJTIwZGUlMjBKYW5laXJvfGVufDB8fDB8fHww",
    },
    {
        category: "Asia",
        countryName: "Vietnam",
        location: "Hanoi",
        personCount: 3,
        dayCount: 12,
        price: 1800,
        reviewCount: 30,
        image: "https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFub2l8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Europe",
        countryName: "France",
        location: "Paris",
        personCount: 2,
        dayCount: 7,
        price: 2000,
        reviewCount: 15,
        image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Asia",
        countryName: "India",
        location: "New Delhi",
        personCount: 4,
        dayCount: 10,
        price: 3800,
        reviewCount: 35,
        image: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmV3JTIwRGVsaGl8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Asia",
        countryName: "Japan",
        location: "Tokyo",
        personCount: 2,
        dayCount: 7,
        price: 1200,
        reviewCount: 10,
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VG9reW98ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "America",
        countryName: "United States",
        location: "Washington D.C.",
        personCount: 3,
        dayCount: 12,
        price: 3200,
        reviewCount: 25,
        image: "https://images.unsplash.com/photo-1557160854-e1e89fdd3286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2FzaGluZ3RvbiUyMERDfGVufDB8fDB8fHww",
    },
    {
        category: "Europe",
        countryName: "Spain",
        location: "Madrid",
        personCount: 3,
        dayCount: 12,
        price: 2500,
        reviewCount: 20,
        image: "https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFkcmlkfGVufDB8fDB8fHww",
    },
    {
        category: "Asia",
        countryName: "Thailand",
        location: "Bangkok",
        personCount: 4,
        dayCount: 10,
        price: 1500,
        reviewCount: 20,
        image: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Asia",
        countryName: "China",
        location: "Beijing",
        personCount: 2,
        dayCount: 7,
        price: 3500,
        reviewCount: 30,
        image: "https://images.unsplash.com/photo-1537410056906-d336ddf64024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVpamluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        category: "Ocenia",
        countryName: "Australia",
        location: "Canberra",
        personCount: 2,
        dayCount: 7,
        price: 2800,
        reviewCount: 10,
        image: "https://images.unsplash.com/photo-1565419081241-df2d7e716dc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FuYmVycmF8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Ocenia",
        countryName: "New Zealand",
        location: "Wellington",
        personCount: 4,
        dayCount: 10,
        price: 3000,
        reviewCount: 15,
        image: "https://images.unsplash.com/photo-1589871973133-b7e4b4299345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2VsbGluZ3RvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        category: "Europe",
        countryName: "America",
        location: "Ottawa",
        personCount: 4,
        dayCount: 10,
        price: 4500,
        reviewCount: 30,
        image: "https://images.unsplash.com/photo-1413745066752-18f122473e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3R0b3dhfGVufDB8fDB8fHww",
    },
];

const PackageGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Asia", "Europe", "Ocenia", "America"];

    const filteredCountries =
        selectedCategory === "All"
            ? countries
            : countries.filter(
                  (country) => country.category === selectedCategory
              );
    return (
        <section className="container mx-auto px-6 py-20 space-y-14">
            <div className="flex-center-y gap-3">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold font-lora text-center"
                >
                    Our Packages
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="text-center lg:w-1/2"
                >
                    Discover our diverse range of packages tailored to meet all
                    your travel desires and preferences, ensuring memorable
                    experiences and unforgettable adventures.
                </motion.p>
            </div>
            <div className="flex-center-x gap-8 flex-wrap">
                {categories.map((category, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1 * index,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        className={`text-lg font-lora px-6 py-2 rounded-md shadow-md btn-transition ${
                            selectedCategory === category
                                ? "bg-blue-500 text-white"
                                : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center"
                layout
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
            >
                <AnimatePresence>
                    {filteredCountries.map((country, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full bg-white rounded-xl shadow-xl"
                        >
                            <img
                                src={country.image}
                                alt={country.countryName}
                                className="relative w-full h-[250px] object-cover rounded-xl"
                            />
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex justify-start items-center gap-2">
                                    <LuMapPin className="text-blue-500" />
                                    <p className="text-sm text-gray-600 font-medium">
                                        {country.countryName}
                                    </p>
                                </div>
                                <p className="text-xl font-medium font-lora">
                                    {country.location}
                                </p>
                                <div className="flex gap-6">
                                    <div className="flex gap-2">
                                        <IoPersonAddOutline className="text-blue-500" />
                                        <p>{country.personCount} People</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <IoMdTime className="text-blue-500" />
                                        <p>{country.dayCount} Days</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <p>(Reviews: {country.reviewCount})</p>
                                </div>
                                <hr />
                                <div>
                                    <p className="text-lg font-medium">
                                        Price: ${country.price}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
export default PackageGrid;
