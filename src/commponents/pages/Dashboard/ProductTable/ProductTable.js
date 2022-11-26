import React from 'react';
import toast from 'react-hot-toast';

const ProductTable = ({ myProduct }) => {
    const { CarName, CarPrice, imgURL, date , _id} = myProduct;

    const addToAD = (id)=>{
        // console.log(id);

        fetch(`http://localhost:5000/allCategories/advertisment/${id}`,{
            method: 'PUT',

        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                toast.success('Advertisment Added Succesfully')
            }
            else{toast.error(data.message)}
        })
    }


    return (
        <tbody className='border-b'>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imgURL} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{CarName}</div>
                            <span className="badge badge-ghost badge-sm">{date}</span>
                        </div>
                    </div>
                </td>
                <td>
                    {CarPrice}
                </td>
                <td>Available</td>
                <td>
                    <div className="flex items-center space-x-3">
                    <button onClick={()=>{addToAD(_id)}} className="btn  btn-xs">Advertise</button>
                    <button className="btn bg-red-500 btn-xs">Delete</button>
                    </div>
                    
                    
                </td>
            </tr>
        </tbody>
    );
};

export default ProductTable;