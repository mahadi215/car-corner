import React from 'react';
import { useForm } from 'react-hook-form';

const BookingModal = () => {

    const {register,handleSubmit} = useForm()

    const handleBooking =()=>{
        console.log();
    }
    return (
        <>
            <div className='flex justify-center items-center my-10'>
                <div className='w-100 border-2 font-bold p-7'>
                    <h2 className='text-center text-amber-500 font-bold'>Add a Product</h2>
                    <form onSubmit={handleSubmit(handleBooking)} >
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Car Name</span></label>
                                <input type="text" readOnly {...register("CarName", {
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Car Price</span></label>
                                <input type="text" readOnly {...register("CarPrice", {
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
                        <input className='btn bg-amber-500 border-0 w-full  mt-4' value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;