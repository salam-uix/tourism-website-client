import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import Popular from '../Popular/Popular';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Services></Services>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;