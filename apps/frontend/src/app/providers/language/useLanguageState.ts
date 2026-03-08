import {
	type Language,
	LANGUAGES,
	LOCAL_STORAGE_LANGUAGE_KEY
} from '@/shared/types/locale'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const validateLanguage = (lang: string | null): Language => {
	if (!lang) return LANGUAGES.EN.value

	const validLanguages = Object.values(LANGUAGES).map(l => l.value)
	return validLanguages.includes(lang as Language)
		? (lang as Language)
		: LANGUAGES.EN.value
}

export const useLanguageState = () => {
	const { i18n } = useTranslation()

	const [language, setLanguageState] = useState<Language>(() => {
		try {
			const stored = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)
			return validateLanguage(stored)
		} catch (error) {
			console.error('Failed to load language from localStorage:', error)
			return LANGUAGES.EN.value
		}
	})

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang)
	}, [])

	useEffect(() => {
		const changeLanguage = async () => {
			try {
				await i18n.changeLanguage(language)
				localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language)
			} catch (error) {
				console.error('Failed to change language:', error)
			}
		}

		changeLanguage()
	}, [language, i18n])

	return { language, setLanguage }
}
