import { createContext, useState } from 'react'


// Cria o contexto responsável pelo idioma da aplicação.
export const LanguageContext = createContext()

// Controla o idioma e disponibiliza as funções para os componentes.
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')

  // Alterna entre português e inglês.
  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === 'pt' ? 'en' : 'pt'
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}