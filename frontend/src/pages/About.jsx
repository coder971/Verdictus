import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] flex items-center justify-center bg-[#3B2E2A]">
        <img
          src={assets.about_image}
          alt="About Verdictus"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl font-bold text-white mb-6">About Verdictus</h1>
          <p className="mt-4 text-xl text-gray-100 max-w-3xl mx-auto">
            Pioneering legal excellence with unwavering integrity, innovation,
            and client-first advocacy since 2010.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#3B2E2A] mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Verdictus, we believe that justice should not be a privilege, but
            a right accessible to all. Our mission is to empower individuals and
            businesses with top-tier legal counsel, driven by passion, precision,
            and purpose.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine decades of legal expertise with innovative approaches to deliver exceptional results for our clients across all practice areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl font-semibold text-[#3B2E2A] mb-3">Excellence</h3>
            <p className="text-gray-700">We strive for excellence in every case, every client interaction, and every legal strategy we develop.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl font-semibold text-[#3B2E2A] mb-3">Integrity</h3>
            <p className="text-gray-700">Our practice is built on a foundation of unwavering ethical standards and transparent client relationships.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl font-semibold text-[#3B2E2A] mb-3">Innovation</h3>
            <p className="text-gray-700">We continuously evolve our approach to meet the changing landscape of legal challenges.</p>
          </div>
        </div>
      </section>

      {/* Our Legacy */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3B2E2A] mb-10">Our Legacy</h2>
          <div className="space-y-8">
            {[
              {
                year: "2010 - Foundation",
                desc: "Verdictus was established with a vision to provide accessible, high-quality legal services to our community."
              },
              {
                year: "2015 - Expansion",
                desc: "We expanded our practice areas and opened three regional offices to better serve clients across the state."
              },
              {
                year: "2020 - Innovation",
                desc: "Verdictus pioneered new legal technologies and approaches that set new standards in the industry."
              },
              {
                year: "Today - Excellence",
                desc: "Our firm continues to grow while maintaining our commitment to personalized service and exceptional results."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-[#BD8D3D] pl-6 py-4">
                <h3 className="text-xl font-semibold text-[#3B2E2A]">{item.year}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <br/>
    </>
  );
};

export default About;