
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
            <h2 className='text-2xl text-center text-amber-500 m-4'>All cars for</h2>
            <div className=' m-auto p-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    categories.map(categorie => <div
                        className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={categorie.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{categorie.name}</h2>
                            <p>Brand : {categorie.brand}</p>
                            <p>Transmission : {categorie.trnsmission}</p>
                            <p>Model : {categorie.model}</p>
                            <div className="card-actions">
                                <Link to={categorie._id} className="btn btn-dark">Book</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCategories;