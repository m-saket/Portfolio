import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Strategic Consulting",
      skills: [
        { name: "Business Strategy", level: 95 },
        { name: "Market Analysis", level: 90 },
        { name: "Financial Modeling", level: 88 },
        { name: "Process Optimization", level: 92 },
        { name: "Change Management", level: 85 },
        { name: "Stakeholder Management", level: 93 }
      ]
    },
    {
      title: "Product Management",
      skills: [
        { name: "Product Strategy", level: 90 },
        { name: "Roadmap Planning", level: 88 },
        { name: "User Research", level: 85 },
        { name: "Agile Methodologies", level: 87 },
        { name: "Data Analytics", level: 82 },
        { name: "Go-to-Market Strategy", level: 89 }
      ]
    },
    {
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 93 },
        { name: "Project Management", level: 90 },
        { name: "Executive Presentation", level: 95 },
        { name: "Negotiation", level: 88 },
        { name: "Mentoring & Coaching", level: 85 },
        { name: "Cross-functional Collaboration", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive skill set developed through years of strategic consulting and product management experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;