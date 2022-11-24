import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assest/car-logo.png'
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [categories, setCatecories] = useState([])

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    useEffect(() => {
        fetch('http://localhost:5000/categorieName')
            .then(res => res.json())
            .then(data => setCatecories(data))
    }
        , [])

    const menuItems = <React.Fragment>
        <li className='hover:text-amber-500'><Link to="/">Home</Link></li>
        <li tabIndex={0}>
            <Link className="justify-between">
                Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100">
                {
                    categories.map(c => <li><Link to={`/allCategories/${c.categorie_id}`}>{c.categorie_name}</Link></li>)
                }

            </ul>
        </li>
        <li className='hover:text-amber-500'><Link to="/about">About</Link></li>

        {
            user?.uid ? <>
                <li className='hover:text-amber-500'><Link to="/dashboard">Dashboard</Link></li>
                <li className='hover:text-amber-500'><Link className="tooltip tooltip-bottom" data-tip={user.displayName}><i className="fa-solid fa-user"></i></Link></li>
                <li className='hover:text-amber-500'><button onClick={handleLogOut} className='btn bg-amber-500 rounded border-0'>Log out</button></li>
            </>
                : <li className='hover:text-amber-500'><Link to="/login">Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-[80px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;