import React from 'react';
import jones from '../../videos/pexels-mike-jones-9046237.mp4';
import EM1 from '../../images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg';
import EM2 from '../../images/team/portrait-elegant-old-man-wearing-suit.jpg';
import EM3 from '../../images/team/small-business-owner-drinking-coffee.jpg';
import EM4 from '../../images/team/smiley-business-woman-working-cashier.jpg'

const About = () => {
  return (
    <div id='About' className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#593e20]'>
      <div className='p-4'>
        <video autoPlay muted loop src={jones} alt='mp4' className='w-full rounded-2xl'  />
      </div>
      <div className='p-4 flex flex-col justify-center'>
        <p>Barista.co</p>
        <h1>Cafe KL</h1>
        <p>
          The café had been in the town for as long as anyone could remember,
          and it had become a beloved institution among the locals. The café
          was run by a friendly and hospitable couple, Mr. and Mrs. Johnson.
          Barista Cafe is free Bootstrap 5 HTML layout provided by Tooplate.
        </p>
        <button className='mt-4 px-4 py-2 rounded-xl bg-orange-400 text-white'>
          Meet Barista
        </button>
      </div>
    </div>
    {/*  */}
    <div className='bg-[#B78752] text-white gap-4 p-3 grid grid-cols-1 place-items-center place-content-center'>
        <div className='grid grid-cols-1 place-items-center gap-2 m-5'>
            <p className='text-sm md:text-xl'>Creative Baristas</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Meet People</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='relative rounded-lg overflow-hidden group '>
         <img src={EM1} alt='' className='w-full h-auto sm:h-full transition duration-300 transform group-hover:scale-125' />
         <div className='absolute inset-0 bg-orange-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-center sm:items-center'>
             <div className='mt-[100%] m-4'>
               <h1 className='text-xl font-bold text-white'>Sandra</h1>
               <p className='text-white'>Your favorite coffee daily lives tempor.</p>
             </div>
           </div>
         </div>
       </div>
        <div className='relative rounded-lg overflow-hidden group '>
         <img src={EM2} alt='' className='w-full h-auto sm:h-full transition duration-300 transform group-hover:scale-125' />
         <div className='absolute inset-0 bg-orange-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-center sm:items-center'>
             <div className='mt-[100%] m-4'>
               <h1 className='text-xl font-bold text-white'>Sandra</h1>
               <p className='text-white'>Your favorite coffee daily lives tempor.</p>
             </div>
           </div>
         </div>
       </div>
        <div className='relative rounded-lg overflow-hidden group '>
         <img src={EM3} alt='' className='w-full h-auto sm:h-full transition duration-300 transform group-hover:scale-125' />
         <div className='absolute inset-0 bg-orange-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-center sm:items-center'>
             <div className='mt-[100%] m-4'>
               <h1 className='text-xl font-bold text-white'>Sandra</h1>
               <p className='text-white'>Your favorite coffee daily lives tempor.</p>
             </div>
           </div>
         </div>
       </div>
        <div className='relative rounded-lg overflow-hidden group '>
         <img src={EM4} alt='' className='w-full h-auto sm:h-full transition duration-300 transform group-hover:scale-125' />
         <div className='absolute inset-0 bg-orange-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-center sm:items-center'>
             <div className='mt-[100%] m-4'>
               <h1 className='text-xl font-bold text-white'>Sandra</h1>
               <p className='text-white'>Your favorite coffee daily lives tempor.</p>
             </div>
           </div>
         </div>
       </div>

        </div>
    </div>
    </div>
  );
};

export default About;