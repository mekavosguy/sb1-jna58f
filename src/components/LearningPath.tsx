import React from 'react';
import { BookOpen, Clock, Trophy } from 'lucide-react';

interface LearningPathProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: string;
  image: string;
}

export default function LearningPath({ title, description, progress, duration, level, image }: LearningPathProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center text-gray-600">
              <Trophy className="h-4 w-4 mr-1" />
              {level}
            </div>
            <div className="flex items-center text-indigo-600">
              <BookOpen className="h-4 w-4 mr-1" />
              Continue Learning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}