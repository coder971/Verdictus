import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium text-center'>Search by Legal Expertise</h1>
      <p className='sm:w-1/3 max-w-[90%] text-center text-sm'>
        Browse our network of top-tier lawyers, carefully selected for their expertise, 
        and connect with the best legal professionals today.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pt-5 w-full max-w-[90%] mx-auto'>
        {specialityData.map((item, index) => (
          <Link 
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
            key={index} 
            to={`/lawyers/${item.speciality.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className='p-2 rounded-full shadow-lg bg-woody-brown hover:shadow-xl transition-all border border-gray-300'>
              <img className='w-16 sm:w-20 rounded-full' src={item.image} alt={item.speciality} />
            </div>
            <p className="text-center font-medium mt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;