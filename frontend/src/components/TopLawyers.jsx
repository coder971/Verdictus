import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopLawyers = () => {  


  const navigate=useNavigate()
  const{lawyers}=useContext(AppContext)

  return ( 
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'> 
      <h1 className='text-3xl font-medium'>Connect with Top Legal Professionals</h1> 
      <p className='sm:w-1/3 text-center text-sm'>Access a curated network of highly qualified, experienced attorneys, ready to provide expert legal support for any case.</p> 

      <div className='my-grid w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'> 
        {lawyers.slice(0, 8).map((item, index) => ( 
          <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className="border border-tussock rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}> 
            <img className='bg-quarter-spanish-white' src={item.image} alt="" /> 
              <div className='p-4'> 
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                 <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                 <p className="font-semibold">Available</p>
                </div>
               <p className='text-gray-900 text-lg font-medium'>{item.name}</p> 
               <p className='text-gray-600 text-sm'>{item.speciality}</p> 
              </div> 
          </div> 
        ))} 
      </div> 

      <button onClick={
        ()=>{navigate('/lawyers'); scrollTo(0,0)}
      } className='flex item-center gap-2 bg-tussock px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
      More
      </button>
    </div>  
  );
}

export default TopLawyers;