import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { IoCaretDown } from "react-icons/io5";

const Banner = () => {
    return (
        <section className='mb-14'>
            <Carousel className='text-center' autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true} showStatus={false}>

                <div className='relative'>
                    <img src="https://i.ibb.co/f82252b/banner2.jpg" className='h-72 lg:h-[600px]' alt='Dates' />
                    <div className='absolute top-0 w-full h-full bg-secondary bg-opacity-70 flex flex-col justify-center items-center'>


                        <h1 className='text-white text-3xl lg:text-6xl uppercase font-bold'>Create Your Winning Look</h1>

                        <Link to="/shop-all" className='mt-10 border px-6 py-6 rounded-full flex items-center justify-center border-primary animate-pulse'>
                            <span className='flex flex-col items-center justify-center text-white text-xl gap-2 px-3 py-5 border rounded-full border-primary'>Shop Now <IoCaretDown /></span>
                        </Link>
                    </div>
                </div>


                <div className='relative'>
                    <img src="https://i.ibb.co/zZTq8TM/banner1.jpg" className='h-72 lg:h-[600px]' alt='Nuts' />
                    <div className='absolute top-0 w-full h-full bg-secondary bg-opacity-70 flex flex-col justify-center items-center'>

                        <h1 className='text-white text-3xl lg:text-6xl uppercase font-bold'>Jerseys Tailored to Perfection</h1>

                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12 mt-10'>
                            <Link to="/shop" className='btnPrimary'>
                                Shop For Individual
                            </Link>

                            <Link to="/team-order" className='btnSecondary'>
                                Team Order
                            </Link>
                        </div>

                    </div>

                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/NrykMk5/banner3.jpg" className='h-72 lg:h-[600px]' alt='Seed' />
                    <div className='absolute top-0 w-full h-full bg-secondary bg-opacity-60 flex flex-col justify-center items-center'>

                        <h1 className='text-white text-3xl lg:text-6xl uppercase font-bold'>Unleash Your Team's Style</h1>

                        <Link to="/shop" className='mt-10 border px-6 py-6 rounded-full flex items-center justify-center border-primary animate-pulse'>
                            <span className='flex flex-col items-center justify-center text-white text-xl gap-2 px-3 py-5 border rounded-full border-primary'>Shop Now <IoCaretDown /></span>
                        </Link>
                    </div>

                </div>

            </Carousel>
        </section>
    );
};

export default Banner;