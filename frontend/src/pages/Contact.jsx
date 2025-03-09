import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-[#3B2E2A]">
        <img
          src={assets.contact_image}
          alt="Contact Verdictus"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team for expert legal assistance.
          </p>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-16 px-6 sm:px-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-[#3B2E2A] mb-6">Our Office</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-[#BD8D3D] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3B2E2A]">Address</h3>
                <p className="text-gray-700 mt-1">123 Legal Avenue, Suite 500</p>
                <p className="text-gray-700">San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-[#BD8D3D] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3B2E2A]">Phone</h3>
                <p className="text-gray-700 mt-1">(415) 555-0123</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-[#BD8D3D] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3B2E2A]">Email</h3>
                <p className="text-gray-700 mt-1">contact@verdictus.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;