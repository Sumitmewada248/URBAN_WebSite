import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'residential',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'New York, USA'
  },

  {
    id: 3,
    title: 'Sustainable Factory Complex',
    category: 'industrial',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600',
    location: 'Detroit, USA'
  },
  {
    id: 4,
    title: 'Luxury Apartment Building',
    category: 'residential',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1600',
    location: 'Miami, USA'
  },
  {
    id: 5,
    title: 'Shopping Mall Renovation',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600',
    location: 'Los Angeles, USA'
  },
  {
    id: 6,
    title: 'Warehouse Distribution Center',
    category: 'industrial',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1600',
    location: 'Seattle, USA'
  },
   {
    id: 7,
    title: 'Office Building Design',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Denmark,USA'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'industrial', name: 'Industrial' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects across various sectors, 
            showcasing our expertise and commitment to excellence in urban development.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative rounded-lg overflow-hidden shadow-md"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-90' : 'opacity-70'
                }`}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-slate-200 text-sm mb-4">{project.location}</p>
                <a 
                  href="#" 
                  className={`inline-block px-4 py-2 border border-white rounded-md text-sm transition-all duration-300 transform ${
                    hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;