import React from "react";
import ContactBanner from "./../components/contact/ContactBanner";
import ContactForm from "./../components/home/ContactForm";
import Address from './../components/contact/Address';

const Contact = () => {
    return (
        <>
            <ContactBanner />
            <Address />
            <ContactForm />
        </>
    );
};

export default Contact;
