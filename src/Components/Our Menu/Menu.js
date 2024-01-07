import React from 'react';
import Waitress from '../../images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg';

const Menu = () => {
  return (
    <div id='Menu' className='relative'>
      <img src={Waitress} alt='' className='w-[100vw] h-[1500px] md:h-[1300px] lg:h-[100vh] object-cover' />
      <div className='absolute inset-0 text-white grid grid-cols-1 place-content-center lg:grid-cols-2 m-3 gap-5 '>

        {/* BREAKFAST */}
        <div className='md:mt-5'>
          <div className='bg-black bg-opacity-60 rounded-2xl p-[20px] overflow-hidden'>
            <div className='text-center'>
              <p className='text-[20px]'>Delicious Menu</p>
              <h1 className='text-[20px] font-bold'>Breakfast</h1>
            </div>
            <div className='grid gap-5 mt-3'>
              {/* structure */}
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              {/* structure */}
            </div>
          </div>
        </div>

        {/* COFFEE */}
        <div className='md:mt-5 '>
          <div className='bg-black bg-opacity-60 rounded-2xl p-[20px] overflow-hidden'>
            <div className='text-center'>
              <p className='text-[20px]'>Delicious Menu</p>
              <h1 className='text-[20px] font-bold'>Coffee</h1>
            </div>
            <div className='grid gap-5 mt-3'>
              {/* structure */}
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <h1 className='flex justify-between'>Pancakes <span className='text-orange-400'>$12.50</span></h1>
                <hr />
                <p>Fresh brewed coffee and steamed milk</p>
              </div>
              {/* structure */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
