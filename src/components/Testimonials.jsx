import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Robert Smith',
    position: 'CEO',
    company: 'Global Holdings',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'Urban transformed our vision into reality with impeccable attention to detail. Their innovative approach to urban planning has set a new standard in the industry.'
  },
  {
    id: 2,
    name: 'Amanda Lee',
    position: 'Director',
    company: 'City Planning Department',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'Working with Urban has been a game-changer for our city revitalization project. Their team\'s expertise and collaborative spirit made the entire process seamless.'
  },
  {
    id: 3,
    name: 'David Thompson',
    position: 'Property Developer',
    company: 'Nexus Properties',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The team at Urban consistently delivers beyond expectations. Their commitment to sustainable and functional design has added tremendous value to our projects.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    setTimeout(() => setSliding(false), 600);
  };

  const prevSlide = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    setTimeout(() => setSliding(false), 600);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [sliding]);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience working with Urban.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-slate-800 rounded-lg p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 text-blue-600/20" size={60} />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg md:text-xl text-slate-300 mb-6 relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-blue-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => {
                  setSliding(true);
                  setActiveIndex(index);
                  setTimeout(() => setSliding(false), 600);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;