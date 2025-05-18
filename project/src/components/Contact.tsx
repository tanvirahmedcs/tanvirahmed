import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/portfolio-data';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setIsSubmitting(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="w-20 h-1.5 bg-primary-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-600 dark:text-dark-200"
          >
            Have a question or want to work together? Reach out to me.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-dark-300">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href={`https://${contactInfo.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-800 text-white p-3 rounded-full hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href={`https://${contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] text-white p-3 rounded-full hover:bg-[#0069a0] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a 
                  href={`mailto:${contactInfo.email}`}
                  className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="What is this about?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                {formStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;