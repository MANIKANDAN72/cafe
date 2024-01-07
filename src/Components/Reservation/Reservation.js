
import React from 'react';
import bg from '../../images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg'
// import img from '../../images/barman-with-fruits.jpg';
import Footer from '../Footer/Footer';

const Reservation = () => {

  return (
    <div className='hidden'>
      <div className="relative h-screen flex items-center">
    <div className="absolute inset-0">
      <img src={bg} alt="Cafe Meet" className="w-[100vw] h-[100vh]  object-cover" />
    </div>
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 place-items-center rounded-2xl p-6 text-center">
    
        {/* Left Section */}
        <div className='absolute w-[90vw] lg:w-[70vw] bg-black bg-opacity-60 mt-5 grid place-content-center place-items-center p-3 rounded-2xl'>
          <div className='grid grid-cols-1 gap-7 m-3'>
            <div className='grid grid-cols-1 font-sans'>
              <p className='font-light text-[16px]'>Fill out the booking form</p>
              <h1 className='font-bold text-[28px]'>Book a table</h1>
            </div>

            {/* Booking Form */}
            <form className="grid grid-cols-1 gap-3 w-full">
              {/* Input Fields */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <input type='text' placeholder='Full Name' className=' bg-transparent border-2  w-[70vw] lg:w-[30vw] p-[13px] rounded-lg' />
          <input type='text' placeholder='Phone: 085 456 7890' className=' bg-transparent border-2  w-full p-[13px] rounded-lg'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <input type='time' placeholder='18:30' className=' bg-transparent border-2  w-full p-[13px] rounded-lg'/>
          <input type='date' placeholder='DD-MM-YYYY' className=' bg-transparent border-2  w-full p-[13px] rounded-lg' />
        </div>
        <div className='grid grid-cols-1 gap-3'>
          <input type='number' placeholder='Number Of People' className=' bg-transparent border-2  w-full p-[13px] rounded-lg' />
          <input type='text' placeholder='Comment (Optional)' className=' bg-transparent border-2  w-full lg:h-[10vw] p-[13px] rounded-lg' />
        </div>
        <button className='bg-orange-400 rounded-2xl px-7 p-y-2 '>Submit</button>
            </form>
          </div>
          </div>         
          {/* Right Section */}
        {/* <div className=' '>
          <img src={img} alt="" className='' />
        </div> */}
      </div>
    </div>
  <div className=''>
    <Footer />
  </div>
  </div>
  );
};

export default Reservation;
