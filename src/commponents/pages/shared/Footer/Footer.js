import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-gray-800 p-10 text-white footer-section'>
            <div className=' lg:flex justify-around mb-4'>
                <div>
                    <h2 className='text-xl text-left text-amber-500 mb-2'>Links</h2>
                    <ul>
                        <li className='text-left hover:text-amber-500'> <i className="mr-2 fa-solid fa-arrow-right "></i> <Link>Home</Link></li>
                        <li className='text-left hover:text-amber-500'> <i className="mr-2 fa-solid fa-arrow-right "></i> <Link>Categories</Link></li>
                        <li className='text-left hover:text-amber-500'> <i className="mr-2 fa-solid fa-arrow-right "></i> <Link>About</Link></li>
                        <li className='text-left hover:text-amber-500'> <i className="mr-2 fa-solid fa-arrow-right "></i> <Link>Contact Us</Link></li>
                        <li className='text-left hover:text-amber-500'> <i className="mr-2 fa-solid fa-arrow-right "></i> <Link>Privecy Polecy</Link></li>
                    </ul>
                </div>
                <br />
                <div>
                    <h2 className='text-xl text-left text-amber-500 mb-2'>Get In Touch</h2>
                    <p className='text-left'><i class="fa-solid fa-location-dot mr-2"></i> Mirsharai, Chittagong, Bangladesh</p>
                    <p className='text-left my-4'><i class="fa-solid fa-envelope mr-2"></i> mahadihasanbd215@gmail.com</p>
                    <p className='text-left'><i class="fa-solid fa-phone mr-2"></i> 0181555555555</p>
                </div>
            </div>
            <br />
            <hr />
            <p className='mt-6'><i className="fa-regular fa-copyright"></i> Copyright : Car_Corner 2022</p>
        </div>
    );
};

export default Footer;