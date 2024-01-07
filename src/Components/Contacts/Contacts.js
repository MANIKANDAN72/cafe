import React from 'react';
import footer from '../../images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg';


const Contacts = () => {
  return (
    <div id='Contact' className='relative'>
      <img src={footer} alt='' className='w-full h-[1000px] lg:h-[100vh] object-cover' /> 
      <div className='absolute inset-0 bg-[#bc6c25] opacity-40'></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className='mb-[100px]'>
        <p className='text-sm md:text-xl'>Say Hello</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Contacts</h1>
        </div>
       
        <div className='grid grid-cols-1 lg:grid-cols-2  '>
          <div className='grid grid-cols-1 m-5 gap-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 '>
              <div>
                <h1>Name</h1>
                <input type='text' placeholder='cafe' className='w-full border-2 border-gray-300 bg-transparent p-2 rounded-md' />
              </div>
              <div>
                <h1>Email</h1>
                <input type='text' placeholder='cafe@gmail.com' className='w-full border-2 border-gray-300 bg-transparent p-2 rounded-md' />
              </div>
            </div>
            <div>
              <h1>Message</h1>
              <input type='text' placeholder='Message' className='w-full h-[100px] border-2 border-gray-300 bg-transparent p-2 rounded-md' />
            </div>
            <div>
              <button className='bg-transparent w-full border-1 border-gray-300 hover:bg-orange-400 p-2 rounded-3xl'>Send Message</button>
            </div>
          </div>
          
            <div className=' rounded-lg '>
              <iframe
                title="Google Map"
                className='w-full md:w-[500px] h-[300px] lg:h-[400px] rounded-3xl'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.0244864674253!2d72.81855265186367!3d19.042969741416744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e0!3m2!1sen!2sin!4v1703395260456!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contacts;
