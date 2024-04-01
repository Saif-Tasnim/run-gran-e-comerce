import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import InputField from '../../components/InputField/InputField';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import img from '../../assets/banner/banner3.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const res = await axios.post('http://localhost:5000/contact' , data);
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Your Message is noted. We will reply you ASAP !',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <section>
            <CommonBanner
                img={img}
                title="Contact Us"
            ></CommonBanner>

            <div className='my-16 flex flex-col-reverse text-center gap-20 lg:flex-row lg:justify-evenly'>
                {/* form box */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SectionTitle
                        title="SEND MESSAGE"
                        subTitle="HAVE A QUESTION?"
                    ></SectionTitle>

                    <div className='mt-16 flex gap-12 mb-8'>

                        <div className='flex flex-col gap-2'>
                            <input type='text' placeholder='Enter Your Name'
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                                className='inputField' />
                            {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <input type='email' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='inputField' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'> Email is required </p>}
                        </div>

                    </div>

                    <div className='flex flex-col'>
                        <textarea rows="6" cols="50" placeholder='Enter Your Contact Message'
                            {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"}
                            className='inputField resize-none' />
                        {errors.message?.type === 'required' && <p role="alert" className='text-error font-medium'> Message is required </p>}
                    </div>

                    <div className='my-9 flex justify-end'>
                        <button className='btn btn-primary rounded-2xl px-3 py-4'>
                            SEND MESSAGE
                        </button>
                    </div>

                </form>

                {/* find us */}
                <div>
                    <SectionTitle
                        title="ADDRESS"
                        subTitle="FIND US"
                    ></SectionTitle>

                    <div className='mt-16'>
                        <p className='pb-1'>Location : </p>
                        <p className='text-[#888585]'>2935 Stockyard Rd. Suite L6 Missoula, MT 59808</p>
                        <p className='pt-6'>Contact : </p>
                        <p className='text-[#888585]'>406-303-4646</p>
                        <p className='pt-6'>Email : </p>
                        <p className='text-primary hover:cursor-pointer'> info@strifesports.com </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;