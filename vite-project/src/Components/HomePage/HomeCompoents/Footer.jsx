import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mb-12 md:mb-[37vh] lg:mb-[44vh] xl:mb-1">
       <div className="bg-pink-500 text-center py-6">
        <h2 className="text-2xl font-bold">Having Trouble Choosing A Product? Let’s Connect ➔</h2>
      </div>

      <div className="text-center mb-6 flex items-start justify-end p-5 gap-12">
        <p className="mb-4 text-sm lg:text-xl">Follow Us On</p>
        <div className="flex justify-center space-x-6 text-xl lg:text-3xl">
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaWhatsapp />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8 text-sm">
        
        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Address :</h3>
          <p>sbc company<br/>Bengaluru,<br/>Karnataka 560078</p>
          <p className="mt-4"><span className="font-semibold">Phone :</span> +91 9000 00009</p>
          <p><span className="font-semibold">Mail :</span> info@abc.com</p>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Credit Cards</li>
            <li>Personal Loan</li>
            <li>Our Lenders</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold mb-4">Tools</h3>
          <ul className="space-y-2">
            <li>EMI Calculator</li>
            <li>CIBIL Score</li>
            <li>Loan Calculator</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Check Eligibility</li>
            <li>Blogs</li>
            <li>Videos</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About MoneyBIP</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Privacy Policies</li>
            <li>Terms of Services</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs text-gray-400 px-6 mb-4">
        <p>
          Disclaimer : The information on is for general informational purposes and not financial advice. 
          Users should independently verify its accuracy. MoneyBIP is not responsible for external websites 
          linked from our platform. Consult with financial professionals before making significant decisions. 
          MoneyBIP disclaims liability for errors or consequences from reliance on the information provided.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pb-4">
        © Copyright 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
