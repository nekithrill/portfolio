import {
	LANGUAGES,
	LOCAL_STORAGE_LANGUAGE_KEY,
	type Language
} from '@/shared/types/locale'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './LanguageContext'

const validateLanguage = (lang: string | null): Language => {
	if (!lang) return LANGUAGES.EN.value
	const validLanguages = Object.values(LANGUAGES).map(l => l.value)
	return validLanguages.includes(lang as Language)
		? (lang as Language)
		: LANGUAGES.EN.value
}

interface LanguageProviderProps {
	children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const { i18n } = useTranslation()

	const [language, setLanguage] = useState<Language>(() => {
		try {
			return validateLanguage(localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY))
		} catch {
			return LANGUAGES.EN.value
		}
	})

	const toggleLanguage = useCallback(() => {
		const langs = Object.values(LANGUAGES).map(l => l.value) as Language[]
		setLanguage(
			prev =>
				langs[(langs.indexOf(prev) + 1) % langs.length] ?? LANGUAGES.EN.value
		)
	}, [])

	useEffect(() => {
		const changeLanguage = async () => {
			try {
				await i18n.changeLanguage(language)
				document.documentElement.lang = language
				localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language)
			} catch (error) {
				console.error('Failed to change language:', error)
			}
		}

		changeLanguage()
	}, [language, i18n])

	return (
		<LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}
