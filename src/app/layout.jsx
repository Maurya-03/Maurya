import React from 'react';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-[100svh] overflow-x-clip text-white dark:text-white light:text-black">
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
