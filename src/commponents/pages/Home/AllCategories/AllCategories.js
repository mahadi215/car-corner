
import React, { } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const AllCategories = () => {
    const categories = useLoaderData();

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
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">edia for free!</p>


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