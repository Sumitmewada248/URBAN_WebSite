import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-6 inline-block">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md">U</span>
                URBAN
              </span>
            </a>
            <p className="text-slate-400 mb-6">
              Creating innovative urban spaces that transform communities and enhance lives through sustainable design and cutting-edge architecture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Projects', 'Testimonials', 'Latest News', 'Contact Us'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <ArrowRight size={16} className="text-blue-600" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Urban Planning', 'Architectural Design', 'Construction Management', 'Project Development', 'Investment Planning', 'Community Engagement'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <ArrowRight size={16} className="text-blue-600" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600">
              Newsletter
            </h4>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-200"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            <p className="text-slate-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; 2025 Urban. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;