import React, { createContext, useContext, useState } from 'react'

interface langToggleContext {
  isHindi: boolean
  toggleLang: () => void
}

const langToggleContext = createContext<langToggleContext | undefined>(undefined)

interface LangProps {
  children: React.ReactNode
}
const Lang: React.FC<LangProps> = ({ children }) => {
  const [isHindi, setIsHindi] = useState(false)

  const toggleLang = () => {
    setIsHindi(!isHindi)
  }

  return (
    <langToggleContext.Provider value={{ isHindi, toggleLang }}>
      {children}
    </langToggleContext.Provider>
  )
}

// This function will act as a filter to stop using of this context outside the context Provider
const useLangToggle = () => {
  const context = useContext(langToggleContext)
  if (context === undefined) {
    throw new Error('useLangToggle must be used within a LangProvider')
  }
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { useLangToggle, Lang }
