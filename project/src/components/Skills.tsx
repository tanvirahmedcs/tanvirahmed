import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio-data';
import { Code, Server, Shield, Database, Laptop, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Map category names to icons
  const categoryIcons: Record<string, JSX.Element> = {
    "Programming": <Code size={20} />,
    "Frameworks & Libraries": <Laptop size={20} />,
    "Cybersecurity Tools": <Shield size={20} />,
    "Platforms": <Server size={20} />,
    "Databases": <Database size={20} />,
    "Soft Skills": <Users size={20} />
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Skills & Expertise
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
            My technical toolkit and specialized knowledge areas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2 text-white/90">
                    {categoryIcons[category.category] || <Code size={20} />}
                  </span>
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 15px rgba(0, 118, 255, 0.2)" 
                      }}
                      className="px-4 py-2 bg-gray-100 dark:bg-dark-600 text-dark-700 dark:text-dark-200 rounded-full text-sm font-medium shadow-skill hover:shadow-skill-hover transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">Professional Approach</h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Analytical Mindset</h4>
              <p className="text-dark-600 dark:text-dark-300">
                I approach security challenges with methodical analysis and structured problem-solving techniques.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Continuous Learning</h4>
              <p className="text-dark-600 dark:text-dark-300">
                I stay current with emerging threats and technologies through constant education and practice.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Attention to Detail</h4>
              <p className="text-dark-600 dark:text-dark-300">
                I maintain meticulous attention to details, essential for identifying vulnerabilities and securing systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;