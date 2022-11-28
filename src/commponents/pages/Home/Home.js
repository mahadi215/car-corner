import React from 'react';
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
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;