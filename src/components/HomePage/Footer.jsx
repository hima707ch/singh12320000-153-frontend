import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id='Footer_1' className='bg-gray-800 text-white'>
      <div className='container mx-auto py-12 px-4'>
        <div className='flex justify-between'>
          <div>
            <h3 className='font-bold text-lg'>Logo</h3>
            <p className='text-gray-300'>Find your ideal home</p>
          </div>
          <div className='flex space-x-6'>
            <a href='#' className='text-gray-400 hover:text-white'>Facebook</a>
            <a href='#' className='text-gray-400 hover:text-white'>Twitter</a>
            <a href='#' className='text-gray-400 hover:text-white'>Instagram</a>
          </div>
        </div>
        <div className='mt-8 flex justify-between items-center border-t border-gray-700 pt-8'>
          <p className='text-gray-400'>© 2023 Real Estate Inc. All rights reserved.</p>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-300 hover:text-white'>Privacy Policy</a>
            <a href='#' className='text-gray-300 hover:text-white'>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;