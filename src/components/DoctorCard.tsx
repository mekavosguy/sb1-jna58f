import React from 'react';
import { Users } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  role: string;
  image: string;
  experience: string;
}

export default function DoctorCard({ name, role, image, experience }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-500 transition group">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 mb-3">{role}</p>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">{experience} experience</span>
        </div>
      </div>
    </div>
  );
}