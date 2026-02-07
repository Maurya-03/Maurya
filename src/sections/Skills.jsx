import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiWebflow,
  SiUnrealengine,
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
      { name: "UI/UX Design", icon: FaReact }, // abstract icon, text matters more
    ],
    Other: [
      { name: "Unreal Engine", icon: SiUnrealengine },
      { name: "Git", icon: FaGitAlt },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 mb-3">
            My Skills
          </p>
          <h2 className="text-4xl font-bold text-[#2afeb7]">
            Technical Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl p-6 backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5"
            >
              <h3 className="text-lg font-semibold mb-6 text-[#2afeb7]">
                {category}
              </h3>

              <ul className="space-y-4">
                {items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] transition-colors"
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
