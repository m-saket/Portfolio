import React from 'react';
import { Award, Trophy, Star, Target, Medal, Crown, TrendingUp, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Medal className="w-8 h-8 text-orange-600" />,
      title: "National Rank 3",
      description: "Inter-IIT Tech Meet 13.0, IIT Bombay - Outstanding performance in technical innovation and problem-solving",
      category: "Technical Excellence",
      highlight: "Inter-IIT Recognition",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Global Rank 3/3700+ teams",
      description: "Strategy Storm, IIT Guwahati - Alt-Data Lending Platform for rural credit inclusion achieving top global position",
      category: "Strategy Competition",
      highlight: "Top 0.08% globally",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Top 18/5300+ teams",
      description: "Indian Case Challenge, IIT Kharagpur - Strategic roadmap for Bikaji Foods expansion and brand revitalization",
      category: "Business Strategy",
      highlight: "Top 0.34% nationally",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Crown className="w-8 h-8 text-green-600" />,
      title: "Gold Medal",
      description: "Water Wise Consulting Challenge, IIT Guwahati - Smart water recycling system design and implementation strategy",
      category: "Sustainability Innovation",
      highlight: "Environmental Impact",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Gold Medal",
      description: "EcoEdge, IIT Guwahati - Innovative solutions for environmental challenges and sustainable development",
      category: "Innovation Challenge",
      highlight: "Sustainability Focus",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Bronze Medal",
      description: "National Fencing Championship, Nashik - Demonstrating excellence in competitive sports at national level",
      category: "Sports Excellence",
      highlight: "National Level",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  const impactMetrics = [
    {
      number: "150K+",
      label: "Downloads",
      description: "Business Casebook",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      number: "4,800+",
      label: "Global Learners",
      description: "Winter Consulting Bootcamp",
      icon: <Users className="w-6 h-6 text-green-600" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "2,000+",
      label: "Students Mentored",
      description: "Through various leadership roles",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Recognition across strategy competitions, technical innovation, sustainability challenges, and sports excellence
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="group relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-slate-200">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors duration-300">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {metric.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">
                    {metric.label}
                  </h3>
                  <p className="text-slate-600 text-sm text-center leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Awards and Recognition */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100 hover:border-slate-200"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-slate-100">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex flex-col gap-3 mb-4 items-center">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                        {achievement.category}
                      </span>
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-medium border border-emerald-200">
                        {achievement.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed text-center">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Looking to Connect & Collaborate
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Passionate about solving real-world challenges at scale. Let's discuss opportunities in consulting, product management, or strategic initiatives.
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;