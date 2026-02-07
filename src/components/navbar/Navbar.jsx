import React from 'react';
import { ThemeToggle } from '../ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border-b border-white/10 dark:border-white/10 light:border-black/5 z-[100] shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-4">
          <div className="absolute left-[110px] text-xl font-bold text-[#2afeb7]">Maurya C R</div>
          <div className="flex items-center space-x-8 pl-20">
            <a href="#home" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;