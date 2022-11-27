import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('');
    const navigate = useNavigate()

    const handleSignUp = (data) => {
        setSignUPError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
    
                }
                console.log(userInfo);
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDB(data.name, data.email, data.role)
                        userToken(data.email);
                        
                    })
                    .catch(error => console.log(error))
                toast.success('Register succesfully')
                
            })
            .catch(error => setSignUPError(error.message))
    }

    const saveUserToDB = (name, email, role) => {
        const user = { name, email, role }
        
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                // toast.success('Register succesfully')
            })
            .catch(error => console.log(error))
    }

    const userToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.accessToken){
               
                localStorage.setItem('access token', data.accessToken);
                navigate('/')
            }
           
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 border-2 font-bold p-7'>
                <h2 className='text-xl text-center mb-2'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Choose Your Account Type</span></label>
                        <select className="select select-bordered w-full max-w-xs"
                            {...register("role", {
                                required: "Type is is Required"
                            })} >
                            <option selected>Buyer</option>
                            <option>Seller</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-amber-500 border-0 w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-amber-500' to="/login">Please Login</Link></p>


            </div>
        </div>
    );
};

export default Register;