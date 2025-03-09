import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  
  const [userData, setUserData] = useState({
    
      "name": "Saad IK",
      "image": assets.profile_pic,
      "email": "saad.ik@example.com",
      "phone": "+91 XXXXXX XXXX",
      "address": {
          "line1": "Street Name, Locality",
          "line2": "City, State, India"
      },
      "gender": "Male",
      "dob": "YYYY-MM-DD"
  }
  );
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (field, value) => setUserData((prev) => ({ ...prev, [field]: value }));

  const renderInput = (label, field, type = "text") => (

    <div className="mb-5">
      <p className="text-black font-medium text-sm mb-1">{label}:</p>
      {isEdit ? (
        <input
          type={type}
          value={userData[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-lg w-full bg-white focus:outline-none focus:border-[#BD8D3D] focus:ring-1 focus:ring-[#BD8D3D] text-black"
        />
      ) : (
        <p className="text-black font-medium pl-1">{userData[field]}</p>
      )}
    </div>
  );

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-8">
        <div className="relative mr-6">
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F4EDD8] via-[#D6B88C] to-[#BD8D3D] p-2 shadow-md">
            <img 
              src={userData.image} 
              alt="Profile" 
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
          <p className="text-gray-600">Personal Profile</p>
        </div>
      </div>

      {isEdit && renderInput("Full Name", "name")}

      <div className="mb-6 pb-2 border-b border-gray-300">
        <h2 className="font-bold text-gray-900 text-lg mb-4">CONTACT INFORMATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {renderInput("Email ID", "email")}
          {renderInput("Phone", "phone")}
        </div>
        <div className="mb-5">
          <p className="text-gray-900 font-medium text-sm mb-1">Address:</p>
          {isEdit ? (
            <>
              {["line1", "line2"].map((line, i) => (
                <input
                  key={i}
                  type="text"
                  value={userData.address[line]}
                  onChange={(e) => handleChange("address", { ...userData.address, [line]: e.target.value })}
                  className="border border-gray-300 px-3 py-2 rounded-lg w-full bg-white focus:outline-none focus:border-[#BD8D3D] focus:ring-1 focus:ring-[#BD8D3D] mb-2 text-black"
                  placeholder={`Address Line ${i + 1}`}
                />
              ))}
            </>
          ) : (
            <p className="text-gray-900 font-medium pl-1">{userData.address.line1}, {userData.address.line2}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-gray-900 text-lg mb-4">BASIC INFORMATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="mb-5">
            <p className="text-gray-900 font-medium text-sm mb-1">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-lg w-full bg-white focus:outline-none focus:border-[#BD8D3D] focus:ring-1 focus:ring-[#BD8D3D] text-black"
              >
                {["Male", "Female", "Non-binary", "Prefer not to say", "Other"].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 font-medium pl-1">{userData.gender}</p>
            )}
          </div>
          {renderInput("Date of Birth", "dob", "date")}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="px-8 py-2.5 bg-[#BD8D3D] text-white font-medium rounded-lg hover:bg-[#A67933] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#BD8D3D] focus:ring-offset-2"
        >
          {isEdit ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

    </div>
    <br />
    </>

   

  );
};

export default MyProfile;