import React from 'react';
import { Compass, PenTool, Building2, PackageCheck, TrendingUp, Users } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Compass size={28} />,
    title: 'Urban Planning',
    description: 'Comprehensive urban planning solutions that balance aesthetics, functionality, and sustainability for modern cities.'
  },
  {
    icon: <PenTool size={28} />,
    title: 'Architectural Design',
    description: 'Innovative architectural designs that push boundaries while respecting cultural and environmental contexts.'
  },
  {
    icon: <Building2 size={28} />,
    title: 'Construction Management',
    description: 'End-to-end construction management ensuring projects are delivered on time, within budget, and to the highest standards.'
  },
  {
    icon: <PackageCheck size={28} />,
    title: 'Project Development',
    description: 'Full-service project development from concept to completion, handling all aspects of the development process.'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Investment Planning',
    description: 'Strategic investment planning to maximize returns on urban development and real estate projects.'
  },
  {
    icon: <Users size={28} />,
    title: 'Community Engagement',
    description: 'Involving local communities in the planning process to create spaces that truly serve people\'s needs.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet all your urban development needs, 
            from initial planning to project completion and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;