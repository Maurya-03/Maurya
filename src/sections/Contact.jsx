import React from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const XIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 light:text-gray-700 mb-3">Contact Me</p>
        <h2 className="text-3xl font-bold mb-8 text-[#2afeb7]">Get In Touch</h2>
        <div className="flex flex-col items-start space-y-4">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryacr05@gmail.com" target="_blank" className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#2afeb7] transition-colors">mauryacr05@gmail.com</a>
          <a href="tel:+919845894189" className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#2afeb7] transition-colors">+91 9845894189</a>
          <div className="flex flex-wrap gap-6 mt-6">
            <a href="https://github.com/Maurya-03" target="_blank" className="text-gray-400 dark:text-gray-400 light:text-gray-700 hover:text-[#2afeb7] hover:scale-105 transition-all">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/maurya.cr_05" target="_blank" className="text-gray-400 dark:text-gray-400 light:text-gray-700 hover:text-[#2afeb7] hover:scale-105 transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/maurya-c-r-20491b2b6" target="_blank" className="text-gray-400 dark:text-gray-400 light:text-gray-700 hover:text-[#2afeb7] hover:scale-105 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/maurya_cr" target="_blank" className="text-gray-400 dark:text-gray-400 light:text-gray-700 hover:text-[#2afeb7] hover:scale-105 transition-all">
              <XIcon size={24} />
            </a>
            <a href="https://www.facebook.com/share/1HMAFNWap9/" target="_blank" className="text-gray-400 dark:text-gray-400 light:text-gray-700 hover:text-[#2afeb7] hover:scale-105 transition-all">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;