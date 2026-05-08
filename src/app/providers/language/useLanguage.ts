import type { LanguageSwitchResult } from '@/shared/types/locale'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const useLanguage = (): LanguageSwitchResult => {
	const context = useContext(LanguageContext)

	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider')
	}

	return context
}
