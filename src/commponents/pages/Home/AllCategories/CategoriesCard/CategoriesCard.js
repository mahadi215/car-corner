import React from 'react';
import verifyicon from '../../../../../assest/icon/verified.png'

const CaregoriesCard = ({categorie, setBookingData}) => {
    return (
        <>
            <div 
                className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={categorie.imgURL} alt="Shoes" className=" h-50 w-full" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title">Name : {categorie.CarName}</h2>
                    <p>Price : {categorie.CarPrice}</p>
                    <p>Location : {categorie.Location}</p>
                    <p>Year Of Purchase : {categorie.YearOfPurchase}</p>

                    <div className='flex items-center justify-between'>
                        <>{categorie.SellerName ? <p className=' font-bold'>Seller : <> {categorie.SellerName} </></p>

                            : 'seller name not found'}</>
                        {categorie.Verifystatus ? <img className='w-10 h-10  text-green-500' src={verifyicon} alt="" /> : <span>Not Verified</span>}
                    </div>

                    <p>Posted : {categorie.date}</p>
                    <div className="card-actions">
                        <button onClick={() => setBookingData(categorie)}><label htmlFor="my-modal-3" className="btn btn-dark">BOOK</label> </button>

                    </div>
                </div>
               
                </div>
            </>
            );
};

            export default CaregoriesCard;