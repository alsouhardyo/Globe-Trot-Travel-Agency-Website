import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

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
        <section className="w-screen py-10 md:px-14 bg-slate-50">
            <form
                className="border max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl lg:text-3xl font-bold font-lora text-center">
                    Book Your Adventure
                </h2>
                <p className="text-center text-sm text-gray-500">
                    Fill in the details below to start your journey.
                </p>

                {/* Full Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        {...register("name", {
                            required: "Full name is required",
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        {...register("phone", {
                            required: "Phone number is required",
                        })}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Destination */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-full space-y-2">
                        <label
                            htmlFor="destination"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Destination
                        </label>
                        <select
                            id="destination"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-blue-500 focus:outline-none"
                            {...register("destination", {
                                required: "Destination is required",
                            })}
                        >
                            <option value="">Select a destination</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="america">America</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
                    <div className="w-full space-y-2">
                        <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Type
                        </label>
                        <select
                            id="type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-blue-500 focus:outline-none"
                            {...register("type", {
                                required: "Type is required",
                            })}
                        >
                            <option value="">Select a type</option>
                            <option value="flight">Flight</option>
                            <option value="hotel">Hotel</option>
                            <option value="car-rental">Car Rental</option>
                            <option value="package">Package</option>
                        </select>
                    </div>
                </div>

                {/* Check-in and Check-out Dates */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-full space-y-2">
                        <label
                            htmlFor="checkin"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Check-in Date
                        </label>
                        <input
                            type="date"
                            id="checkin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            {...register("checkin", {
                                required: "Check-in date is required",
                            })}
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <label
                            htmlFor="checkout"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Check-out Date
                        </label>
                        <input
                            type="date"
                            id="checkout"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            {...register("checkout", {
                                required: "Check-out date is required",
                            })}
                        />
                    </div>
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                    <label
                        htmlFor="people"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Number of People
                    </label>
                    <input
                        type="number"
                        id="people"
                        placeholder="Enter the number of people"
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        {...register("people", {
                            required: "Number of people is required",
                        })}
                    />
                    {errors.people && (
                        <p className="text-red-500 text-sm">
                            {errors.people.message}
                        </p>
                    )}
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                    <label
                        htmlFor="requests"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Special Requests
                    </label>
                    <textarea
                        id="requests"
                        placeholder="Enter any special requests"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        {...register("requests", {
                            required: "Special requests is required",
                        })}
                    ></textarea>
                    {errors.requests && (
                        <p className="text-red-500 text-sm">
                            {errors.requests.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-all"
                >
                    Book Now
                </button>
            </form>
        </section>
    );
};

export default BookingForm;
