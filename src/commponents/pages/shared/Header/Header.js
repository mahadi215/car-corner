import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assest/car-logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl overflow-hidden">
                <img className='w-[80px] ' src={logo} alt="" />
                </Link>
                
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                  <li><Link>Home</Link></li>
                  <li><Link>Category</Link></li>
                 <li> <Link>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;