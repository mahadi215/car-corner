import React from 'react';

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

                    <>{categorie.SellerName ? <p className=' font-bold'>Seller : {categorie.SellerName} <i className="fa-regular bg-amber-500 fa-badge-check"></i></p>
                        : 'seller name not found'}</>

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