import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Lawyers = () => {
  const { lawyers } = useContext(AppContext);
  const { speciality } = useParams();
  const navigate = useNavigate();

  // Normalize specialty name
  const formattedSpeciality = speciality ? decodeURIComponent(speciality).replace(/-/g, " ") : "";

  // Filter lawyers by speciality
  const filteredLawyers = formattedSpeciality
    ? lawyers.filter((lawyer) => lawyer.speciality.toLowerCase() === formattedSpeciality.toLowerCase())
    : lawyers;

  return (
    <>
    <div>
      <p className="text-gray-600 text-lg font-semibold mb-4">
      Explore legal specialties
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar with Specialties */}
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          {[
            "Corporate Lawyer",
            "Criminal Lawyer",
            "Family Lawyer",
            "Immigration Lawyer",
            "Insurance Lawyer",
            "Real Estate Lawyer",
          ].map((specialty, index) => (
            <p
              key={index}
              onClick={() => navigate(`/lawyers/${specialty.toLowerCase().replace(/\s+/g, "-")}`)}
              className="text-gray-400 text-base font-medium border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-quarter-spanish-white hover:border-tussock hover:text-black transition-all"
            >
              {specialty}
            </p>
          ))}
        </div>

       {/* Lawyers Grid */}
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300">
  {filteredLawyers.map((lawyer, index) => (
    <div
      onClick={() => {navigate(`/appointment/${lawyer._id}`);
      scrollTo(0,0)}}
      className="border border-tussock rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
      key={index}
    >
      {/* Image Wrapper for better control */}
      <div className="w-full">
        <img
          className="bg-quarter-spanish-white w-full h-auto aspect-[4/5] object-cover"
          src={lawyer.image}
          alt={lawyer.name}
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
          <p className="font-semibold">Available</p>
        </div>
        <p className="text-gray-900 text-lg font-medium">{lawyer.name}</p>
        <p className="text-gray-600 text-sm">{lawyer.speciality}</p>
      </div>
    </div>
  ))}
</div>
       
  
      </div>
    </div>
    <br/>
    </>
  );
};

export default Lawyers;