import React, { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DentalCare</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Our Team</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">
              Our Team
            </a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">
              Contact
            </a>
            <button className="w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}