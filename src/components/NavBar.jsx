import { Languages } from "lucide-react"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function NavBar() {
    
      const { language, toggleLanguage } = useContext(LanguageContext);

 
      const t = translations[language];


  return (
  
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="relative w-full px-6 py-4 flex items-center justify-center">

        <div className="flex items-center gap-7">
          <a href="#home" className="hover:text-gray-300 px-4 py-2">{t.nav.home}</a>
          <a href="#sobremim" className="hover:text-gray-300">{t.nav.about}</a>
          <a href="#competencias" className="hover:text-gray-300">{t.nav.skills}</a>
          <a href="#projetos" className="hover:text-gray-300">{t.nav.projects}</a>
        </div>

        <button onClick={toggleLanguage} className="absolute right-6 p-2 rounded-full hover:bg-gray-200 transition "
          title="Traduzir">
          <Languages size={24} />
        </button>

      </div>
    </nav>
  )
}

export default NavBar