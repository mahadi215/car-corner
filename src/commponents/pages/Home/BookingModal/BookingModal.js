import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookingModal = ({ categorie, setBookingData, refetch }) => {

    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const CarName = form.CarName.value;
        const imgURL = form.imgURL.value;
        const CarPrice = form.CarPrice.value;
        const Condition = form.Condition.value;
        const BuyerEmail = form.BuyerEmail.value;
        const BuyerName = form.BuyerName.value;
        const BuyerPhone = form.BuyerPhone.value;
        const Location = form.Location.value;

        const booking = {
            CarName, imgURL,CarPrice, Condition, BuyerEmail, BuyerName, BuyerPhone, Location
        }
        console.log(booking);

        fetch('https://car-corner-server.vercel.app/bookings', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    form.reset()
                    setBookingData(null)
                    refetch()
                    
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='flex justify-center items-center my-10'>
                        <div className='w-100 border-2 font-bold p-7'>
                            <h2 className='text-center text-amber-500 font-bold mb-2'>Booking for {categorie.CarName}</h2>
                            <form onSubmit={handleBooking} >
                                <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>
                                    {/* <div className="form-control w-full max-w-xs">
                                                    <label className="label"> <span className="label-text">Car Name</span></label>
                                                    <input type="text" readOnly {...register("CarName", {
                                                    })} className="input input-bordered w-full max-w-xs" />
                                                </div> */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Car Name</span></label>
                                        <input name='CarName' defaultValue={`${categorie.CarName}`} readOnly
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Image</span></label>
                                        <input name='imgURL' defaultValue={`${categorie.imgURL}`} readOnly
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Car Price</span></label>
                                        <input name='CarPrice' defaultValue={`${categorie.CarPrice}`} readOnly className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Condition</span></label>
                                        <input name='Condition' defaultValue={`${categorie.Condition}`} readOnly className="select select-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Your Email</span></label>
                                        <input name='BuyerEmail' defaultValue={`${user?.email}`} readOnly className="select select-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Name</span></label>
                                        <input name='BuyerName' defaultValue={`${user?.displayName}`} readOnly className="select select-bordered w-full max-w-xs"
                                        />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Your Phone Number</span></label>
                                        <input name='BuyerPhone' type="number" required
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Location for meeting</span></label>
                                        <input name='Location' type="text"
                                            required
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>
                                </div>

                                <input className='btn bg-amber-500 border-0 w-full  mt-4' value="submit" type="submit" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default BookingModal;