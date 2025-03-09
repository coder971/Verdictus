import React, { useState } from 'react'; 
import { assets } from '../assets/assets'; 
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => { 
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Active link style
  const activeStyle = "text-tussock  border-b-tussock";

  return ( 
    <div className="flex items-center justify-between text-sm py-5 mb-6 border-b border-b-tussock"> 
      <img 
        onClick={() => navigate('/')} 
        className="w-40 md:w-44 cursor-pointer transition-transform hover:scale-105" 
        src={assets?.logo || "/default-logo.png"} 
        alt="Logo" 
      />

      <ul className="hidden md:flex items-center gap-8 font-medium"> 
        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : "text-gray-800 hover:text-tussock transition-colors"}> 
          <li className="py-1">HOME</li> 
        </NavLink> 
        <NavLink to="/lawyers" className={({ isActive }) => isActive ? activeStyle : "text-gray-800 hover:text-tussock transition-colors"}> 
          <li className="py-1">ALL LAWYERS</li> 
        </NavLink> 
        <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : "text-gray-800 hover:text-tussock transition-colors"}> 
          <li className="py-1">ABOUT</li> 
        </NavLink> 
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : "text-gray-800 hover:text-tussock transition-colors"}> 
          <li className="py-1">CONTACT</li> 
        </NavLink> 
      </ul>

      <div className='flex items-center gap-6'> 
        {token ? ( 
          <div className='flex items-center gap-3 cursor-pointer group relative'> 
            <div className="flex items-center">
              <img className='w-9 h-9 rounded-full object-cover border-2 border-tussock' src={assets.profile_pic} alt="Profile" /> 
              <img className='w-3 ml-1 transition-transform group-hover:rotate-180' src={assets.dropdown_icon} alt="" />
            </div>

            {/* Dropdown Menu */} 
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'> 
              <div className='min-w-56 bg-white rounded-lg flex flex-col gap-3 p-5 shadow-xl border border-gray-100'> 
                <p onClick={() => navigate('my-profile')} className='hover:text-tussock cursor-pointer transition-colors py-1'>My Profile</p> 
                <div className="h-px bg-gray-200 my-1"></div>
                <p onClick={() => navigate('my-appointments')} className='hover:text-tussock cursor-pointer transition-colors py-1'>My Appointments</p> 
                <div className="h-px bg-gray-200 my-1"></div>
                <p onClick={() => setToken(false)} className='hover:text-tussock cursor-pointer transition-colors py-1'>Logout</p> 
              </div> 
            </div> 
          </div> 
        ) : ( 
          <button 
            onClick={() => navigate('/login')} 
            className='hidden md:flex items-center gap-2 bg-tussock px-8 py-3 rounded-full text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
          > 
            Create account 
          </button> 
        )} 
        <img 
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon} 
          className='w-7 md:hidden cursor-pointer hover:opacity-80 transition-opacity'
          alt="Menu"
        />

        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 md:hidden flex justify-end transition-all duration-300"> 
            <div className="bg-white h-full w-72 max-w-full shadow-xl p-6 flex flex-col animate-slide-in"> 
              <div className="flex justify-between items-center mb-8"> 
                <img src={assets.logo} alt="Logo" className="w-32" /> 
                <div
                  onClick={() => setShowMenu(false)} 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <img 
                    src={assets.cross_icon} 
                    alt="Close" 
                    className="w-4" 
                  /> 
                </div>
              </div> 
              <ul className="flex flex-col gap-5 font-medium"> 
                <NavLink 
                  to="/" 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                >
                  <li>HOME</li>
                </NavLink>
                <NavLink 
                  to="/lawyers" 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                >
                  <li>ALL LAWYERS</li>
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                >
                  <li>ABOUT</li>
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                >
                  <li>CONTACT</li>
                </NavLink>
                {token && (
                  <>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <NavLink 
                      to="/my-profile" 
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                    >
                      <li>MY PROFILE</li>
                    </NavLink>
                    <NavLink 
                      to="/my-appointments" 
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) => `py-2 ${isActive ? "text-tussock" : "text-gray-800"}`}
                    >
                      <li>MY APPOINTMENTS</li>
                    </NavLink>
                    <li 
                      onClick={() => { setToken(false); setShowMenu(false); }} 
                      className="cursor-pointer py-2 text-gray-800"
                    >
                      LOGOUT
                    </li>
                  </>
                )}
              </ul>
              {!token && (
                <button
                  onClick={() => { navigate('/login'); setShowMenu(false); }}
                  className='mt-8 bg-tussock px-6 py-3 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 w-full'
                >
                  Create account
                </button>
              )}
            </div> 
          </div> 
        )} 
      </div> 
    </div> 
  );
};

export default Navbar;