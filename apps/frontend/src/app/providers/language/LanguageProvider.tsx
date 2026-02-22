import { useMemo, type ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { useLanguageState } from './useLanguageState'

interface LanguageProviderProps {
	children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const { language, setLanguage } = useLanguageState()

	const value = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage]
	)

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}
