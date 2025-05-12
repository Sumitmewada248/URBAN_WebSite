import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroImage = document.querySelector('.hero-image');
      const heroContent = document.querySelector('.hero-content');

      if (heroImage && heroContent) {
        heroImage.style.transform = `translateY(${scrollValue * 0.8}px)`;
        heroContent.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center transition-transform ease-out duration-500"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            filter: 'brightness(0.6)',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="hero-content max-w-3xl transition-transform ease-out duration-500">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building The Future <br />
            <span className="text-blue-400">One Project At A Time</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            We create innovative urban spaces that transform communities and enhance lives through sustainable design and cutting-edge architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 max-w-xs"
            >
              View Our Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-slate-900 transition-colors duration-200 flex items-center justify-center max-w-xs"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white mb-2 text-sm tracking-widest">SCROLL</p>
        <div className="w-0.5 h-10 bg-white/50 relative">
          <div className="absolute top-0 left-0 right-0 h-3 bg-white animate-pulse-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;