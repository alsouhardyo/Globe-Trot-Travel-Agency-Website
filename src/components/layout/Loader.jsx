import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useLoading } from "../context/LoadingContext";

const Loader = () => {
    const { isLoading } = useLoading(); // Get isLoading from context
    return (
        <div
            className={`fixed inset-0 flex justify-center items-center flex-col bg-white z-50 ${
                isLoading
                    ? "block opacity-100 pointer-events-auto"
                    : "hidden opacity-0 pointer-events-none"
            }`}
        >
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#2563eb"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p className="font-lora text-lg text-gray-700">Loading...</p>
        </div>
    );
};

export default Loader;
