import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section with Logo */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <img src={assets.logo} alt="Verdictus Logo" className="h-10" />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Verdictus connects you with top-rated lawyers for seamless legal consultations. From corporate law to personal legal matters, we ensure expert guidance.
            </p>
          </div>

          {/* Center Section */}
          <div className="md:ml-12">
            <h3 className="text-base font-semibold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-600 hover:text-gray-900 text-sm">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</NavLink></li>
              <li><span className="text-gray-600 text-sm">FAQ</span></li>
              <li><span className="text-gray-600 text-sm">Terms of Use</span></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:ml-4">
            <h3 className="text-base font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">+1 (800) 123-4567</li>
              <li className="text-gray-600 text-sm">contact@verdictus.com</li>
            </ul>
          </div>
          
          {/* Social Media Section (common in reputable websites) */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Kept icons but removed links */}
              <span className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                </svg>
              </span>
              <span className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Verdictus. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Providing trusted legal expertise for a secure future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;