import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';
import Header from '../../pages/shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
        <Header></Header>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    <li><Link to="/dashboard">My Products</Link></li>
                    <li><Link to="/dashboard/addProduct">Add Products</Link></li>
                    {
                         <>
                            <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/adddoctor">All Seller</Link></li>
                            <li><Link to="/dashboard/managedoctors">My Wish List</Link></li>
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