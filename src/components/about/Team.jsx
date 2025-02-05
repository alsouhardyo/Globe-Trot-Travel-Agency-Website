import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

const Team = () => {
    const teamMembers = [
        {
            name: "Mark Wood",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEJ1c2luZXNzJTIwbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
            socials: [
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
            ],
        },
        {
            name: "John Doe",
            role: "Manager",
            image: "https://plus.unsplash.com/premium_photo-1661507165209-a912f2e55cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzaW5lc3MlMjBtYW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
            socials: [
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
            ],
        },
        {
            name: "Archer Smith",
            role: "Tour Manager",
            image: "https://plus.unsplash.com/premium_photo-1682431275843-032252318af9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJ1c2luZXNzJTIwbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
            socials: [
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
            ],
        },
    ];

    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-10 font-lora">
                Team & Founder
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        className="w-96 bg-white rounded-lg shadow-lg p-6 text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-md h-60 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {member.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{member.role}</p>
                        <div className="flex justify-center space-x-4">
                            {member.socials.map((social, i) => (
                                <Link
                                    key={i}
                                    to={social.link}
                                    className="text-gray-500 hover:text-gray-900 text-2xl"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;
