"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full mt-auto bg-[#020517] text-gray-300 border-t border-gray-800/80 pt-16 pb-8 px-6 relative z-10 overflow-hidden">
      {/* Luz de fundo decorativa suave */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Seção Superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Bio rápida */}
          <div className="md:col-span-2 flex flex-col gap-4 text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Lucas<span className="text-cyan-400">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.footer.available}
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              {t.footer.navigation}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#sobremim" className="hover:text-cyan-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#competencias" className="hover:text-cyan-400 transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-cyan-400 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              {t.footer.social}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <a
                href="https://github.com/jokerdev01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-oliveirasantos/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="mailto:lucasoliveirasantos090207@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-gray-800/80" />

        {/* Rodapé Final */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Lucas. {t.footer.rights}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors py-1 px-3 rounded-lg border border-gray-800 hover:border-cyan-500/40 bg-[#020721]"
          >
            <span>{t.footer.top}</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;