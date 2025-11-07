import React from "react";

const ServiceBanner = () => {
  return (
    <section className="service-banner max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* LEFT SIDE */}
      <div className="service-left max-w-lg text-center lg:text-left">
        <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4 font_family_jakarta">
          gHRig People Solutions
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 font_family_jakarta">
          Background Verification
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 font_family_inter">
          Employment and education checks
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors font_family_inter">
            Hire Now
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors font_family_inter">
            Explore Roles
          </button>
        </div>

        <div className="flex justify-center lg:justify-start gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === 0 ? "bg-purple-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="service-right hidden lg:flex justify-center items-center flex-1">
        <div className="image-wrapper relative w-full max-w-[750px] h-[480px] rounded-2xl overflow-hidden">
          <img
            src="/assets/images/service_banner1.png"
            alt="Background Card"
            className="absolute inset-0 w-[75%] h-full object-cover rounded-2xl z-[1] left-[50px]"
          />
          <img
            src="/assets/images/service_banner2.png"
            alt="Character Illustration"
            className="absolute bottom-0 right-[305px] w-[65%] max-w-[500px] h-[500px] z-[2] pointer-events-none translate-y-[12px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
