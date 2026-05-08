import { useLanguage } from '@/app/providers/language'
import { useTheme } from '@/app/providers/theme'
import { useKeyboardShortcuts } from './useKeyboardShortcuts'

export const KeyboardInit = () => {
	const { toggleTheme } = useTheme()
	const { toggleLanguage } = useLanguage()
	useKeyboardShortcuts({ toggleTheme, toggleLanguage })
	return null
}
