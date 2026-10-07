"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "iPhone Clone",
      category: "Full Stack",
      description: language === "pt"
        ? "Interface moderna e responsiva simulando o ecossistema iOS com animações e navegação interativa."
        : "Modern, responsive interface simulating the iOS ecosystem with animations and interactive navigation.",
      image: "",
      tags: ["React", "Vite", "Tailwind"],
      githubUrl: "https://github.com/jokerdev01/Iphone",
      liveUrl: "https://iphone-ten-eta.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="bg-[#020517] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{t.projects.title}</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Grade de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#020721] border border-gray-800 rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer hover:scale-105 hover:border-blue-600/60 transition-all duration-300 shadow-lg"
              onClick={() => setActiveProject(proj)}
            >
              <div className="w-full h-56 bg-[#1f2024] flex items-center justify-center overflow-hidden">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-200 text-4xl font-extrabold tracking-widest select-none">
                    IMG
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-3 text-left">
                  <span className="w-fit text-xs px-3 py-1 rounded-full border border-blue-600/50 bg-[#061239] text-blue-400 font-medium">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wide">{proj.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-800/40">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-3 py-0.5 rounded-full bg-[#051138] border border-blue-900/60 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                      title={t.projects.github}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(proj);
                      }}
                      className="cursor-pointer text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all p-1"
                      title={t.projects.open}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Iframe */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#020721] border border-gray-700 w-full max-w-6xl h-[88vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-800 bg-[#040b2e]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-xs bg-[#0b1540] text-gray-300 px-3 py-1 rounded-full border border-gray-700 font-mono">
                  {activeProject.liveUrl}
                </span>
                <h4 className="font-semibold text-white text-sm hidden sm:inline">
                  {activeProject.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  {t.projects.openInBrowser} ↗
                </a>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="text-red-400 hover:text-white bg-red-950/40 hover:bg-red-700/80 border border-red-800/60 px-3 py-1 rounded-lg text-sm transition"
                >
                  ✕ {t.projects.close}
                </button>
              </div>
            </div>

            <div className="flex-1 bg-black relative flex items-center justify-center">
              <iframe
                src={activeProject.liveUrl}
                title={activeProject.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;