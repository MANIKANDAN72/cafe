import React from 'react';
import img from '../../images/mid-section-waitress-wiping-espresso-machine-with-napkin-cafa-c.jpg';
import cus1 from '../../images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg';
import cus2 from '../../images/reviews/senior-man-white-sweater-eyeglasses.jpg';
import cus3 from '../../images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg';
import { GoGoal } from "react-icons/go";

const Reviews = () => {
  return (
    <div id='Reviews' className='bg-[#7c5c52] grid grid-cols-1 place-items-center '>
    <div className='m-7'>
        <p className='text-sm md:text-xl'>Reviews by Customers</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Testimonials</h1>
    </div>

       <div className='p-6 gap-3 flex md:w-[70%]'><GoGoal className='hidden md:flex w-[150px] h-[150px] md:w-[70%]'/>
       <div class='bg-yellow-600  rounded-lg'>
    <div class='relative border-white border-4 rounded-lg grid grid-cols-1'>
        <img src={img} alt='' class='w-full' />
        <div class='relative flex flex-col justify-start items-start p-4'>
            <img src={cus1} alt='' class='absolute rounded-full w-[100px] h-[100px] -top-36' />
           <div className='grid grid-cols-1 -mt-20'>
           <h1 class='text-xl font-bold mt-4'>Sandra</h1>
            <p class=''>Customers</p>
           </div>
        </div>
        <p class='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora ex ea laborum accusamus esse excepturi quaerat consectetur ducimus atque.</p>
    </div>
    </div>
       </div>

       <div className='p-6 gap-3 flex md:w-[70%] '>
       <div class='bg-yellow-600 rounded-lg'>
    <div class='relative border-white border-4 rounded-lg grid grid-cols-1'>
        <img src={img} alt='' class='w-full' />
        <div class='relative flex flex-col justify-start items-start p-4'>
            <img src={cus2} alt='' class='absolute rounded-full w-[100px] h-[100px] -top-36' />
           <div className='grid grid-cols-1 -mt-20'>
           <h1 class='text-xl font-bold mt-4'>Sandra</h1>
            <p class=''>Customers</p>
           </div>
        </div>
        <p class='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora ex ea laborum accusamus esse excepturi quaerat consectetur ducimus atque.</p>
    </div>
    </div><GoGoal className='hidden md:flex w-[150px] h-[150px] md:w-[70%]'/>
       </div>

       <div className='p-6 gap-3 flex md:w-[70%] '><GoGoal className='hidden md:flex w-[150px] h-[150px] md:w-[70%]'/>
       <div class='bg-yellow-600 rounded-lg'>
    <div class='relative border-white border-4 rounded-lg grid grid-cols-1'>
        <img src={img} alt='' class='w-full' />
        <div class='relative flex flex-col justify-start items-start p-4'>
            <img src={cus3} alt='' class='absolute rounded-full w-[100px] h-[100px] -top-36' />
           <div className='grid grid-cols-1 -mt-20'>
           <h1 class='text-xl font-bold mt-4'>Sandra</h1>
            <p class=''>Customers</p>
           </div>
        </div>
        <p class='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora ex ea laborum accusamus esse excepturi quaerat consectetur ducimus atque.</p>
    </div>
    </div>
       </div>

    </div>
  )
}

export default Reviews;