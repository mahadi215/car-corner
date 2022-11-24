import React from 'react';
import banner1 from '../../../../assest/banner-1.jpg'
import banner2 from '../../../../assest/banner-2.webp'
import banner3 from '../../../../assest/car-2.webp'

const Banner = () => {
    return (
        <div className=' flex justify-center items-center min-h-[80vh]'
            style={{
                background: `url(${banner3})`,
                backgroundSize: 'center',
                
            }}
        >

            <div className=' '>
                <h2 className=' text-xl text-center text-amber-500 font-bold'>Wellcome to the most stunning</h2>
                <br />
                <h2 className='text-4xl font-bold text-center text-white'>Used Car Seller Website</h2>
            </div>
        </div>
    );
};

export default Banner;