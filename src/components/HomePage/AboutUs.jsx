import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id='AboutUs_1' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-6 text-center md:text-left'>
        <h2 className='text-3xl font-bold mb-6'>About Us</h2>
        <p className='text-lg text-gray-700 mb-6'>We are committed to finding you the best real estate opportunities, offering extensive listings across all property types. Trust us to guide you to your new home with ease and confidence.</p>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='flex justify-center'>
            <img className='rounded-lg shadow-lg' src={images[1] || 'https://via.placeholder.com/500x500'} alt='About us' />
          </div>
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold'>Why Choose Us?</h3>
            <p className='text-gray-600'>Experience premium service as we match you with the perfect property. Our team of experts is committed to excellence from start to finish in your real estate experience.</p>
            <ul className='space-y-2'>
              <li>Personalized property recommendations.</li>
              <li>Expert local market insights.</li>
              <li>Dedicated customer support.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;