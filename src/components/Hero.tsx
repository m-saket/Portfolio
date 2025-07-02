import React from 'react';
import { ChevronDown, Linkedin, Mail, FileText, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Google Drive direct download link
  const resumeLink = "https://drive.google.com/file/d/1C-Kj9HymFnEGEm9DQdR_LDwqI1uf7f3t/view?usp=sharing";

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent block sm:inline animate-pulse">
              Saket Mehla
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 animate-fade-in-up delay-200">
            Business & Product Enthusiast
          </p>
          
          <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300 px-2">
            Pre-final year B.Tech student at IIT Guwahati passionate about consulting, product thinking, and data-driven problem solving.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 animate-fade-in-up delay-400 mx-2 sm:mx-4 border border-white/20 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-blue-200 italic leading-relaxed">
              "Solving complex business problems with structured thinking, sharp execution, and deep curiosity."
            </p>
          </div>

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12 animate-fade-in-up delay-500 px-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/saket-mehla-369366311/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/m-saket", label: "GitHub" },
              { icon: Mail, href: "mailto:saketmehla@gmail.com", label: "Email" },
              { icon: FileText, href: resumeLink, label: "Resume" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-2.5 sm:p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={label}
              >
                <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:text-blue-300 transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-600 px-4 sm:px-6">
            <button
              onClick={scrollToAbout}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore My Work</span>
                <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/50 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 text-sm sm:text-base backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group focus:outline-none"
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronDown size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/70 group-hover:text-white transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
};

export default Hero;