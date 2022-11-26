import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItem = () => {
    const [bookingData, setBookingData] = useState(null);


    const {data: advertisments = [] , refetch, isLoading} = useQuery({
        queryKey: ['advertisments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisment');
            const data = await res.json();
            console.log(data);
            return data;
        }
    });

    if(isLoading)
    return <progress className="progress w-56 my-20"></progress>;

    return (
        <div className='py-16'>
            <h2 className='text-3xl text-center'>Advertised Items</h2>
            <div className=' my-10 '>
            <div className=' m-auto p-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    advertisments.map(categorie => <AdvertisedCard
                         key={categorie._id}
                          categorie={categorie}
                           setBookingData={setBookingData}>
                           </AdvertisedCard>
                    
                        )}
                
            </div>

            {
                bookingData &&
                <BookingModal
                categorie={bookingData}
                setBookingData={setBookingData}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
        </div>
    );
};

export default AdvertisedItem;