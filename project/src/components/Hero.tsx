import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import { contactInfo } from '../data/portfolio-data';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50 dark:from-dark-800 dark:to-dark-900 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-800 dark:text-white mb-4 leading-tight">
                <span className="block">Hello, I'm</span>
                <TypeAnimation
                  sequence={[
                    'Tanvir Ahmed',
                    2000,
                    'A Cyber Security Analyst',
                    2000,
                    'A Frontend Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-primary-500 dark:text-primary-400"
                  repeat={Infinity}
                />
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-dark-600 dark:text-dark-200 mb-8 leading-relaxed">
                Cybersecurity Analyst & Frontend Developer based in Dubai, specializing in building secure digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-lg font-semibold inline-flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  >
                    Contact Me
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-800 dark:text-white py-3 px-8 rounded-lg font-semibold border border-dark-200 dark:border-dark-600 inline-flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  >
                    View Projects
                  </Link>
                </motion.div>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <a 
                  href={`https://${contactInfo.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Github size={22} />
                </a>
                <a 
                  href={`https://${contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail size={22} />
                </a>
                <a
                  href="/image/tanvir-ahmed-cybersecurity-professional-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold inline-flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                  Download CV
                </a>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-dark-600 dark:text-dark-300">
                  <MapPin size={18} className="text-primary-500" />
                  <span className="text-sm">{contactInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-dark-600 dark:text-dark-300">
                  <PhoneCall size={18} className="text-primary-500" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img
                  src="/image/profile image.jpg"
                  alt="Tanvir Ahmed Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-primary-500 shadow-lg"
                />
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/10 dark:bg-accent-500/5 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="text-accent-500 font-bold">Cyber</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -left-2 w-32 h-32 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <div className="text-secondary-500 font-bold">Security</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown size={30} className="text-primary-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
