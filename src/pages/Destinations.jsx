import React from "react";
import DestinationBanner from "./../components/destination/DestinationBanner";
import Location from './../components/destination/Location';
import Faq from './../components/booking/Faq';

const Destinations = () => {
    return (
        <>
            <DestinationBanner />
            <Location />
            <Faq />
        </>
    );
};

export default Destinations;
