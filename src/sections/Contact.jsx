import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const XIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-left">
        <p className="mb-3 text-sm tracking-wide text-gray-500 dark:text-gray-400 light:text-gray-700">
          Contact Me
        </p>
        <h2 className="mb-8 text-3xl font-bold text-[#2afeb7] sm:text-4xl">
          Get In Touch
        </h2>
        <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 light:border-black/5 light:bg-black/5 sm:p-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryacr05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700"
            >
              mauryacr05@gmail.com
            </a>
            <a
              href="tel:+919845894189"
              className="text-gray-300 transition-colors hover:text-[#2afeb7] dark:text-gray-300 light:text-gray-700"
            >
              +91 9845894189
            </a>
          </div>
          <div className="flex flex-wrap gap-5 sm:gap-6">
            <a
              href="https://github.com/Maurya-03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-105 hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-700"
            >
              <Github size={24} />
            </a>
            <a
              href="https://instagram.com/maurya.cr_05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-105 hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-700"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/maurya-c-r-20491b2b6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-105 hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-700"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/maurya_cr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-105 hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-700"
            >
              <XIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1HMAFNWap9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-105 hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-700"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
