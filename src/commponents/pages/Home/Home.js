import React from 'react';
import AdvertisedItem from './AdvertisedItem/AdvertisedItem';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItem></AdvertisedItem>
        </div>
    );
};

export default Home;