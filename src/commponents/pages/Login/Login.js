import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {logIn, googleSignIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const provider =new GoogleAuthProvider()

    const handleGooleLogin = ()=>{
        googleSignIn(provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('login succesfully')
            navigate(from, {replace: true})
            
        })
    }
     const handleLogin = (data)=>{
        setLoginError('')
            logIn(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('login succesfully')
                navigate(from, {replace: true})
                
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
     }
    return (
            <div className='h-[700px] flex justify-center items-center'>
                <div className='w-96 p-7 border-2'>
                    <h2 className='text-xl text-center font-bold '>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text">Forget Password?</span></label>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-amber-500 border-0 w-full' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <br />
                    <p>New to Car Corner <Link className='text-amber-500' to="/register">Create new Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGooleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
    );
};

export default Login;