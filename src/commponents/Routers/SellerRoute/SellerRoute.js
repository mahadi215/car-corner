import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../Hooks/useSeller';
const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    // const location = useLocation();
    console.log(isSeller);
    if (loading ) {
        return <progress className="progress w-56 my-20"></progress>;
    }

    if ( isSeller) {
        console.log(isSeller);
        return children;
    }

    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;