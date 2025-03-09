import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedLawyers from '../components/RelatedLawyers';

const Appointment = () => {
  const { lawId } = useParams();
  const { lawyers, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // State management
  const [lawInfo, setLawInfo] = useState(null);
  const [lawSlots, setLawSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [isBookingEnabled, setIsBookingEnabled] = useState(false); // Track if booking can be made

  // Get lawyer info - Added comment for clarity
  useEffect(() => {
    if (!lawyers?.length) return;
    const lawInfolawyers = lawyers.find(lawyer => lawyer._id === lawId);
    setLawInfo(lawInfolawyers);
  }, [lawyers, lawId]);

  // Generate time slots - Added comment for clarity
  useEffect(() => {
    if (!lawInfo) return;

    setLawSlots([]); // Reset slots before fetching new ones
    let today = new Date();
    
    let slots = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    setLawSlots(slots);
  }, [lawInfo]);

  // Enable booking button when a time slot is selected
  useEffect(() => {
    setIsBookingEnabled(!!slotTime);
  }, [slotTime]);

  // Added loading state handling with a nicer loading indicator
  if (!lawInfo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-md w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-md w-48 mx-auto"></div>
        </div>
        <p className="mt-6 text-gray-600">Loading lawyer information...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      
      {/* Lawyer Info Section */}
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Lawyer Photo with subtle hover effect */}
        <div className="flex-none w-full sm:w-72 transition-transform duration-300 hover:scale-[1.02]">
          <img 
            className="w-full rounded-lg bg-quarter-spanish-white shadow-md hover:shadow-lg transition-shadow duration-300" 
            src={lawInfo.image} 
            alt={`Image of ${lawInfo.name}`}
            // Added image error handling
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x400?text=Lawyer+Photo";
            }}
          />
        </div>

        {/* Lawyer Details */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Added a more structured header with verification badge */}
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              {lawInfo.name}
              {/* Added null check for assets.verified_icon */}
              {assets.verified_icon && (
                <img className="w-4" src={assets.verified_icon} alt="Verified" />
              )}
            </p>
            {/* Added tag for experience for better visibility */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {lawInfo.experience}
            </span>
          </div>
          
          {/* Professional details with better spacing */}
          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600 border-b border-gray-100 pb-3">
            <p>{lawInfo.degree} - {lawInfo.speciality}</p>
          </div>
          
          {/* About section with subtle styling */}
          <div className="mt-4">
            <p className="flex items-center text-sm font-medium text-gray-900 mb-2">
              About &nbsp; 
              {/* Added fallback for info_icon */}
              {assets.info_icon ? (
                <img src={assets.info_icon} alt="Information icon" />
              ) : (
                <span>ℹ️</span>
              )}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">{lawInfo.about}</p>
          </div>
          
          {/* Fee information with highlighted styling */}
          <p className="font-medium text-gray-600 mt-4 bg-gray-50 p-2 rounded-md inline-block">
            Appointment fee: <span className="text-gray-800 font-semibold">{currencySymbol}{lawInfo.fees}</span>
          </p>
        </div>

      </div>

      {/* Booking Slots Section with improved spacing */}
      <div className="mt-10 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <p className="text-lg font-semibold text-gray-700 mb-4">Select Booking Slot</p>

        {/* Date Selection - Scrollable with visual indicator for scrollability */}
        <div className="relative">
          <div className="flex gap-3 items-center w-full overflow-x-auto py-2" style={{ scrollbarWidth: 'none' }}>
            {/* Added empty state handling */}
            {lawSlots?.length > 0 ? (
              lawSlots.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-2 px-4 min-w-[60px] rounded-md cursor-pointer transition-all duration-300
                    border border-gray-300 bg-gray-100 shadow-sm
                    ${slotIndex === index ? 'bg-millbrook text-white shadow-lg border-millbrook' : 'hover:bg-gray-200'}`}
                >
                  <p className="text-xs font-medium uppercase tracking-wide opacity-70">
                    {item[0]?.dateTime && daysOfWeek[item[0].dateTime.getDay()]}
                  </p>
                  <p className="text-lg font-semibold">{item[0]?.dateTime && item[0].dateTime.getDate()}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 py-4 text-center w-full">No dates available</p>
            )}
          </div>
          {/* Added visual indicator for scrollable content */}
          {lawSlots?.length > 4 && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Time Selection - Grid layout for better organization */}
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-600 mb-3">Available Time Slots:</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-2">          
            {/* Added empty state handling */}
            {lawSlots?.length > 0 && lawSlots[slotIndex]?.length > 0 ? (
              lawSlots[slotIndex].map((item, index) => (
                <p 
                  key={index} 
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-medium text-center px-2 py-2 rounded-md cursor-pointer transition-all duration-300 
                    ${item.time === slotTime ? 'bg-millbrook text-white shadow-md' : 'text-gray-500 border border-gray-300 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            ) : (
              <p className="text-gray-500 col-span-full py-4">No time slots available for this date</p>
            )}
          </div>
        </div>
      </div>

      {/* Book Consultation Button - Centered with disabled state styling */}
      <div className="mt-8 text-center">
        <button 
          className={`text-white text-sm font-medium px-14 py-3 rounded-full transition-all duration-300 ${
            isBookingEnabled 
              ? 'bg-millbrook hover:bg-opacity-90 transform hover:-translate-y-1' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isBookingEnabled}
        >
          Book the Consultation
        </button>
        {/* Added helpful text for better UX */}
        {!isBookingEnabled && (
          <p className="text-gray-500 text-xs mt-2">Please select a date and time to book</p>
        )}
      </div>
      

      <RelatedLawyers lawId={lawId} speciality={lawInfo.speciality} />

    </div>
  );
};

export default Appointment;