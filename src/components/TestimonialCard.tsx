import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, text, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{text}</p>
    </div>
  );
}