import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const roles = ["Full Stack Developer", "Engineer", "Cloud Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-10 pt-24 md:pt-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex w-full">
        <div className="w-full lg:w-[64%]">
          {/* Small intro */}
          <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 light:text-gray-700 mb-3">
            Hello, I am
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2afeb7] mb-4">
            Maurya C R
          </h1>

          {/* Typewriter role */}
          <h2 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 light:text-gray-700 min-h-8 mb-6">
            {text}
            <span className="text-[#2afeb7]">|</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 light:text-gray-700 mb-8 sm:mb-10 max-w-2xl">
            I specialize in crafting secure, scalable, and efficient web
            applications, blending modern design with powerful backend
            technologies. With a passion for creating intuitive user experiences
            and robust backend systems, I deliver comprehensive solutions that
            meet both technical requirements and user needs.
          </p>

          {/* CTA + Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 text-sm font-medium border border-[#2afeb7] text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-6">
              <a
                href="/files/Maurrya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 text-sm font-medium border border-[#2afeb7] text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="flex gap-4 text-gray-600 dark:text-gray-400 light:text-gray-700 mt-10 sm:mt-12">
            <a
              href="https://github.com/Maurya-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-[#2afeb7] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/maurya-c-r-20491b2b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-[#2afeb7] transition" />
            </a>
            <a
              href="https://instagram.com/maurya.cr_05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-[#2afeb7] transition" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block w-[36%]" />
      </div>
    </section>
  );
}
