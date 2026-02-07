import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Starfield from '../Starfield';
import { useTheme } from '../context/ThemeContext';

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

  return (
    <>
      <Starfield 
        starCount={500}
        speed={0.08}
        backgroundColor={currentTheme.bg}
        starColor={currentTheme.star}
      />
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Page;