import React from 'react';
import { TrendingUp, Users, Target, Lightbulb, Briefcase, BarChart, Zap, Brain, Rocket, Globe } from 'lucide-react';
import profileImage from '../assets/WhatsApp_Image_2025-06-30_at_00.18.38_6b4fab35-removebg-preview copy copy.png';

const About = () => {
  const highlights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Strategic Thinking",
      description: "Structured approach to complex business problems with data-driven insights"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Collaboration",
      description: "Experience working with diverse teams across consulting and product challenges"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Problem Solving",
      description: "Passion for tackling real-world challenges with innovative solutions"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Continuous Learning",
      description: "Always curious to explore new domains and push boundaries"
    }
  ];

  const areasOfInterest = [
    {
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      title: "Management Consulting",
      description: "Strategic problem-solving for business growth"
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-600" />,
      title: "Product Management",
      description: "Building user-centric solutions at scale"
    },
    {
      icon: <BarChart className="w-5 h-5 text-purple-600" />,
      title: "Data-Driven Strategy",
      description: "Analytics-powered decision making"
    },
    {
      icon: <Brain className="w-5 h-5 text-green-600" />,
      title: "Business Analytics",
      description: "Transforming data into actionable insights"
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      title: "Innovation Strategy",
      description: "Driving growth through strategic innovation"
    },
    {
      icon: <Globe className="w-5 h-5 text-teal-600" />,
      title: "Growth Strategy",
      description: "Scaling businesses across markets"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-12 sm:mb-16">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative w-80 sm:w-96 h-[400px] sm:h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <img
                    src={profileImage}
                    alt="Saket Mehla - Business & Product Enthusiast"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                            <div class="text-center">
                              <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <span class="text-4xl font-bold text-white">SM</span>
                              </div>
                              <p class="text-slate-800 font-bold text-lg">Saket Mehla</p>
                              <p class="text-slate-600 text-sm">Business & Product Enthusiast</p>
                              <p class="text-slate-500 text-xs mt-2">IIT Guwahati</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
                Passionate About Business & Product Innovation
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  I am Saket Mehla, a pre-final year undergraduate at IIT Guwahati pursuing a B.Tech in 
                  Mechanical Engineering. With a strong passion for structured problem-solving and a deep 
                  curiosity for business and product challenges, I've explored diverse problem spaces through 
                  consulting internships, national case competitions, and data-centric projects.
                </p>
                <p>
                  My interests lie at the intersection of management consulting, user-focused product design, 
                  and data-driven decision-making. Whether it's tackling real-world strategy problems or 
                  designing scalable solutions, I enjoy collaborating with sharp teams and continuously 
                  pushing myself to learn, adapt, and deliver meaningful impact.
                </p>
                <p>
                  Currently exploring opportunities in consulting and product management where I can apply 
                  my analytical mindset and passion for solving complex business challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 rounded-xl bg-white hover:bg-slate-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 hover:border-slate-200"
              >
                <div className="flex justify-center mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Areas of Interest */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Areas of Interest
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                  Passionate about solving complex challenges across these key domains
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {areasOfInterest.map((area, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-slate-200"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300 border border-slate-100">
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base">
                          {area.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
