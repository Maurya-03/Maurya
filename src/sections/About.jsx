import React from "react";

const About = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 light:text-gray-700">
          About Me
        </p>
        <h2 className="mb-8 text-3xl font-bold text-[#2afeb7] sm:text-4xl">
          My Journey
        </h2>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-5 leading-7 text-gray-300 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-gray-300 light:border-black/5 light:bg-black/5 light:text-gray-700 sm:p-8 sm:text-base sm:leading-8">
          <p>
            I am a passionate developer with a strong foundation in both
            frontend and backend technologies, with a growing focus on secure
            and scalable systems. My journey in programming began with
            curiosity about how digital experiences are built, which gradually
            evolved into an interest in designing efficient and reliable
            applications.
          </p>
          <p>
            With experience in modern frameworks like React and Next.js, I
            build responsive and intuitive user interfaces. On the backend, I
            work with Python, APIs, and database systems like MongoDB and MySQL
            to develop structured and scalable solutions. I also have
            experience in UI/UX design, allowing me to create applications that
            are both functional and user-friendly.
          </p>
          <p>
            I actively explore areas such as cybersecurity, cloud platforms
            like Google Cloud, and system design to strengthen my ability to
            build secure and production-ready applications. I believe in
            continuous learning and staying aligned with industry best
            practices.
          </p>
          <p>
            My goal is to create impactful digital solutions that are
            efficient, secure, and designed with real-world usability in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
