import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio-data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Work Experience
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
            My professional journey in development and cybersecurity.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
                      <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-4">{exp.company}</h4>
                      
                      <div className="flex flex-wrap text-sm mb-4 gap-4">
                        <div className="flex items-center text-dark-500 dark:text-dark-300">
                          <Calendar size={16} className="mr-1 text-primary-500" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-dark-500 dark:text-dark-300">
                          <MapPin size={16} className="mr-1 text-primary-500" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.descriptions.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-dark-600 dark:text-dark-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
            <Briefcase size={20} className="mr-2" />
            <span>Currently pursuing further education and seeking cybersecurity opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;