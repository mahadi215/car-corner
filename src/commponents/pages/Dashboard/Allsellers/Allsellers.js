import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allsellers = () => {
    const { data: sellers = [] ,refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = res.json();
            return data;
        }
    })
    
    // delete seller
    const handleDeleteseller = user => {
        fetch(`http://localhost:5000/users/deleteUsers/${user.email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('access token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch()
                toast.success(`${user.name} deleted successfully`)
            }
        })
    }

        // verify seller
        const handleVerifyseller = (email)=>{
            fetch(`http://localhost:5000/allCategories/makeverify/${email}`,{
                method: 'PUT',
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.acknowledged){
                    refetch()
                    toast.success('Verify Succesfully')
                }
                else{toast.error(data.message)
                console.log(data);}
            })
        }

    return (
        <div>
            <div className='mx-2'>
                <div className="overflow-x-auto w-full">
                    <h2 className='bg-base-800 font-bold text-center text-2xl my-4 text-amber-500'>{sellers.length} sellers Found</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            sellers.map(seller => <tbody key={seller._id}
                                className='border-b'>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{seller.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {seller.email}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                        <button onClick={() => { handleVerifyseller(seller.email) }} className="btn bg-green-500 btn-xs">Verify</button>
                                            <button onClick={() => { handleDeleteseller(seller) }} className="btn  btn-xs">Delete</button>
                                            
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

export default Allsellers;