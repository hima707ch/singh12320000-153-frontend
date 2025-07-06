import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <div id='CallToAction_1' className='bg-purple-700 py-16'>
      <div className='container mx-auto px-6 text-center text-white'>
        <h2 className='text-3xl font-bold mb-6'>Are you ready to find your next home?</h2>
        <p className='mb-6'>Sign up and get personalized property recommendations straight to your inbox!</p>
        <button className='bg-white text-purple-700 px-8 py-4 rounded font-semibold hover:bg-purple-800 hover:text-white transition-all'>Sign Up Now</button>
      </div>
    </div>
  );
};

export default CallToAction;