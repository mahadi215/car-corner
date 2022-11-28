import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCatecories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categorieName')
            .then(res => res.json())
            .then(data => setCatecories(data))
    }
        , [])
    return (
        <div 
         className=' bg-gray-800 p-2' id='categories'>
            <h2 className='text-center text-xl font-bold text-amber-500'>CATEGORIES</h2>
            <br />
            <h2 className='text-center text-3xl font-bold text-white'>FIND YOUR DREAM CAR</h2>
            <div className='grid gap-6 md:w-2/3 lg:w-1/2 w-full m-auto my-10 grid-cols md:grid-cols-3  lg:grid-cols-3'>
                {
                    categories.map(categorie => <div
                        className=" card bg-base-100 shadow-xl">
                        <figure className="px-2 pt-2">
                            <img className='w-2/3' src={categorie.img} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-amber-500">{categorie.categorie_name}</h2>
                            <Link to={`/allCategories/${categorie.categorie_id}`} className='btn btn-sm w-full bg-amber-500 border-0'>SEE ALL</Link>
                        </div>
                    </div>)
                }
                {/* */}

            </div>
        </div>
    );
};

export default Categories;