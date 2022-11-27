import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers')
            const data = res.json();
            return data;
        }
    })

    const handleDeleteUser = () => {

    }
    return (
        <div>
            <div className='mx-2'>
                <div className="overflow-x-auto w-full">
                    <h2 className='bg-base-800 font-bold text-center text-2xl my-4 text-amber-500'>{users.length} Users Found</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            users.map(user => <tbody key={user._id}
                                className='border-b'>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <button onClick={() => { handleDeleteUser() }} className="btn  btn-xs">Delete</button>
                                            {/* <button className="btn bg-red-500 btn-xs">Make Admin</button> */}
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

export default Allusers;