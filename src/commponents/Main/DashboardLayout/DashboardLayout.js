import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Footer from '../../pages/shared/Footer/Footer';
import Header from '../../pages/shared/Header/Header';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div className=''>
        <Header></Header>
        <div className="drawer my-10 drawer-mobile bg-dark">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-dark">
                <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                    {
                        isSeller &&
                        <><li><Link to="/dashboard">My Products</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Products</Link></li></>
                    }
                    <li><Link to="/dashboard/mywishlist">My Wish List</Link></li>
                    { 
                    isAdmin &&
                         <>
                            <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/allsellers">All Seller</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default DashboardLayout;