import React from 'react';
import { CheckCircle, Users, TrendingUp, Target, BarChart, Briefcase } from 'lucide-react';

const Responsibilities = () => {
  const responsibilityCategories = [
    {
      title: "Strategic Planning & Analysis",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      responsibilities: [
        "Develop comprehensive business strategies and roadmaps",
        "Conduct market research and competitive analysis",
        "Create financial models and ROI projections",
        "Identify growth opportunities and market trends",
        "Lead strategic planning sessions with stakeholders"
      ]
    },
    {
      title: "Product Management",
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      responsibilities: [
        "Define product vision and strategy aligned with business goals",
        "Manage product roadmap and feature prioritization",
        "Collaborate with engineering and design teams",
        "Conduct user research and gather customer feedback",
        "Analyze product metrics and KPIs for optimization"
      ]
    },
    {
      title: "Team Leadership & Management",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      responsibilities: [
        "Lead cross-functional teams of 10-20 professionals",
        "Mentor junior consultants and analysts",
        "Facilitate workshops and strategic planning sessions",
        "Manage stakeholder relationships and communications",
        "Drive change management and organizational transformation"
      ]
    },
    {
      title: "Business Development & Growth",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Develop client relationships and manage key accounts",
        "Create proposals and pitch presentations",
        "Support sales processes and contract negotiations",
        "Drive revenue growth and market expansion initiatives"
      ]
    },
    {
      title: "Data Analysis & Reporting",
      icon: <BarChart className="w-8 h-8 text-orange-600" />,
      responsibilities: [
        "Analyze complex business data and market trends",
        "Create executive dashboards and performance reports",
        "Develop KPIs and success metrics frameworks",
        "Present findings and recommendations to leadership",
        "Support data-driven decision making processes"
      ]
    },
    {
      title: "Client Consulting & Advisory",
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      responsibilities: [
        "Provide strategic advisory services to C-level executives",
        "Lead client workshops and discovery sessions",
        "Deliver consulting projects on time and within budget",
        "Manage client expectations and project scope",
        "Ensure high client satisfaction and retention rates"
      ]
    }
  ];

  return (
    <section id="responsibilities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Core Responsibilities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key areas of expertise and responsibility across strategic consulting and product management roles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {responsibilityCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;