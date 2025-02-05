import React from "react";
import ContactBanner from "./../components/contact/ContactBanner";
import ContactForm from "./../components/home/ContactForm";
import Address from "./../components/contact/Address";
import { ToastContainer } from "react-toastify";

const Contact = () => {
    return (
        <>
            <ContactBanner />
            <Address />
            <ContactForm />
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

export default Contact;
