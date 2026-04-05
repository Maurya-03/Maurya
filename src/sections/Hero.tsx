import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

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
    }

    const pause = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((roleIndex + 1) % roles.length);
    }, 1500);

    return () => clearTimeout(pause);
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="flex min-h-[100svh] items-center px-4 pt-28 pb-14 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10 transition-colors"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="w-full max-w-3xl lg:w-[62%]">
          <p className="mb-3 text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 light:text-gray-700 sm:text-sm">
            Hello, I am
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#2afeb7] sm:text-5xl md:text-6xl">
            Maurya C R
          </h1>

          <h2 className="mb-6 min-h-8 text-lg font-medium text-gray-700 dark:text-gray-300 light:text-gray-700 sm:text-xl">
            {text}
            <span className="text-[#2afeb7]">|</span>
          </h2>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 light:text-gray-700 sm:mb-10 sm:text-base sm:leading-8">
            I specialize in crafting secure, scalable, and efficient web
            applications, blending modern design with powerful backend
            technologies. With a passion for creating intuitive user experiences
            and robust backend systems, I deliver comprehensive solutions that
            meet both technical requirements and user needs.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a
              href="#contact"
              className="w-full rounded-md border border-[#2afeb7] px-6 py-3 text-center text-sm font-medium text-[#2afeb7] transition hover:bg-[#2afeb7] hover:text-black sm:w-auto"
            >
              Contact Me
            </a>

            <a
              href="/files/Maurya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-md border border-[#2afeb7] px-6 py-3 text-center text-sm font-medium text-[#2afeb7] transition hover:bg-[#2afeb7] hover:text-black sm:w-auto"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-gray-600 dark:text-gray-400 light:text-gray-700 sm:mt-12">
            <a
              href="https://github.com/Maurya-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 transition hover:text-[#2afeb7]" />
            </a>
            <a
              href="https://www.linkedin.com/in/maurya-c-r-20491b2b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 transition hover:text-[#2afeb7]" />
            </a>
            <a
              href="https://instagram.com/maurya.cr_05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 transition hover:text-[#2afeb7]" />
            </a>
          </div>
        </div>

        <div className="hidden w-[38%] lg:block" />
      </div>
    </section>
  );
}
