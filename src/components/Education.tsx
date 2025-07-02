import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Harvard Business School",
      location: "Boston, MA",
      period: "2016 - 2018",
      gpa: "3.8/4.0",
      specialization: "Strategy & General Management",
      achievements: [
        "Dean's List for Academic Excellence",
        "Case Competition Winner - Strategy Track",
        "MBA Student Association Vice President"
      ],
      coursework: [
        "Strategic Management",
        "Financial Analysis",
        "Operations Management",
        "Leadership & Organizational Behavior"
      ]
    },
    {
      degree: "Bachelor of Science in Business Administration",
      school: "University of Pennsylvania - Wharton",
      location: "Philadelphia, PA",
      period: "2012 - 2016",
      gpa: "3.7/4.0",
      specialization: "Finance & Management",
      achievements: [
        "Magna Cum Laude Graduate",
        "Phi Beta Kappa Honor Society",
        "Business Student Council President"
      ],
      coursework: [
        "Corporate Finance",
        "Marketing Management",
        "Business Analytics",
        "Entrepreneurship"
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified Management Consultant (CMC)",
      issuer: "Institute of Management Consultants",
      date: "2020",
      credential: "CMC-2020-1234"
    },
    {
      name: "Product Management Professional (PMP)",
      issuer: "Product Management Institute",
      date: "2021",
      credential: "PMP-2021-5678"
    },
    {
      name: "Agile Certified Practitioner",
      issuer: "Project Management Institute",
      date: "2019",
      credential: "ACP-2019-9012"
    },
    {
      name: "Six Sigma Green Belt",
      issuer: "American Society for Quality",
      date: "2018",
      credential: "SSGB-2018-3456"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Academic foundation and professional certifications that support my expertise in business strategy and management
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="lg:w-2/3">
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        {edu.school}
                      </p>
                      <p className="text-slate-600 mb-2">
                        Specialization: {edu.specialization}
                      </p>
                      <p className="text-slate-600">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                    
                    <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
                      <div className="flex items-center lg:justify-end mb-2">
                        <Calendar size={16} className="mr-2 text-slate-500" />
                        <span className="text-slate-600">{edu.period}</span>
                      </div>
                      <p className="text-slate-600">{edu.location}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <Award size={16} className="mr-2 text-orange-600" />
                        Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-600 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <BookOpen size={16} className="mr-2 text-green-600" />
                        Key Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Issued: {cert.date}</span>
                    <span className="font-mono bg-slate-100 px-2 py-1 rounded">
                      {cert.credential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;