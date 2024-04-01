import React from 'react';
import img from "../../assets/banner/banner2.jpg"
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import img0 from "../../assets/our work/1_A.png";
import img1 from "../../assets/our work/1_B.png";
import img3 from "../../assets/our work/2_A.png";
import img4 from "../../assets/our work/4_A (1).png";
import img5 from "../../assets/our work/4_A_1.png";
import img6 from "../../assets/our work/Milford Bulldogs Flag Football Uniforms_FRONT.png";
import img7 from "../../assets/our work/Avengers Jersey Ad.png";
import img8 from "../../assets/our work/Balls Deep Jersey Ad.png";
import img9 from "../../assets/our work/Blue Angels Jersey Ad.png";
import img10 from "../../assets/our work/Blue Unicorns - Jersey Ad.png";
import img11 from "../../assets/our work/Cowboy Sharks Uniforms Ad - 2023.png";
import { Link } from 'react-router-dom';
import { IoCaretDown } from 'react-icons/io5';

const OurWork = () => {
    return (
<section>
    <CommonBanner img={img} title="Portfolio"/>

    <SectionTitle title="Our Custom Jersey Creations" subTitle="Portfolio"/>

<div className='px-3 lg:px-10 my-16 flex flex-col items-center justify-center w-full gap-20'>

<div className='flex items-center justify-center w-full flex-col lg:flex-row gap-4'>

<div className='w-80 relative h-80'>
    <img src={img0} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>

<div className='w-80 relative h-80 lg:top-40'>
    <img src={img1} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>

<div className='w-80 relative h-80'>
    <img src={img1} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>


</div>

<div className='flex items-center justify-between w-full flex-col lg:flex-row gap-4'>

<div className='w-80 relative h-80'>
    <img src={img11} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>


<div className='w-80 relative h-80'>
    <img src={img10} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>


</div>

<div className='flex items-center justify-center w-full flex-col lg:flex-row gap-4'>

<div className='w-80 relative h-80'>
    <img src={img5} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>

<div className='w-80 relative h-80 lg:bottom-40'>
    <img src={img4} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>

<div className='w-80 relative h-80'>
    <img src={img3} alt="" />
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>


</div>

<div className='flex items-center justify-center w-full flex-col lg:flex-row gap-4'>


<div className='w-80 relative h-80 lg:bottom-40 mx-auto'>
    <img src={img6} alt="" className='h-80 mx-auto'/>
    <div className='absolute top-0 w-full h-full opacity-0 hover:bg-secondary hover:opacity-80 flex items-center justify-center'>
    <Link to="/" className='mt-10 border px-8 py-8 hover:text-primary rounded-full flex items-center justify-center border-primary w-fit mx-auto'>
                                <span className='flex flex-col items-center justify-center text-white gap-2 px-5 py-5 border rounded-full border-primary text-sm'>Details <IoCaretDown /></span>
                            </Link>
    </div>
</div>




</div>


</div>    
</section>
    );
};

export default OurWork;