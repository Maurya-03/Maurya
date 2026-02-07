import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-700 mb-4">About Me</p>
        <h2 className="text-2xl font-bold text-[#2afeb7] mb-8">My Journey</h2>
        <div className="space-y-6 text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
          <p>
            I am a passionate developer with a strong foundation in both frontend and backend technologies. My journey in the world of programming began with a curiosity about how digital experiences are created, which led me to pursue a career in web development.
          </p>
          <p>
            With expertise in modern frameworks like React and Next.js, I create responsive and intuitive user interfaces. My backend skills in Python and database management allow me to build robust and scalable applications. I'm also experienced in UI/UX design, ensuring that the applications I build are not only functional but also aesthetically pleasing and user-friendly.
          </p>
          <p>
            I believe in continuous learning and staying updated with the latest technologies and best practices in the industry. My goal is to create impactful digital solutions that solve real-world problems and provide exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;