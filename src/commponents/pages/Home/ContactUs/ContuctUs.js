import React from 'react';
import { Link } from 'react-router-dom';

const ContuctUs = () => {
    return (
        <div className='my-8 '>
            <div className=" shadow p-6 w-full mx-6 lg:m-auto lg:w-1/2 bg-base-600">
                <h2 className='text-2xl text-center'> Contuct Us</h2>
      <div className="card-body ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="Message" className="input h-32 input-bordered" />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-amber-500">Submit</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContuctUs;