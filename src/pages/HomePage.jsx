import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import Services from "./../components/home/Services";
import Destination from "./../components/home/Destinations";
import Gallery from "./../components/home/Gallery";
import Testimonials from './../components/home/Testimonials';
import ContactForm from './../components/home/ContactForm';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <Services />
            <Destination />
            <Gallery />
            <Testimonials />
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

export default HomePage;
