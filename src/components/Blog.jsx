import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Urban Development',
    excerpt: 'Exploring how sustainable practices are shaping the future of urban planning and architecture in major cities around the world.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'June 15, 2025',
    author: 'Michael Chen',
    category: 'Sustainability',
  },
  {
    id: 2,
    title: 'Innovative Materials Transforming Modern Architecture',
    excerpt: 'A look at how cutting-edge materials are changing the way we design and construct buildings in urban environments.',
    image: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'May 22, 2025',
    author: 'Sarah Johnson',
    category: 'Innovation',
  },
  {
    id: 3,
    title: 'Community-Centered Design: Putting People First',
    excerpt: 'How focusing on community needs and human-centered design principles creates more livable and vibrant urban spaces.',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'April 10, 2025',
    author: 'Emma Rodriguez',
    category: 'Community',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, news, and insights in urban development and architecture from our expert team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-blue-600">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800"
                >
                  Read More 
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;