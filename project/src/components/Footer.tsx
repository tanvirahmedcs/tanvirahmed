import React from 'react';
import { Link } from 'react-scroll';
import { Shield, ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolio-data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-primary-500 mr-2" />
              <h3 className="text-xl font-bold">Tanvir Ahmed</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Cybersecurity Analyst & Frontend Developer based in Dubai, specializing in building secure digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://${contactInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${contactInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="certifications"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <a
                  href="/image/tanvir-ahmed-cybersecurity-professional-cv.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500 mt-1 mr-3 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500 mt-1 mr-3 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-gray-400">
                  {contactInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tanvir Ahmed. All rights reserved.
          </p>
          
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors cursor-pointer"
          >
            <ChevronUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;