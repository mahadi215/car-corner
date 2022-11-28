import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import Allusers from '../../pages/Dashboard/Allusers/Allusers';
import MywishList from '../../pages/Dashboard/MywishList/MywishList';
import Footer from '../../pages/shared/Footer/Footer';
import Header from '../../pages/shared/Header/Header';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    
    return (
        <div className=''>
        <Header></Header>
        <div className="drawer my-10 drawer-mobile bg-dark">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet>
                </Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 bg-amber-400 text-base-content ">
                    {
                        isSeller &&
                                 <><li><Link className='font-bold' to="/dashboard/myproduct">My Products</Link></li>
                                 <li><Link className='font-bold' to="/dashboard/addProduct">Add Products</Link></li></>
                    }
                    {
                        isBuyer &&
                        <li><Link className='font-bold' to="/dashboard/mywishlist">My Wish List</Link></li>
                    }
                    { 
                    isAdmin &&
                         <>
                            <li><Link className='font-bold'  to="/dashboard/allusers">All users</Link></li>
                            <li><Link className='font-bold' to="/dashboard/allsellers">All Seller</Link></li>
                        </>
                    }
{console.log(isBuyer)}
                </ul>

            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default DashboardLayout;