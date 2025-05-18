import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Shield, ChevronUp } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Handle scroll event for back-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        className="fixed bottom-8 right-8 z-50 flex items-center space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
        
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-dark-100 dark:bg-dark-600 text-dark-800 dark:text-white shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? (
            <Shield size={20} className="fill-primary-300" />
          ) : (
            <Shield size={20} className="fill-primary-500" />
          )}
        </motion.button>
      </motion.div>

      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main>
        <motion.div {...fadeIn}>
          <Hero />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <About />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <Experience />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <Skills />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <Projects />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <Certifications />
        </motion.div>
        
        <motion.div {...fadeIn}>
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;