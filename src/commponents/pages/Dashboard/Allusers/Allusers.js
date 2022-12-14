import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://car-corner-server.vercel.app/allusers')
            const data = res.json();
            return data;
        }
    })

    const handleDeleteUser = user => {
        fetch(`https://car-corner-server.vercel.app/users/deleteUsers/${user.email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('access token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                
                toast.success(`${user.name} deleted successfully`)
                refetch()
            }
        })
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
                                            <button onClick={() => { handleDeleteUser(user) }} className="btn  btn-xs">Delete</button>
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