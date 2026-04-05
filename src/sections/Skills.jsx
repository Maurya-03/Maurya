import React from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiUnrealengine,
  SiWebflow,
} from "react-icons/si";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
    Backend: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    Design: [
      { name: "Figma", icon: FaFigma },
      { name: "Webflow", icon: SiWebflow },
      { name: "UI/UX Design", icon: FaReact },
    ],
    Other: [
      { name: "Unreal Engine", icon: SiUnrealengine },
      { name: "Git", icon: FaGitAlt },
    ],
  };

  return (
    <section
      id="skills"
      className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400 light:text-gray-500">
            My Skills
          </p>
          <h2 className="text-3xl font-bold text-[#2afeb7] sm:text-4xl">
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 light:border-black/5 light:bg-black/5 sm:p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-[#2afeb7]">
                {category}
              </h3>

              <ul className="space-y-4">
                {items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
                  >
                    <Icon className="text-xl" />
                    <span className="text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
