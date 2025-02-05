import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const BannerForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        reset(); // Clear the form after submission
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
        <motion.form
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            onSubmit={handleSubmit(onSubmit)}
            className="w-[85vw] mx-auto lg:relative lg:bottom-[50px] p-6 lg:px-10 lg:py-8 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr_auto] justify-center items-center gap-4 con-shadow bg-white rounded-xl mt-8 lg:mt-0"
        >
            <div className="space-y-2">
                <label htmlFor="destination" className="label">
                    Destination*
                </label>
                <input
                    {...register("destination", { required: true })}
                    placeholder="Enter Destination"
                    name="destination"
                    id="destination"
                    className="input"
                />
                {errors.destination && (
                    <p className="text-red-500 text-sm">
                        This field is required
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label htmlFor="people" className="label">
                    Number of People*
                </label>
                <input
                    {...register("people", {
                        required: true,
                        valueAsNumber: true,
                        min: 1,
                    })}
                    placeholder="No. of People"
                    name="people"
                    id="people"
                    className="input"
                    type="number"
                    min="1"
                />
                {errors.people && (
                    <p className="text-red-500 text-sm">
                        This field is required.
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label htmlFor="checkin" className="label">
                    Checkin Date*
                </label>
                <input
                    {...register("checkin", { required: true })}
                    name="checkin"
                    id="checkin"
                    className="input text-sm"
                    type="date"
                />
                {errors.checkin && (
                    <p className="text-red-500 text-sm">
                        This field is required
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label htmlFor="checkout" className="label">
                    Checkout Date*
                </label>
                <input
                    {...register("checkout", { required: true })}
                    name="checkout"
                    id="checkout"
                    className="input text-sm"
                    type="date"
                />
                {errors.checkout && (
                    <p className="text-red-500 text-sm">
                        This field is required
                    </p>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium text-base px-6 py-3 rounded-full hover:bg-transparent hover:border hover:text-blue-500 hover:border-blue-500 btn-transition gap-2 flex-between-x"
                >
                    <p>Search</p>
                    <FaArrowRightLong />
                </button>
            </div>
        </motion.form>
    );
};

export default BannerForm;
