import React from "react";
import BookingBanner from "./../components/booking/BookingBanner";
import BookingForm from './../components/booking/BookingForm';
import Faq from './../components/booking/Faq';
import { ToastContainer } from "react-toastify";

const Booking = () => {
    return (
        <>
            <BookingBanner />
            <BookingForm />
            <Faq />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Booking;
