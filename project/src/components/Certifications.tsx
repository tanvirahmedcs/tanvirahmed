import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolio-data';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };
  
  // Extract unique years from certifications
  const years = ['All', ...Array.from(new Set(certifications.map(cert => cert.date)))];
  
  // Filter certifications based on active category
  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.date === activeCategory);

  // Only Coursera certifications
  const courseraCerts = certifications.filter(cert => cert.issuer && cert.issuer.toLowerCase().includes('coursera'));

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Certifications
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
            Professional qualifications that validate my expertise in cybersecurity.
          </motion.p>
        </div>
        
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveCategory(year)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === year
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {year}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              {cert.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {cert.date}
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Award size={24} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-dark-500 dark:text-dark-400">{cert.issuer}</p>
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors mt-2"
                  >
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {cert.date}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-600 flex items-center justify-center transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    <Award size={18} className="text-primary-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="bg-white dark:bg-dark-700 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {courseraCerts[selectedCert].image && (
                  <img
                    src={courseraCerts[selectedCert].image}
                    alt={courseraCerts[selectedCert].title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-2">
                    {courseraCerts[selectedCert].title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-2">
                    <span className="font-semibold">Issuer:</span> {courseraCerts[selectedCert].issuer}
                  </p>
                  <p className="text-dark-600 dark:text-dark-300 mb-2">
                    <span className="font-semibold">Year:</span> {courseraCerts[selectedCert].date}
                  </p>
                  {courseraCerts[selectedCert].link && (
                    <a
                      href={courseraCerts[selectedCert].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors mt-2 mb-4"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Details:</h4>
                    <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300 text-sm space-y-1">
                      <li>Comprehensive training in cybersecurity principles and practices</li>
                      <li>Hands-on labs and real-world scenarios</li>
                      <li>Focus on security operations, risk management, and compliance</li>
                      <li>Industry-recognized credential from Coursera</li>
                    </ul>
                  </div>
                  <button
                    className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-lg font-medium transition-colors absolute top-4 right-4"
                    onClick={() => setSelectedCert(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;