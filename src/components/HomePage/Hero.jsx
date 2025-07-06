import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id='Hero_1' className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-20 flex justify-center items-center relative overflow-hidden'>
      <svg className='absolute left-0 top-0 opacity-20' viewBox='0 0 1440 320'><path fill='currentColor' fillOpacity='1' d='M0,192L1440,288L1440,320L0,320Z'></path></svg>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <div id='Hero_2' className='text-center lg:text-left lg:pr-10'>
          <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>Find Your New
            <span className='block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500'>Dream Place<span className='inline-block transform transition-transform duration-700 hover:-translate-y-2'>.</span></span>
          </h1>
          <p className='text-white text-lg sm:text-xl mb-6'>Discover a variety of listings that match your lifestyle.</p>
          <button className='bg-white text-purple-600 px-8 py-4 rounded-md font-semibold hover:bg-purple-600 hover:text-white transition-all'>Get Started</button>
        </div>
        <div id='Hero_3' className='mt-12 lg:mt-0'>
          <img className='rounded-lg shadow-lg transform transition-all hover:scale-105' src={images[0] || 'https://via.placeholder.com/600x400'} alt='Real estate' />
        </div>
      </div>
    </div>
  );
};

export default Hero;