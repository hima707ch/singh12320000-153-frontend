import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties, isLoading }) => {
  const renderProperties = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return properties.map((property, index) => (
      <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all'>
        <img className='w-full h-48 object-cover' src={property.image || images[2]} alt={property.title} />
        <div className='p-6'>
          <h3 className='text-2xl font-bold'>{property.title}</h3>
          <p className='text-gray-600'>{property.location}</p>
          <p className='text-gray-900 font-semibold'>${property.price}</p>
        </div>
      </div>
    ));
  };

  return (
    <section id='FeaturedProperties_1' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-6'>Featured Properties</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {renderProperties()}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;