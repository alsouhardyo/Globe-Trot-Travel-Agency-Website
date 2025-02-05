import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "motion/react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqList = [
        {
            question: "What is the cancellation policy for my trip?",
            answer: "We have a 30-day cancellation policy. If you cancel within 30 days of your trip, we will refund your deposit in full. If you cancel within 14 days of your trip, we will refund 50% of your deposit. If you cancel within 7 days of your trip, we will refund 25% of your deposit. If you cancel within 3 days of your trip, we will not be able to provide a refund.",
        },
        {
            question: "What is the best way to get to the airport?",
            answer: "The best way to get to the airport is by taking a taxi or shuttle service. The taxi ride should take around 20-30 minutes and the shuttle service should take around 30-40 minutes. You can also take public transportation, such as the bus or train, but it will take longer.",
        },
        {
            question: "Can I book a trip for a special occasion?",
            answer: "Yes, we offer customized trips for special occasions such as honeymoons, anniversaries, and birthdays. Please contact us for more information.",
        },
        {
            question: "What is the best way to exchange currency?",
            answer: "The best way to exchange currency is to use a currency exchange service. You can also use an ATM to withdraw local currency. You should avoid exchanging currency at a bank or currency exchange office as the rates may not be as good.",
        },
        {
            question: "What is the best way to get around the city?",
            answer: "The best way to get around the city is by using public transportation. The city has a well-developed public transportation system that includes buses, trains, and subways. You can also take a taxi or ride-sharing service if you prefer not to use public transportation. You should avoid driving a car as the roads can be congested and parking can be difficult to find.",
        },
    ];

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto px-10 py-14 space-y-10">
            <div className="space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-center text-3xl font-semibold font-lora"
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500"
                >
                    Here are some frequently asked questions that may help you
                    better understand our policies and procedures. If you have
                    any other questions, please don't hesitate to contact us.
                </motion.p>
            </div>
            <div className="space-y-6">
                {faqList.map((faq, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        key={index}
                        className="border rounded-md overflow-hidden"
                    >
                        <button
                            className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-left bg-gray-100 hover:bg-gray-100 focus:outline-none"
                            onClick={() => handleAccordionClick(index)}
                        >
                            <span className="font-lora">{faq.question}</span>
                            {activeIndex === index ? (
                                <FaChevronUp className="w-5 h-5" />
                            ) : (
                                <FaChevronDown className="w-5 h-5" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                                activeIndex === index
                                    ? "max-h-[500px]"
                                    : "max-h-0"
                            }`}
                        >
                            <div className="px-4 py-3 bg-white">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
