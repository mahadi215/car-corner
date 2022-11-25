import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ProductTable from './ProductTable/ProductTable';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const email = user.email;
    const [myProducts, setMyProduct] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myProducts/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
                console.log(myProducts);
            })
    }, [])
    return (
        <div className='m-10'>
            <div className=''>
                <Link to='/addProduct' className='btn w-40'>Add Product </Link>

                <div className="overflow-x-auto w-full">
                    <h2 className='bg-base-800 font-bold text-center text-2xl my-4 text-amber-500'>My Products</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Car Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            myProducts.map(myProduct => <ProductTable key={myProduct._id} myProduct={myProduct}>

                            </ProductTable>)
                        }
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;