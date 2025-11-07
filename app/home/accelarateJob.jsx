import React from "react";

export default function AccelerateJob() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden flex items-center h-[300px] md:h-[307px]">
        {/* Background Image */}
        <img
          src="/assets/images/accelrate-your-job.png"
          alt="Accelerate Job Search"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFAA49] via-[#FFAA49]/95 to-transparent"></div>

        {/* Decorative Stars */}
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[140px] top-[70px] w-10 opacity-60"
        />
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[100px] top-[130px] w-6 opacity-60"
        />
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[200px] top-[160px] w-8 opacity-60"
        />

        {/* Text Content */}
        <div className="relative z-10 w-full md:w-1/2 pl-6 sm:pl-10">
          <h2 className="font_family_jakarta text-white text-[20px] sm:text-[24px] md:text-[26px] font-bold leading-snug">
            Accelerate your job <br className="hidden sm:block" />
            search with our services
          </h2>

          <p className="text-white text-sm mt-3 mb-5 leading-relaxed font_family_inter max-w-[350px]">
            Services to help you get hired faster — from preparing your CV,
            getting recruiter attention, finding the right jobs, and more!
          </p>

          <a
            href="#"
            className="bg-white text-black text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
