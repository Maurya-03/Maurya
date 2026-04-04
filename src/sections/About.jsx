import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-700 mb-4">About Me</p>
        <h2 className="text-2xl font-bold text-[#2afeb7] mb-8">My Journey</h2>
        <div className="space-y-6 text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
          <p>
            I am a passionate developer with a strong foundation in both frontend and backend technologies, with a growing focus on secure and scalable systems. My journey in programming began with curiosity about how digital experiences are built, which gradually evolved into an interest in designing efficient and reliable applications.
          </p>
          <p>
            With experience in modern frameworks like React and Next.js, I build responsive and intuitive user interfaces. On the backend, I work with Python, APIs, and database systems like MongoDB and MySQL to develop structured and scalable solutions. I also have experience in UI/UX design, allowing me to create applications that are both functional and user-friendly.
          </p>
          <p>
            I actively explore areas such as cybersecurity, cloud platforms like Google Cloud, and system design to strengthen my ability to build secure and production-ready applications. I believe in continuous learning and staying aligned with industry best practices.
          </p>
          <p>
            My goal is to create impactful digital solutions that are efficient, secure, and designed with real-world usability in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;