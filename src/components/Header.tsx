import React from 'react';
import { Brain, Menu, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">SkillForge AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">My Paths</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Community</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer" />
            <Menu className="h-6 w-6 text-gray-600 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}