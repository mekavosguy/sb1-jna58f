import React from 'react';
import { LineChart, Clock, Zap } from 'lucide-react';

interface ProgressData {
  day: string;
  hours: number;
}

interface ProgressChartProps {
  weeklyData: ProgressData[];
  totalHours: number;
  streak: number;
}

export default function ProgressChart({ weeklyData, totalHours, streak }: ProgressChartProps) {
  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <LineChart className="h-5 w-5 text-indigo-600" />
          Weekly Progress
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">{totalHours}h total</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-600">{streak} day streak</span>
          </div>
        </div>
      </div>
      
      <div className="h-48 flex items-end gap-2">
        {weeklyData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div 
              className="w-full bg-indigo-100 rounded-t-lg hover:bg-indigo-200 transition cursor-pointer relative group"
              style={{ height: `${(data.hours / maxHours) * 100}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
                {data.hours}h
              </div>
            </div>
            <span className="text-xs text-gray-600">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}