import React from "react";
import { Link } from "react-router-dom";

const galleryData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1571244051166-5548e340b792?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Mountain view",
    },
    {
        id: 2,
        image: "https://plus.unsplash.com/premium_photo-1733259738916-84b149e808fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Adventurer by sea",
    },
    {
        id: 3,
        image: "https://plus.unsplash.com/premium_photo-1661952057994-22fb8dd3a590?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Kayaking",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1509423470146-51ed487e1c72?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Boat ride",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Beauty of nature in Iceland",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1517057011470-8f36d636e6ca?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Winter adventure",
    },
];

const Gallery = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-24">
                {/* Title */}
                <div className="text-center">
                    <h2
                        className="text-4xl font-bold text-gray-800 font-lora"
                    >
                        Explore the Beauty
                    </h2>
                    <p
                        className="text-lg text-gray-600 mt-4 font-poppins"
                    >
                        Dive into breathtaking landscapes from around the globe.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                    <Link
                        to="/packages"
                        className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:border-none hover:bg-blue-500 hover:text-white btn-transition"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
