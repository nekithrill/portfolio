import { Language } from '@/shared/types/locale'
import { createContext } from 'react'

export interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)