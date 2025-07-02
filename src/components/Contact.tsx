import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xgvydopj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resumeLink = "https://drive.google.com/file/d/1C-Kj9HymFnEGEm9DQdR_LDwqI1uf7f3t/view?usp=sharing";

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "saketmehla@gmail.com",
      href: "mailto:saketmehla@gmail.com",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/saket-mehla-369366311/",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View my projects",
      href: "https://github.com/m-saket",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume",
      value: "Download CV",
      href: resumeLink,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Looking to connect with teams solving real-world challenges at scale. Open to opportunities in consulting, product management, and strategic initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
                Send me a message
              </h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    There was an error sending your message. Please try again or contact me directly via email.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed hover:border-slate-400 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed hover:border-slate-400 text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed hover:border-slate-400 text-sm sm:text-base"
                    placeholder="Internship Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical disabled:bg-slate-100 disabled:cursor-not-allowed hover:border-slate-400 min-h-[150px] sm:min-h-[200px] text-sm sm:text-base"
                    placeholder="Tell me about the internship opportunity or how we can collaborate..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-slate-200"
                    >
                      <div className={`p-2.5 sm:p-3 bg-gradient-to-r ${info.gradient} text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">{info.title}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20"></div>
                <div className="relative p-4 sm:p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white shadow-xl">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                    <div className="w-3 h-3 bg-green-300 rounded-full mr-3 animate-pulse"></div>
                    Available Immediately
                  </h4>
                  <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                    Currently open for internships starting immediately. Ready to contribute to challenging projects 
                    in consulting, product management, or strategic initiatives.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">
                  Quick Stats
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs sm:text-sm">Response Time</span>
                    <span className="text-blue-600 font-medium text-xs sm:text-sm">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs sm:text-sm">Location</span>
                    <span className="text-slate-800 font-medium text-xs sm:text-sm">IIT Guwahati, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs sm:text-sm">Preferred Contact</span>
                    <span className="text-slate-800 font-medium text-xs sm:text-sm">Email / LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;