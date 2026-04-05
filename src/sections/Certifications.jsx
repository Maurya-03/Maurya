import React, { useState } from "react";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const allCertifications = [
    {
      title: "Data Structures & Algorithms (DSA)",
      organization: "Infosys SpringBoard",
      year: "2024",
      link: "/Certificates/infosys_springboard-DSA.pdf",
    },
    {
      title: "Google Generative AI",
      organization: "Google",
      year: "2025",
      link: "/Certificates/google-gen_AI.pdf",
    },
    {
      title: "MongoDB Atlas",
      organization: "MongoDB",
      year: "2024",
      link: "/Certificates/MongoDB%20Atlas.pdf",
    },
    {
      title: "Agile Methodology",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/Agile%20Methodology%20Infosys%20SpringBoard.pdf",
    },
    {
      title: "CI & CD DevOps",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/CI%20%26%20CD%20Devops%20Infosys%20SpringBoard.pdf",
    },
    {
      title: "DevOps Foundation",
      organization: "Infosys SpringBoard",
      year: "2025",
      link: "/Certificates/Devops%20Foundation%20Infosys%20SpringBoard.pdf",
    },
    {
      title: "Database Management System",
      organization: "Various",
      year: "2024",
      link: "/Certificates/Data%20Base%20Management%20System.pdf",
    },
  ];

  const featuredCertifications = allCertifications.slice(0, 3);

  return (
    <section
      id="certifications"
      className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 light:text-gray-700">
              Certifications
            </p>
            <h2 className="text-3xl font-bold text-[#2afeb7] sm:text-4xl">
              Credentials & Certifications
            </h2>
          </div>
          <button
            onClick={() => setShowAll(true)}
            className="w-full self-start rounded-md border border-[#2afeb7] px-6 py-2 font-medium text-[#2afeb7] transition-all duration-300 hover:bg-[#2afeb7] hover:text-black sm:w-auto sm:self-auto"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCertifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:border-black/5 light:bg-black/5 light:hover:bg-black/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700">
                {cert.title}
              </h3>
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400 light:text-gray-600">
                {cert.organization}
              </p>
              <p className="mb-4 text-xs text-gray-600 dark:text-gray-500 light:text-gray-500">
                {cert.year}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2afeb7] transition-colors hover:text-white"
              >
                View Certificate -&gt;
              </a>
            </div>
          ))}
        </div>

        {showAll && (
          <div
            className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto bg-black/70 p-4 dark:bg-black/70 light:bg-white/70 sm:items-center sm:p-6"
            onClick={() => setShowAll(false)}
          >
            <div
              className="my-8 max-h-[88svh] w-full max-w-6xl overflow-auto rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-md dark:border-white/10 dark:bg-black/90 light:border-black/10 light:bg-white/90 sm:my-0 sm:p-6 custom-scrollbar"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-[#2afeb7] sm:text-2xl">
                  All Certifications
                </h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
                  aria-label="Close certifications modal"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5 light:border-black/5 light:bg-black/5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700">
                      {cert.title}
                    </h3>
                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-400 light:text-gray-600">
                      {cert.organization}
                    </p>
                    <p className="mb-4 text-xs text-gray-600 dark:text-gray-500 light:text-gray-500">
                      {cert.year}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2afeb7] transition-colors hover:text-white"
                    >
                      View Certificate -&gt;
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 border-t border-white/10 pt-6 dark:border-white/10 light:border-black/10 sm:flex-row">
                <a
                  href="https://www.skills.google/public_profiles/979c0123-cc61-42f8-85df-1ddad69d69d5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md border border-[#2afeb7] px-6 py-3 text-center font-medium text-[#2afeb7] transition-all duration-300 hover:bg-[#2afeb7] hover:text-black sm:w-auto"
                >
                  Google Badges
                </a>
                <a
                  href="https://www.credly.com/users/maurya-c-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md border border-[#2afeb7] px-6 py-3 text-center font-medium text-[#2afeb7] transition-all duration-300 hover:bg-[#2afeb7] hover:text-black sm:w-auto"
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
