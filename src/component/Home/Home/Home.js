import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Banner from '../Banner/Banner'
import Service from '../Service/Service'
import WhyUs from '../WhyUs/WhyUs';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Service></Service>
            <ContactUs></ContactUs>

        </>
    );
};

export default Home;