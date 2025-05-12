import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: null, text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.',
      });
      setFormData(initialFormState);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: null, text: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or questions about our services? We'd love to hear from you. 
            Contact us using the form below or via our contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
            
            {submitMessage.type && (
              <div className={`p-4 mb-6 rounded-md ${
                submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information & Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600">
                    123 Urban Plaza, Suite 500<br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">
                    <a href="tel:+12125551234" className="hover:text-blue-600 transition-colors">+1 (212) 555-1234</a><br />
                    <a href="tel:+12125551235" className="hover:text-blue-600 transition-colors">+1 (212) 555-1235</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600">
                    <a href="mailto:info@urban.com" className="hover:text-blue-600 transition-colors">info@urban.com</a><br />
                    <a href="mailto:support@urban.com" className="hover:text-blue-600 transition-colors">support@urban.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 bg-slate-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-600"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4331965582496!2d77.29783341078699!3d23.227318208569297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5def2ee62b5b%3A0x325e7ed6e758b4d!2z4KSt4KWL4KSq4KS-4KSyLCDgpK7gpYHgpILgpJfgpLLgpL_gpK_gpL4g4KSb4KS-4KSqLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2IDQ2MjA0NA!5e0!3m2!1shi!2sin!4v1747022790861!5m2!1shi!2sin"
                  width="800" height="450" style={{ border: 0 }} allowFullScreen=""
                
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;