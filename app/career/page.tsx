"use client";

import { useState } from "react";

export default function CareerPage() {
  // ✅ Form State
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    pin: "",
    phone: "",
    address: "",
    message: "",
  });

  // ✅ Form Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
  };

  return (
    <section className="py-16 flex justify-center">
      <div className="max-w-3xl w-full px-6">

        {/* ✅ Top Title Section */}
        <div className="text-center mb-12 px-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font_family_jakarta">
            Join Our Team
          </h1>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Build your career with us. Fill the form below and our HR team will contact you soon.
          </p>
        </div>

        {/* ✅ Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-[#0A1B6F] mb-8">
            Apply Now
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* ✅ Full Name + Email + Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 items-center">
              <div className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                  <input
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src="/logo.png"   // 🔁 change according to your path
                  alt="logo"
                  className="w-32 h-auto object-contain"
                />
              </div>
            </div>

            {/* ✅ Pin + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Pin Code*</label>
                <input
                  name="pin"
                  required
                  value={form.pin}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                  placeholder="Enter pin code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* ✅ Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Address*</label>
              <input
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                placeholder="Enter your address"
              />
            </div>

            {/* ✅ Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                placeholder="Write message..."
              ></textarea>
            </div>

            {/* ✅ Submit */}
            <button
              type="submit"
              className="w-full bg-[#0A1B6F] hover:bg-[#081659] text-white py-4 rounded-lg text-lg font-semibold transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
