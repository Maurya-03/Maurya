import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Starfield from '../Starfield';
import MoonOrbitScene from '../components/MoonOrbitScene';
import { useTheme } from '../context/ThemeContext';

// Lazy load components for better performance
const Hero = lazy(() => import('../sections/Hero'));
const About = lazy(() => import('../sections/About'));
const Skills = lazy(() => import('../sections/Skills'));
const Certifications = lazy(() => import('../sections/Certifications'));
const Projects = lazy(() => import('../sections/Projects'));
const Contact = lazy(() => import('../sections/Contact'));
const Footer = lazy(() => import('../sections/Footer'));

const Page = () => {
  const { isDark } = useTheme();

  // Define our themes
  const themes = {
    dark: {
      bg: "#050505",       // Deep Black
      star: [255, 255, 255], // White Stars
    },
    light: {
      bg: "#f3f4f6",       // Light Gray/White
      star: [30, 41, 59],  // Dark Slate (looks cleaner than pure black)
    }
  };

  const currentTheme = isDark ? themes.dark : themes.light;

  // Animation variants for subtle fade-in
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <Starfield 
        starCount={500}
        speed={0.08}
        backgroundColor={currentTheme.bg}
        starColor={currentTheme.star}
      />
      <MoonOrbitScene />
      <div>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Hero />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <About />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Skills />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Projects />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Certifications />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Contact />
          </motion.div>
        </Suspense>
        <Suspense fallback={<div className="min-h-[20vh] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <motion.div {...fadeInUp}>
            <Footer />
          </motion.div>
        </Suspense>
      </div>
    </>
  );
};

export default Page;