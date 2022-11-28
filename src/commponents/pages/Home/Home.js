import React from 'react';
import About from '../About/About';
import AdvertisedItem from './AdvertisedItem/AdvertisedItem';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import ContuctUs from './ContactUs/ContuctUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItem></AdvertisedItem>
            <About></About>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;