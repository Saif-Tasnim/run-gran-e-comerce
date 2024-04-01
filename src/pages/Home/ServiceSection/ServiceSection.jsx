import React from 'react';

import img1 from "../../../assets/service/5fed675f-fe25-487c-97a9-a2f502e108fa.webp";
import img2 from "../../../assets/service/16947772253761.jpg";
import { Link } from 'react-router-dom';
import { IoCaretForwardSharp } from 'react-icons/io5';

const ServiceSection = () => {
    return (
<section className='my-14 flex items-center w-full justify-center'>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

<Link className='relative'>
<img src={img1} alt="Img1" className='w-80 h-72'/>

<div className='absolute top-0 h-full w-full bg-secondary bg-opacity-30 flex items-center justify-center hover:bg-opacity-75 transition-all duration-500'>
<h1 className='font-bold text-white text-4xl lg:text-5xl uppercase px-2'>Customize For <br /> Individual</h1>
</div>


<span className='absolute top-[40%] flex bg-white py-4 px-2 rounded-l-full right-0'><IoCaretForwardSharp /></span>


</Link>

<Link className='relative'>
<img src={img2} alt="Img1" className='w-80 h-72'/>

<div className='absolute top-0 h-full w-full bg-secondary bg-opacity-40 flex items-center justify-center hover:bg-opacity-75 transition-all duration-500'>
<h1 className='font-bold text-white text-4xl lg:text-5xl uppercase px-2'>Customize For <br /> Team</h1>
</div>

<span className='absolute top-[40%] flex bg-white py-4 px-2 rounded-l-full right-0'><IoCaretForwardSharp /></span>
</Link>

<Link className='relative'>
<div className='w-80 h-72 bg-primary'>

</div>

<div className='absolute top-0 h-full w-full bg-secondary bg-opacity-40 flex items-center justify-center hover:bg-opacity-75 transition-all duration-500'>
<h1 className='font-bold text-white text-4xl lg:text-5xl uppercase px-2'>Sale! Up To<br /> 40% Off</h1>
</div>

<span className='absolute top-[40%] flex bg-white py-4 px-2 rounded-l-full right-0'><IoCaretForwardSharp /></span>
</Link>


</div>

</section>
    );
};

export default ServiceSection;