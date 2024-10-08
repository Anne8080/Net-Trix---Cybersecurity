import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaX, FaGlobe, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[10] bottom-0">
      <div className="w-full flex flex-col items-center justify center m-auto ">
        <div className="w-full h-full flex items-start justify-around flex-wrap">
          <div className="min-w-[200px] h-auto pt-5 flex flex-col justify-center items-center">
            <div className="font-bold text-[16px]">Quick Link</div>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <Link href="/" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                Homepage
              </Link>
            </p>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <Link href="/about" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                About Us
              </Link>
            </p>
            <p className="flex flex-row items-center my-[16px] cursor-pointer" >
              <Link href="contact" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto pt-5 md:pt-0 flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[16px] cursor-pointer" >
              <FaFacebookF />
              <Link href="" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                Facebook
              </Link>
            </p>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <FaX />
              <Link href="https://x.com/Nettrixinc" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                X
              </Link>
            </p>
            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <FaLinkedinIn />
              <Link href="https://www.linkedin.com/company/net-trix-solutions-inc/mycompany/" className="text-[15px] ml-[6px] text-white" style={{ textDecoration: "none" }}>
                LinkedIn
              </Link>
            </p>
          </div>
          <div className="min-w-[200px] h-auto pt-5 md:pt-0 flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Reach Us</div>
            <p className="flex flex-row items-center my-[16px]">
            <FaPhone />
              <span className="text-[15px] ml-[6px]">+234 906 000 0456</span>
            </p>
            <p className="flex flex-row items-center my-[16px]">
            <FaEnvelope />
              <span className="text-[15px] ml-[6px]">
                INFO@NET-TRIXSOLUTIONS.COM
              </span>
            </p>
            <p className="flex flex-row items-center my-[16px]">
            <FaGlobe />
              <span className="text-[15px] ml-[6px]">
                WWW.NET-TRIXSOLUTIONS.COM
              </span>
            </p>
          </div>
        </div>

        <div className="mt-[30px] text-[15px] text-center">
          &copy; Net-Trix Solutions 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
