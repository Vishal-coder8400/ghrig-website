"use client";

import React from "react";
import { FiUser, FiSearch, FiBarChart2, FiAward, FiCheckCircle, FiShield } from "react-icons/fi";

const services = [
  {
    icon: <FiUser size={22} />,
    title: "Permanent Staffing",
  },
  {
    icon: <FiSearch size={22} />,
    title: "HR Consulting",
  },
  {
    icon: <FiAward size={22} />,
    title: "Training & Development",
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "Payroll & Statutory Compliances",
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: "Employee Benefits",
  },
  {
    icon: <FiShield size={22} />,
    title: "Background Verification",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#F5F1FF] py-16 px-6 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#141414] text-left">
            Our Services
          </h2>
          <p className="text-[#141414B2] text-sm md:w-[80%] text-left md:text-right">
            “gHRig People Solutions” has a clear cut Vision, Capability and Expertise
            to provide entire bouquet of HR Services before its Clients, fuelled with
            the knowhow of the practical needs of the Corporate world.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between h-full"
                >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                    <div className="bg-[#F5E9FF] text-[#9B5EFF] p-3 rounded-full">
                    {service.icon}
                    </div>
                    <h3 className="font-medium text-gray-800 text-base">
                    {service.title}
                    </h3>
                </div>

                {/* Read More */}
                <div className="mt-4 text-right">
                    <span className="text-sm text-gray-500 hover:text-[#9B5EFF] cursor-pointer transition">
                    Read more
                    </span>
                </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
