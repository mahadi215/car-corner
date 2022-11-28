import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItem = () => {
    const [bookingData, setBookingData] = useState(null);


    const {data: advertisments = [] , refetch, isLoading} = useQuery({
        queryKey: ['advertisments'],
        queryFn: async () => {
            const res = await fetch('https://car-corner-server.vercel.app/advertisment');
            const data = await res.json();
            // console.log(data);
            return data;
        }
    });

    if(isLoading)
    return <progress className="progress w-56 m-auto my-20"></progress>;

    return (
        <div className='p-2 lg:p-16 '>
            <h2 className='text-3xl text-center'>Advertised Items</h2>
            <div className=' my-10 '>
            <div style={{marginTop: '-32'}} className=' m-auto  p-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
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