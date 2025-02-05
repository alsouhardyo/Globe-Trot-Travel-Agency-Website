import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        reset();
        toast.success(" 👍 Successfully Submitted", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <section className="flex flex-col md:flex-row bg-gray-50">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-8 md:p-16">
                <h2 className="text-4xl font-lora font-bold text-gray-800 mb-6">
                    Get in Touch
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("firstName", { required: "First name is required" })}
                            className="w-1/2 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName", { required: "Last name is required" })}
                            className="w-1/2 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>
                    <div className="flex space-x-4">
                        <input
                            type="email"
                            placeholder="E-mail"
                            {...register("email", { required: "Email is required" })}
                            className="w-1/2 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        <input
                            type="tel"
                            placeholder="Phone"
                            {...register("phone", { required: "Phone is required" })}
                            className="w-1/2 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        {...register("message", { required: "Message is required" })}
                        className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Map Section */}
            <div className="w-full md:w-1/2 relative">
                <iframe
                    title="Google Map"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12674392.679772967!2d-95.712891!3d37.09024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1614282210493!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactUs;


