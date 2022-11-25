
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllCategories = () => {
    const categories = useLoaderData();
    const {user} = useContext(AuthContext)

    const { register, handleSubmit } = useForm()

    const handleBooking = (data) => {
        console.log(data);
    }

    return (
        <div className=' my-10 '>
            {/* <div className='bg-base-200 p-6 lg:w-1/4'>
                <h2 className='mb-4 bg-amber-500 p-2 font-bold rounded'>Categories</h2>
                <div>
                    <button>Supercar</button>
                    <p>Pickup</p>
                    <p>Shedan</p>
                </div>
            </div> */}
            <h2 className='text-2xl text-center text-amber-500 m-4'>This Categories Have {categories.length} Items</h2>
            <div className=' m-auto p-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    categories.map(categorie => <div
                        className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={categorie.imgURL} alt="Shoes" className=" h-50 w-full" />
                        </figure>
                        <div className="card-body items-center text-center">

                            <h2 className="card-title">Name : {categorie.CarName}</h2>
                            <p>Price : {categorie.CarPrice}</p>
                            <p>Location : {categorie.Location}</p>
                            <p>Year Of Purchase : {categorie.YearOfPurchase}</p>

                            <>{categorie.SellerName ? <p className=' font-bold'>Seller : {categorie.SellerName} <i className="fa-regular bg-amber-500 fa-badge-check"></i></p>
                                : 'seller name not found'}</>

                            <p>Posted : {categorie.date}</p>
                            <div className="card-actions">
                                <button><label htmlFor="my-modal-3" className="btn btn-dark">BOOK</label> </button>

                            </div>
                        </div>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />

                        {/* booking modal */}

                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <div className='flex justify-center items-center my-10'>
                                    <div className='w-100 border-2 font-bold p-7'>
                                        <h2 className='text-center text-amber-500 font-bold mb-2'>Booking for {categorie.CarName}</h2>
                                        <form onSubmit={handleSubmit(handleBooking)} >
                                            <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>
                                                {/* <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Car Name</span></label>
                                                    <input type="text" readOnly {...register("CarName", {
                                                    })} className="input input-bordered w-full max-w-xs" />
                                                </div> */}
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Car Name</span></label>
                                                    <input value={`${categorie.CarName}`} readOnly {...register("CarName")} 
                                                    className="input input-bordered w-full max-w-xs" />
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Car Price</span></label>
                                                    <input value={`${categorie.CarPrice}`} readOnly {...register("CarPrice")} className="input input-bordered w-full max-w-xs" />
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Condition</span></label>
                                                    <input value={`${categorie.Condition}`} readOnly className="select select-bordered w-full max-w-xs"
                                                        {...register("Condition")}/>
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Your Email</span></label>
                                                    <input value={`${user.email}`} readOnly className="select select-bordered w-full max-w-xs"
                                                        {...register("Email")}/>
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Name</span></label>
                                                    <input value={`${user.displayName}`} readOnly className="select select-bordered w-full max-w-xs"
                                                        {...register("Name")}/>
                                                </div>

                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Your Phone Number</span></label>
                                                    <input type="number" {...register("Number", {
                                                        required: "Phone Number is Required"
                                                    })} className="input input-bordered w-full max-w-xs" />
                                                </div>
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Location for meeting</span></label>
                                                    <input type="text" {...register("Location", {
                                                        required: "Location is Required"
                                                    })} className="input input-bordered w-full max-w-xs" />
                                                </div>
                                            </div>

                                            <input className='btn bg-amber-500 border-0 w-full  mt-4' value="submit" type="submit" />
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* <BookingModal item={categ}></BookingModal> */}
        </div>
    );
};

export default AllCategories;