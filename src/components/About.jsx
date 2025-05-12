import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Urban architecture"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-lg -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-slate-800 rounded-lg -z-10 hidden md:block"></div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Urban</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Founded in 2010, Urban has grown from a small architectural firm to a leading
              urban development company with a global footprint. Our team of 150+ professionals
              is dedicated to creating spaces that inspire, function efficiently, and stand the
              test of time.
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              We believe in the power of thoughtful design to transform communities and enhance
              the quality of life for all. Our collaborative approach brings together experts
              from various disciplines to deliver holistic solutions that address the complex
              challenges of modern urban environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Innovative Design', 'Sustainable Practices', 'Expert Team', 'Global Experience'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-blue-600" />
                  <span className="text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">200+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">25+</div>
                <div className="text-slate-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;