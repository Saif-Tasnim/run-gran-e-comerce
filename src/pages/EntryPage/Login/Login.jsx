import React, { useState } from 'react';
import img from '../../../assets/login/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField/InputField';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { HiArrowSmallLeft } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const { signIn, googleIn } = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {

        signIn(data?.email, data?.password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign In Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    };


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }


    const handleGoogle = async () => {
        googleIn()
            .then(async (res) => {
                const loggedUser = res.user;
                const newData = {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    photo: loggedUser.photoURL
                }
                // console.log(newData);
                const resData = await axios.post('https://run-gran-server-flax.vercel.app/users', newData);
                
                if (resData.data.insertedId > 0) {
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sign up successful !',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }

    return (
        <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2'>

            {/* left part */}
            <div className='p-8 w-full lg:w-1/2 border-r-2 bg-white'>
                <Link to="/" className='inline-flex items-center gap-2 fontSecondary text-xl font-bold text-primary'><HiArrowSmallLeft className='h-6 w-6' />Back</Link>
                <img src={img} alt="" className='w-2/3 mx-auto' />
                <p className='mt-7 text-center'> Don't Have An Account ? </p>

                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/signUp">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary hover:text-white  hover:bg-primary transition-all duration-300'>Create An Account</button>
                    </Link>
                </div>

            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Welcome Back !
                </h1>
                <p className='text-center'> Sign in to continue .... </p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>
                    <input type='email' placeholder='Enter Your Email'
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className='inputField' />
                    {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}

                    <div className='inline-flex items-center relative'>
                        <input type={type} placeholder='Enter Your Password'
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                            className='inputField' />
                        <div className='absolute right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                            }
                        </div>
                    </div>
                    {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

                    <input type="submit" value="Sign In" className='btnPrimary' />
                </form>

                <div className="divider my-9">Or Continue With </div>

                <div className='flex gap-10 justify-center mt-4'>
                    <button className='border border-base-300 px-4 py-4 rounded-full hover:bg-base-200 hover:text-primary transition-all duration-500' onClick={handleGoogle}><FaGoogle className='w-7 h-7' /></button>

                    <button className='border border-base-300 px-4 py-4 rounded-full hover:bg-base-200 hover:text-primary transition-all duration-500'><FaFacebookF className='w-7 h-7' /></button>
                </div>

            </div>

        </section>
    );
};

export default Login;