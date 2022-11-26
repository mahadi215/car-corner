
import React, { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoriesCard from './CategoriesCard/CategoriesCard';

const AllCategories = () => {
    const categories = useLoaderData();
    
    const [bookingData, setBookingData] = useState(null)

    // const { register, handleSubmit } = useForm()
    

  

    return (
        <div className=' my-10 '>
            <h2 className='text-2xl text-center text-amber-500 m-4'>This Categories Have {categories.length} Items</h2>
            <div className=' m-auto p-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    categories.map(categorie => <CategoriesCard key={categorie._id} categorie={categorie} setBookingData={setBookingData}></CategoriesCard>
                    
                        )}
                
            </div>

            {
                bookingData &&
                <BookingModal
                categorie={bookingData}
                setBookingData={setBookingData}
                ></BookingModal>
            }
        </div>
    );
};

export default AllCategories;