import React, { useState } from "react";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const allCertifications = [
    {
      title: "Data Structures & Algorithms (DSA)",
      organization: "Infosys SpringBoard",
      year: "2024",
      link: "/Certificates/infosys_springboard-DSA.pdf"
    },
    {
      title: "Google Generative AI",
      organization: "Google",
      year: "2025",
      link: "/Certificates/google-gen_AI.pdf"
    },
    {
      title: "MongoDB Atlas",
      organization: "MongoDB",
      year: "2024",
      link: "/Certificates/MongoDB Atlas.pdf"
    },
    {
      title: "Agile Methodology",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/Agile Methodology Infosys SpringBoard.pdf"
    },
    {
      title: "CI & CD DevOps",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/CI & CD Devops Infosys SpringBoard.pdf"
    },
    {
      title: "DevOps Foundation",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/Devops Foundation Infosys SpringBoard.pdf"
    },
    {
      title: "Database Management System",
      organization: "Various",
      year: "2024",
      link: "/Certificates/Data Base Management System.pdf"
    }
  ];

  const featuredCertifications = allCertifications.slice(0, 3);

  return (
    <section
      id="certifications"
      className="py-24 px-6 lg:px-10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-700 mb-2">Certifications</p>
            <h2 className="text-4xl font-bold text-[#2afeb7]">Credentials & Certifications</h2>
          </div>
          <button
            onClick={() => setShowAll(true)}
            className="border border-[#2afeb7] px-6 py-2 text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition-all duration-300 rounded-md font-medium"
          >
            View All
          </button>
        </div>

        {/* Featured Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCertifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl p-6 backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-600 mb-1">
                {cert.organization}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-500 light:text-gray-500 mb-4">
                {cert.year}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2afeb7] hover:text-white transition-colors"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>

        {/* View All Modal */}
        {showAll && (
          <div className="fixed inset-0 bg-black/70 dark:bg-black/70 light:bg-white/70 z-[150] flex items-center justify-center p-6" onClick={() => setShowAll(false)}>
            <div className="bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl p-6 max-w-6xl w-full max-h-[90vh] overflow-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#2afeb7]">All Certifications</h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-6 backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-600 mb-1">
                      {cert.organization}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-500 light:text-gray-500 mb-4">
                      {cert.year}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2afeb7] hover:text-white transition-colors"
                    >
                      View Certificate →
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10">
                <a
                  href="https://www.skills.google/public_profiles/979c0123-cc61-42f8-85df-1ddad69d69d5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#2afeb7] text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition-all duration-300 rounded-md font-medium"
                >
                  Google Badges
                </a>
                <a
                  href="https://www.credly.com/users/maurya-c-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#2afeb7] text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition-all duration-300 rounded-md font-medium"
                >
                  Credly
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;