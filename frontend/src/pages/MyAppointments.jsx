import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { lawyers } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-gray-900 text-2xl font-bold mb-6">My Appointments</h1>
      <div className="space-y-6">
        {lawyers?.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-5 bg-white flex flex-col md:flex-row border border-gray-200"
          >
            {/* Profile Picture */}
          {/* Profile Picture */}
          <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
            <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F4EDD8] via-[#D6B88C] to-[#BD8D3D] p-2 shadow-md">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
          </div>

            {/* Lawyer Details */}
            <div className="md:w-2/4 md:px-4">
              <h2 className="text-gray-900 text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{item.speciality}</p>
              <p className="text-gray-700 font-medium text-sm">Address:</p>
              <p className="text-gray-600">{item.address.line1}</p>
              <p className="text-gray-600 mb-3">{item.address.line2}</p>
              <p className="text-gray-800">
                <span className="font-medium">Date & Time:</span> 25 Mar 2025 | 5:00 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="md:w-1/4 flex flex-col justify-center mt-4 md:mt-0">
              <button className="bg-[#BD8D3D] text-white py-2 px-4 rounded-lg mb-3 hover:bg-[#A67933] transition-all shadow-sm">
                Pay Online
              </button>
              <button className="border border-[#3B2E2A] text-[#3B2E2A] py-2 px-4 rounded-lg hover:bg-[#FAA0A0] transition-all">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;