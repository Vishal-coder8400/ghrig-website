import React from "react";
import Link from "next/link";

const informationLinks = [
  "About us",
  "Services",
  "Contact Us",
  "Blog",
];

export default function Footer() {
  return (
    <footer className="relative bg-white mx-auto px-4 sm:px-10">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        alt="Gradient bg"
        src="../assets/images/gradientbg.png"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-12 pt-8 lg:pt-10 pb-4 lg:pb-6">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-24 px-4 lg:px-10 py-4 lg:py-8 self-stretch w-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">

          {/* Logo Section */}
          <div className="flex items-center gap-2 invert">{/* Logo */}</div>

          {/* Links Section */}
          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="opacity-60 font-medium text-[#1a1819] text-xs lg:text-[10px] tracking-[0.40px] leading-[14px] uppercase">
                INFORMATION
              </h3>

              <ul className="flex flex-col items-start gap-1 self-stretch w-full">

                {informationLinks.map((link, index) => (
                  <li key={index} className="self-stretch">
                    <a
                      href="#"
                      className="font-normal text-[#1a1819] text-sm lg:text-base leading-[22.4px] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}

                {/* Added Pages */}
                <li>
                  <Link
                    href="/privacy-policy"
                    className="font-normal text-[#1a1819] text-sm lg:text-base leading-[22.4px] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="font-normal text-[#1a1819] text-sm lg:text-base leading-[22.4px] hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          {/* Call Section */}
          <div className="flex-1 flex flex-col items-end gap-4">
            <button className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1a1819] rounded-lg text-white">
              Request a call
            </button>

            <address className="flex flex-col items-end not-italic">
              <a
                href="tel:+19999999999"
                className="font-semibold text-[#1a1819] text-xs leading-[15.6px] hover:underline"
              >
                +1 (999) 999-99-99
              </a>
              <a
                href="mailto:info@logoipsum.com"
                className="font-semibold text-[#1a1819] text-xs hover:underline"
              >
                info@logoipsum.com
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-10 py-4">
        <p className="font-normal text-[#2d2d2d] text-xs lg:text-[10px]">
          © 2023 — Copyright
        </p>

        <Link
          href="/privacy-policy"
          className="font-normal text-[#2d2d2d] text-xs lg:text-[10px] hover:underline"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}
