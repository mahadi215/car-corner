import React from 'react';
import AdvertisedItem from './AdvertisedItem/AdvertisedItem';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import ContuctUs from './ContactUs/ContuctUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-gray-800'>
            <Categories></Categories>
            </div>
            <AdvertisedItem></AdvertisedItem>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;