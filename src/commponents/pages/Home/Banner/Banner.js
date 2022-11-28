import React from 'react';
// import banner1 from '../../../../assest/banner-1.jpg'
import banner2 from '../../../../assest/car-2.webp'
import banner3 from '../../../../assest/car-3.webp'
import './Banner.css'


const Banner = () => {
    return (
        <div className='  min-h-[80vh]'
            style={{
                background: `url(${banner3})`,
                backgroundSize: 'cover',
                backgroundPositionY: 'center'
                
                
            }}
        >

            <div className='w-full min-h-[80vh] flex justify-around items-center' style={{
                background: 'rgba(0, 0, 0, 0.8)',
                // background: 'linear-gradient(90deg, rgba(0,0,0,0.8),rgba(0,0,0,0.4) )'
                
            }}>
               
            <div className=' border-l-4 border-amber-500 pl-2 banner-box '>
                <h2 className=' banner-title text-2xl text-left  text-amber-500 font-bold'>Welcome to the most stunning</h2>
                
                <h2 className='banner-title2 text-4xl text-left font-bold text-white'>Used Car Seller Website</h2>
            </div>
            <img className='lg:w-1/3 rounded  hidden lg:block' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner;