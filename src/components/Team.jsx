import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    position: 'Chief Architect',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'john@urban.com'
    }
  },
  {
    name: 'Sarah Johnson',
    position: 'Urban Planner',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@urban.com'
    }
  },
  {
    name: 'Michael Chen',
    position: 'Project Manager',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@urban.com'
    }
  },
  {
    name: 'Emma Rodriguez',
    position: 'Interior Designer',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emma@urban.com'
    }
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet our team of experienced professionals dedicated to delivering exceptional 
            urban development solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-96 object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 transform">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.position}</p>
                
                <div className="flex gap-3 items-center">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors duration-200">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors duration-200">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-blue-400 transition-colors duration-200">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;