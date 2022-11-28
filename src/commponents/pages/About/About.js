import React from 'react';
import { Link } from 'react-router-dom';
// import car from '../../../assest/car-2.webp'
import bg from '../../../assest/banner-2.webp'
import logo from '../../../assest/car-logo.png'

const About = () => {
    return (
        <div className='p-0'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bg}")` }}>
                <div className="hero-overlay brightness-50 bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <img className='w-1/2 m-auto' src={logo} alt="" />
                        <h1 className="mb-5 text-5xl font-bold">car Corner</h1>
                        <p className="mb-5">Car Corner is a Buy Sell website. We allways trying to make your life easy. Here you can sell your used car and buye a used car.</p>
                        <Link to='' className="btn border-0 bg-amber-500">Subscribe</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;