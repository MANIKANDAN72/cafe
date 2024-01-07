import React from 'react'
import cafemeet from '../../images/slides/cafemeet.jpg'
const Home = () => {
  return (
      <div id='Home' className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={cafemeet} alt="Cafe Meet" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
        <div className="text-white">
        {/* <div className='bg-black opacity-70 w-[300px] h-[300px] rounded-lg absolute'></div> */}
          <p className="text-yellow-400">Welcome to Barista.co</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Cafe Klang</h1>
          <p className="text-lg md:text-xl lg:text-2xl">Your favorite coffee for daily life.</p>
          <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">
            <button className="border rounded-xl hover:bg-white hover:text-orange-400 font-bold px-4 py-2 mb-2 md:mb-0 md:mr-2">Our Story</button>
            <button onClick='Menu' className="px-4 py-2 hover:bg-orange-400 font-bold rounded-xl">Check Menu</button>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Home;