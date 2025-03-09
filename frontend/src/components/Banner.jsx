import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'
      style={{
        background: 'linear-gradient(135deg, #BD8D3D, #3B2E2A)', // Gradient from Tussock to Woody Brown
        color: '#F4EDD8' // Quarter Spanish White for text
      }}
    >
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-center md:text-left'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Consultation <br className='hidden sm:block' /> With 100+ Trusted Lawyers
        </p>
        <button onClick={()=>{navigate('/login');scrollTo(0,0)}}
          className='flex items-center justify-center md:justify-start gap-3 bg-white text-gray-800 px-8 py-3 rounded-full font-medium shadow-md hover:bg-gray-200 transition-all duration-300'
        >
          Create Account
          <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 relative flex justify-center md:justify-end'>
        <img 
          className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl md:absolute bottom-0 right-0 h-auto' 
          src={assets.appointment_img} 
          alt="Appointment" 
        />
      </div>
    </div>
  );
}

export default Banner;
