import React from 'react';
import { MapPin, Calendar, ExternalLink, GraduationCap, Users, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const workExperience = {
    title: "Associate Consultant Intern",
    company: "NoQs Digital",
    location: "India",
    period: "May 2024 – Present",
    type: "Internship",
    description: [
      "Studied SME SaaS workflows to uncover inefficiencies, pricing gaps, and automation opportunities",
      "Built investor-ready pitch decks with market sizing, product gaps, and competitive analysis",
      "Analysed digital adoption trends to segment and prioritise high-growth MSME clusters"
    ],
    achievements: ["Market sizing & analysis", "Investor pitch decks", "MSME segmentation strategy"]
  };

  const education = {
    degree: "B.Tech in Mechanical Engineering",
    school: "Indian Institute of Technology, Guwahati",
    period: "2023 – Present",
    status: "Pre-final year"
  };

  const responsibilities = [
    {
      title: "Student Coordinator",
      organization: "Centre for Career Development, IIT Guwahati",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      achievements: [
        "Spearheaded internship outreach for 2,000+ students, engaging 100+ recruiters across consulting, tech, and finance",
        "Streamlined outreach using a structured process—aligning JDs, shortlisting, and coordinating recruiter communication",
        "Published IITG's first Business Placement Brochure to attract high-growth startups and niche roles"
      ]
    },
    {
      title: "Core Team Member",
      organization: "Consulting & Analytics Club, IIT Guwahati",
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      achievements: [
        "Mentored 4,800+ students through the Winter Consulting Course across 35+ countries",
        "Co-authored IITG's Business Casebook, downloaded 150K+ times globally",
        "Led execution of 10+ national and global level events; hosted and mentored participants on Discord platform across National Cohorts"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              My journey through consulting, product management, and leadership roles at IIT Guwahati
            </p>
          </div>

          <div className="space-y-12">
            {/* Work Experience */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {workExperience.title}
                      </h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <span>{workExperience.company}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-slate-600 text-sm">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{workExperience.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{workExperience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {workExperience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-600 flex items-start leading-relaxed">
                      <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center">
                    <Award size={16} className="mr-2 text-orange-600" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {workExperience.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                      {education.degree}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-2">
                      {education.school}
                    </p>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{education.period} • {education.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Responsibilities */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center group-hover:text-purple-700 transition-colors duration-300">
                  <Users className="w-6 h-6 mr-3 text-purple-600" />
                  Leadership & Responsibilities
                </h3>
                
                <div className="space-y-8">
                  {responsibilities.map((resp, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                          {resp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-800 mb-2 hover:text-blue-700 transition-colors duration-300">
                            {resp.title}
                          </h4>
                          <p className="text-blue-600 font-medium mb-4">
                            {resp.organization}
                          </p>
                          <ul className="space-y-3">
                            {resp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-slate-600 flex items-start leading-relaxed">
                                <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < responsibilities.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-slate-300 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;