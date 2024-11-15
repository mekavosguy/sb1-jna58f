import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">DentalCare</span>
            </div>
            <p className="text-gray-600 mb-4">
              Modern dentistry with a gentle touch. Your smile is our passion.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Preventive Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Emergency Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Orthodontics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                contact@dentalcare.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                123 Dental Street, NY
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} DentalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}