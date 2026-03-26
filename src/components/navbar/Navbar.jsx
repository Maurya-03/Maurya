import React, { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border-b border-white/10 dark:border-white/10 light:border-black/5 z-[100] shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-lg sm:text-xl font-bold text-[#2afeb7]">Maurya C R</div>

          <button
            type="button"
            className="md:hidden text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#2afeb7]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Projects</a>
            <a href="#certifications" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Certificates</a>
            <a href="#contact" className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Contact</a>
            <ThemeToggle />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 rounded-lg border border-white/10 dark:border-white/10 light:border-black/10 bg-black/30 dark:bg-black/30 light:bg-white/40 p-4">
              <a href="#home" onClick={closeMenu} className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Home</a>
              <a href="#skills" onClick={closeMenu} className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Skills</a>
              <a href="#projects" onClick={closeMenu} className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Projects</a>
              <a href="#certifications" onClick={closeMenu} className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Certificates</a>
              <a href="#contact" onClick={closeMenu} className="text-gray-300 hover:text-[#2afeb7] transition-colors dark:text-gray-300 light:text-gray-700">Contact</a>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;