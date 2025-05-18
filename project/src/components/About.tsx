import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolio-data';
import { BookOpen, Award, Flag, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            About Me
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
            Get to know more about my background, skills, and passion for cybersecurity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md z-10">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">Who I Am</h3>
                <p className="text-dark-600 dark:text-dark-200 mb-6 leading-relaxed">
                  {aboutMe.summary}
                </p>
                <div className="mb-6">
                  <h4 className="flex items-center text-xl font-semibold text-dark-800 dark:text-white mb-3">
                    <BookOpen size={20} className="text-primary-500 mr-2" />
                    Education
                  </h4>
                  <div className="pl-7">
                    <p className="font-medium text-dark-800 dark:text-white">
                      {aboutMe.education.degree}
                    </p>
                    <p className="text-dark-600 dark:text-dark-300">
                      {aboutMe.education.institution}, {aboutMe.education.location}
                    </p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      {aboutMe.education.duration}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="flex items-center text-xl font-semibold text-dark-800 dark:text-white mb-3">
                    <Award size={20} className="text-primary-500 mr-2" />
                    Awards & Honors
                  </h4>
                  <ul className="pl-7 space-y-2">
                    {aboutMe.awards.map((award, index) => (
                      <li key={index} className="text-dark-600 dark:text-dark-300 flex items-center gap-2">
                        • {award}
                        {award.toLowerCase().includes('guinness') && (
                          <img src="/image/award image.png" alt="Award" className="inline w-8 h-8 rounded ml-2 border border-primary-500" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="flex items-center text-xl font-semibold text-dark-800 dark:text-white mb-3">
                    <Award size={20} className="text-primary-500 mr-2" />
                    Featured Certificates
                  </h4>
                  <div className="flex flex-wrap gap-4 pl-7">
                    <div className="flex flex-col items-center">
                      <img src="/image/CISSP Certificate.jpeg" alt="CISSP Certificate" className="w-24 h-16 object-cover rounded shadow border border-primary-500 mb-1" />
                      <span className="text-xs text-dark-600 dark:text-dark-300">CISSP</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/image/CompTIA Security+ certificate.jpeg" alt="CompTIA Security+" className="w-24 h-16 object-cover rounded shadow border border-primary-500 mb-1" />
                      <span className="text-xs text-dark-600 dark:text-dark-300">CompTIA Security+</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/image/Harvard Cyber Security Certificate.jpeg" alt="Harvard Cyber Security" className="w-24 h-16 object-cover rounded shadow border border-primary-500 mb-1" />
                      <span className="text-xs text-dark-600 dark:text-dark-300">Harvard Cyber Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="flex items-center text-xl font-semibold text-dark-800 dark:text-white mb-4">
                <Flag size={20} className="text-primary-500 mr-2" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 pl-7">
                {aboutMe.languages.map((language, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="flex items-center text-xl font-semibold text-dark-800 dark:text-white mb-4">
                <Coffee size={20} className="text-primary-500 mr-2" />
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-3 pl-7">
                {aboutMe.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">My Approach</h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm passionate about cybersecurity and believe in a proactive approach to security. My background in both development and security gives me a unique perspective on building secure, resilient systems from the ground up.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">My Goals</h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I aim to leverage my technical skills to protect organizations from emerging threats, while continuously expanding my knowledge in this rapidly evolving field. I'm particularly interested in AI-driven security solutions and threat intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;