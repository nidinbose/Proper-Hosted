import React, { useState } from 'react';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-900 text-white">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16 items-center">
          
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold">Logo</h1> */}
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="hover:text-gray-300 transition">Features</a>
            <a href="#our-story" className="hover:text-gray-300 transition">Our Story</a>
            <a href="#blog" className="hover:text-gray-300 transition">Blog</a>
            <a href="#pricing" className="hover:text-gray-300 transition">Pricing</a>
            <button className=" text-white px-4 py-2 rounded-md font-semibold bg-rose-400 transition">
              Login
            </button>
          </div>
          <div className="hidden md:flex">
          
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-4 px-4 py-2">
            <a href="#features" className="block hover:text-gray-300 transition">Features</a>
            <a href="#our-story" className="block hover:text-gray-300 transition">Our Story</a>
            <a href="#blog" className="block hover:text-gray-300 transition">Blog</a>
            <a href="#pricing" className="block hover:text-gray-300 transition">Pricing</a>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition w-full">
              Login
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
