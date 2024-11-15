import React from 'react';
import { Award, Star } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  level: 'bronze' | 'silver' | 'gold';
  date: string;
}

const levelColors = {
  bronze: 'from-orange-400 to-orange-600',
  silver: 'from-gray-400 to-gray-600',
  gold: 'from-yellow-400 to-yellow-600'
};

export default function AchievementBadge({ title, description, level, date }: AchievementBadgeProps) {
  return (
    <div className="group relative bg-white p-4 rounded-xl border border-gray-100 hover:border-indigo-500 transition">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${levelColors[level]} text-white`}>
          <Award className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {level === 'gold' && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <span className="text-xs text-gray-500 mt-2 block">{date}</span>
        </div>
      </div>
    </div>
  );
}