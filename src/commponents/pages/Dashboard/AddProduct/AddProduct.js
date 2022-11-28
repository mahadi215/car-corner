import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleProductAdd = (data) => {
        const date = new Date();
        
        const product = {
            imgURL: data.imgURL,
            Condition: data.Condition,
            Number: data.Number,
            Location: data.Location,
            categorie_id: data.Categorie,
            Description: data.Description,
            YearOfPurchase: data.YearOfPurchase,
            CarName: data.CarName,
            CarPrice: data.CarPrice,
            SellerName: user?.displayName,
            SellerEmail: user?.email,
            date,
        }
        console.log(product);

        fetch('https://car-corner-server.vercel.app/allCategories', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(PostData => {
                console.log(PostData);
                if (PostData.acknowledged) {
                    toast.success('Added confirmed');
                    navigate('/dashboard/myproduct' )
                    
                    
                }
                else{
                    toast.error(PostData.message);
                }

            })
    }

    return (
        <div>
            {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}

            <div className='flex justify-center items-center my-10'>
                <div className='w-100 border-2 font-bold p-7'>
                    <h2 className='text-center text-amber-500 font-bold'>Add a Product</h2>
                    <form onSubmit={handleSubmit(handleProductAdd)} >
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Car Name</span></label>
                                <input type="text" {...register("CarName", {
                                    required: "Car Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Car Image URL</span></label>
                                <input type="text" {...register("imgURL", {
                                    required: "Car Image URL is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Car Price</span></label>
                                <input type="text" {...register("CarPrice", {
                                    required: "Car Price is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Condition</span></label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("Condition", {
                                        required: "Product Condition is Required"
                                    })} >
                                    <option selected>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Phone Number</span></label>
                                <input type="number" {...register("Number", {
                                    required: "Phone Number is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Location</span></label>
                                <input type="text" {...register("Location", {
                                    required: "Location is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Categorie</span></label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("Categorie", {
                                        required: "Product Categorie is Required"
                                    })} >
                                    <option value={1} selected>Super Car</option>
                                    <option value={2}>Pickup</option>
                                    <option value={3}>Shedan</option>
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Description</span></label>
                                <input type="text" {...register("Description", {
                                    required: "Description is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Year of purchase</span></label>
                                <input type="number" {...register("YearOfPurchase", {
                                    required: "Year of purchase is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <input className='btn bg-amber-500 border-0 w-full  mt-4' value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;