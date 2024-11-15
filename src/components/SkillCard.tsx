import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

export default function SkillCard({ name, level, category, icon }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-indigo-500 transition cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition">
          {icon}
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition" />
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{category}</p>
      
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-1 w-4 rounded-full ${
              i < level ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}