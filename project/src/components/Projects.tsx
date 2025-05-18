import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, researches } from '../data/portfolio-data';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Projects
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
            A showcase of my cybersecurity and development work.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group cursor-pointer w-full max-w-md mx-auto"
                style={{ minWidth: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => setSelectedProject(index)}
              >
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-dark-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {projects[selectedProject].image && (
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-6">
                    {projects[selectedProject].description}
                  </p>
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Additional details and explanations */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Project Details:</h4>
                    <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300 text-sm space-y-1">
                      <li>Project duration: 2-6 weeks (varies by project)</li>
                      <li>Role: Lead Developer & Security Analyst</li>
                      <li>Tools: VS Code, GitHub, Linux, Docker, and more</li>
                      <li>Focus: Security, automation, and real-world problem solving</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300 text-sm space-y-1">
                      <li>Successfully implemented secure authentication and encryption systems</li>
                      <li>Developed AI-driven security tools for threat detection</li>
                      <li>Automated incident response and compliance checks</li>
                      <li>Collaborated with cross-functional teams for project delivery</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-800 dark:text-white mb-1">Explanation:</h4>
                    <p className="text-dark-600 dark:text-dark-300 text-sm">
                      This project demonstrates my ability to combine cybersecurity best practices with modern development techniques. I focused on building robust, scalable, and secure solutions tailored to real-world needs, leveraging both my technical and analytical skills.
                    </p>
                  </div>
                  <button
                    className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-lg font-medium transition-colors absolute top-4 right-4"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Research Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl font-bold text-dark-800 dark:text-white mb-4"
          >
            Researches
          </motion.h2>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="w-20 h-1.5 bg-primary-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-600 dark:text-dark-200 mb-8"
          >
            A collection of my research articles on cybersecurity and AI.
          </motion.p>
          <div className="grid grid-cols-1 gap-6">
            {researches.map((research, index) => (
              <motion.a
                key={index}
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-dark-700 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {research.title}
                </h3>
                {research.description && (
                  <p className="text-dark-600 dark:text-dark-300 line-clamp-3">
                    {research.description}
                  </p>
                )}
                <div className="flex justify-end">
                  <span className="text-primary-500 font-semibold">Read More</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
