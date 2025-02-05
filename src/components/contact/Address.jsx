import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const contactData = [
    {
        icon: FaMapMarkerAlt,
        title: "ADDRESS",
        subTitle: "FOR VISIT OUR OFFICE",
        description: "26, Old Brozon Mall, Singapore",
        linkText: "TOUR FIND ON MAP",
    },
    {
        icon: FaPhoneAlt,
        title: "PHONE",
        subTitle: "FOR MOBILE FANS",
        description: "Call Us On: 444 896-0234 & 555 420-8794",
        linkText: "GET CALL BACK",
    },
    {
        icon: FaEnvelope,
        title: "EMAIL",
        subTitle: "FOR ASK ANYTHING",
        description: "supportyou@travel.com & info@example.com",
        linkText: "LIVE CHAT",
    },
    {
        icon: FaClock,
        title: "OP. HRS",
        subTitle: "FOR COMFORTABLE VISIT",
        description: "Mon - Sat: 10.00am to 7.00pm Friday: Closed",
        linkText: "APPOINTMENT",
        bgColor: "bg-gray-50",
    },
];

const ContactInfo = () => {
    return (
        <section className="container mx-auto px-6 py-24 space-y-10">
            <div className="text-center space-y-4 flex-center-y ">
                <h2 className="text-4xl font-bold font-lora">Contact Us</h2>
                <p className="md:w-1/2">
                    Reach us through our contact form, phone, email, or social
                    media.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {contactData.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index ,ease: "easeInOut" }}
                        viewport={{ once: true }}
                        key={index}
                        className={`border rounded-lg shadow-sm p-8 w-64 text-center ${item.bgColor} hover:border-none hover:shadow-xl transition-all duration-500 ease-in-out space-y-6`}
                    >
                        <item.icon className="text-blue-500 text-4xl mx-auto" />
                        <div className="space-y-2">
                            <h3 className="font-bold font-lora text-2xl">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {item.subTitle}
                            </p>
                        </div>
                        <p className="text-gray-500">{item.description}</p>
                        <Link
                            to="#"
                            className="font-semibold hover:text-blue-500 btn-transition cursor-pointer block"
                        >
                            {item.linkText}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ContactInfo;
