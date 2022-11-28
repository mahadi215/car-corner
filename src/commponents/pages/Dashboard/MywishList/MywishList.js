
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MywishList = () => {
    const { user } = useContext(AuthContext)
    const email = user.email;
    const [myBookings, setMyBookings] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/mybookings/${email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                console.log(myBookings);
            })
    }, [])
    return (
        <div>
            <h2>coming soon</h2>
            <div className='mx-2'>
                <div className="overflow-x-auto w-full">
                    <h2 className='bg-base-800 font-bold text-center text-2xl my-4 text-amber-500'>You Have {myBookings.length} Bookings</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            myBookings.map(booking => <tbody key={booking._id}
                                className='border-b'>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src={booking.imgURL} alt='' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.CarName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.CarPrice}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <Link to='/dashboard/payment' className="btn bg-green-500 btn-xs">Pay</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                        <tfoot>
                            <tr>
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

export default MywishList;