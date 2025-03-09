import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-tussock rounded-lg px-6 md:px-10 lg:px-20'
    style={{
      background: 'linear-gradient(135deg, #BD8D3D, #3B2E2A)', // Gradient from Tussock to Woody Brown
      color: '#F4EDD8' // Quarter Spanish White for text
    }}
    >
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
        Schedule a Consultation <br /> With Top Attorneys
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>
            Explore our curated list of legal experts, <br className='hidden sm:block' />
            schedule your appointment instantly.
          </p>
        </div>
        <a href="#speciality" 
          className='flex items-center gap-3 bg-white text-gray-800 px-8 py-3 rounded-full font-medium shadow-md hover:bg-gray-200 transition-all duration-300'
        >
          Book appointment 
          <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
        </div>
      
       {/* Right Side */}
       <div className='md:w-1/2 relative flex justify-end'>
  <img 
    className='w-full md:w-auto md:absolute bottom-0 right-0 h-auto' 
    src={assets.header_img} 
    alt="" 
  />
</div>
    </div>
  );
};

export default Header;