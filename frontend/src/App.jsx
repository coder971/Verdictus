// Importing necessary libraries and components
import React from 'react'
import { Route, Routes } from 'react-router-dom' // Importing React Router for navigation

// Importing common UI components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Importing all pages for routing
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Lawyers from './pages/Lawyers'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'> {/* Adding some margin for responsiveness */}
      
      <Navbar /> {/* Navbar is placed outside Routes to ensure it appears on all pages */}
      
      <Routes> {/* Routes component handles navigation between different pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path='/lawyers/:speciality' element={<Lawyers />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:lawId' element={<Appointment />} /> 
        
      </Routes>
      <Footer /> {/* Footer is placed outside Routes to ensure it appears on all pages */}
    </div>
  );
};

export default App;
