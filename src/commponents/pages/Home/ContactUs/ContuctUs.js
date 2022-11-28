import React from 'react';


const ContuctUs = () => {
  return (
    <div className='my-8'>
      <div className=" shadow p-6 w-full  m-auto lg:w-1/2 bg-base-200">
        <p className='text-center font-bold '>Say Hello</p>
        <h2 className='text-2xl text-center font-bold text-amber-400'> Contuct Us</h2>
        <div className="card ">
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