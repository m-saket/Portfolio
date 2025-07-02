import React from 'react';
import { ExternalLink, FileText, ArrowRight, TrendingUp, Award, Users, Zap, Recycle, DollarSign, BarChart, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Solar Waste Recycling and EoL Strategy",
      description: "Tackled the rising issue of end-of-life solar waste by designing a decentralised recycling model backed by forecasting and policy alignment.",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sustainability Strategy",
      achievement: "Inter IIT Bronze Medal",
      icon: <Recycle className="w-5 h-5" />,
      tags: ["Circular Economy", "Policy Alignment", "Forecasting"],
      link: "https://drive.google.com/drive/folders/1aTQQZuLzBkGqKaUIEMPNx8UTRs9puca7?usp=drive_link",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Alternative Data Scoring for Rural Credit Inclusion",
      description: "Addressed rural credit inaccessibility by designing a scoring system using unconventional data sources and risk filters to enable fairer lending decisions.",
      image: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Fintech Strategy",
      achievement: "Global Rank 3/3700+",
      icon: <DollarSign className="w-5 h-5" />,
      tags: ["Alternative Data", "Risk Assessment", "Financial Inclusion"],
      link: "https://drive.google.com/drive/folders/1dKSAop3FlChkJ_XYrsesYkCWw6awTzXX?usp=sharing",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Strategic Growth Plan for Bikaji",
      description: "Reimagined product positioning and expansion using smart packaging, transparency-driven supply chains, and Industry 5.0 principles.",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Strategy",
      achievement: "Top 18/5300+, ICC 2025",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Smart Packaging", "Supply Chain", "Industry 5.0"],
      link: "https://drive.google.com/drive/folders/1gbAtMSsh0v5-ngg9AjVnYBBjdJVGWYMk?usp=sharing",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Smart Water Recycling at IIT Guwahati",
      description: "Solved for campus-level water inefficiencies by auditing loss points and proposing a scalable recycling system to reclaim and reuse wastewater.",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Process Optimization",
      achievement: "Gold Medal",
      icon: <Award className="w-5 h-5" />,
      tags: ["Process Auditing", "Water Management", "Scalable Systems"],
      link: "https://drive.google.com/drive/folders/1yQ9Rpm3LASytQdJcMADc6PA4qOpNUbKY?usp=sharing",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Hotel Revenue Dashboard in PowerBI",
      description: "Built an interactive dashboard to analyse hotel booking data, uncovering trends in revenue, occupancy, and pricing strategy across cities and platforms.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Data Analytics",
      achievement: "Revenue Optimization",
      icon: <BarChart className="w-5 h-5" />,
      tags: ["Data Visualization", "Revenue Management", "Business Intelligence"],
      link: "https://github.com/m-saket/Hotel-Dashboard/blob/main/insights.md",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Developed a machine learning solution to identify fraud in imbalanced transaction datasets, boosting recall and usability through model tuning and app deployment.",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Machine Learning",
      achievement: "Real-time Detection",
      icon: <Shield className="w-5 h-5" />,
      tags: ["Machine Learning", "Fraud Detection", "Model Deployment"],
      link: "https://github.com/m-saket/Credit-Card-Fraud-Detection",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Key Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Strategic projects spanning consulting, product strategy, and data-driven solutions across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-slate-100 hover:border-slate-200"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-sm rounded-full font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  
                  {/* Hover overlay with link icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                      <ExternalLink className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Achievement badge */}
                  <div className="mb-4 flex justify-center">
                    <div className="flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <Award size={14} className="mr-1.5" />
                      {project.achievement}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium hover:bg-slate-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">View Details</span>
                    <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-slate-600 text-sm bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200">
              <span>💡</span>
              <span>Click on any project card to explore detailed documentation and insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;