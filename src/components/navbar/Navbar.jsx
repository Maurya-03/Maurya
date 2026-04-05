import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/25 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/25 light:border-black/5 light:bg-white/70">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-[0.18em] text-[#2afeb7] sm:text-xl"
          >
            Maurya C R
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-[#2afeb7] md:hidden dark:text-gray-300 light:text-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Home</a>
            <a href="#about" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">About</a>
            <a href="#skills" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Skills</a>
            <a href="#projects" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Projects</a>
            <a href="#certifications" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Certificates</a>
            <a href="#contact" className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Contact</a>
            <ThemeToggle />
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="pb-4 md:hidden">
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-xl dark:border-white/10 dark:bg-black/45 light:border-black/10 light:bg-white/85">
              <a href="#home" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Home</a>
              <a href="#about" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">About</a>
              <a href="#skills" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Skills</a>
              <a href="#projects" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Projects</a>
              <a href="#certifications" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Certificates</a>
              <a href="#contact" onClick={closeMenu} className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700">Contact</a>
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
