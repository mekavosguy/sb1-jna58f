import React from 'react';
import { Sparkles } from 'lucide-react';

interface SkillRecommendation {
  name: string;
  match: number;
  requiredFor: string[];
}

export default function RecommendedSkills() {
  const recommendations: SkillRecommendation[] = [
    {
      name: "TypeScript",
      match: 95,
      requiredFor: ["Full-Stack Development", "Modern Web Apps"]
    },
    {
      name: "Docker",
      match: 88,
      requiredFor: ["DevOps", "Cloud Architecture"]
    },
    {
      name: "GraphQL",
      match: 82,
      requiredFor: ["API Development", "Modern Web Apps"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Recommended Next Steps</h3>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((skill, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg hover:bg-white transition cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{skill.name}</h4>
              <span className="text-sm font-medium text-indigo-600">{skill.match}% match</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.requiredFor.map((path, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {path}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}