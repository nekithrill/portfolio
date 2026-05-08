import {
	DARK_THEME_VALUE,
	DATA_THEME_ATTR,
	LOCAL_STORAGE_THEME_KEY,
	type Theme
} from '@/shared/types/theme'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

const validateTheme = (theme: string | null): Theme => {
	if (!theme) return 'system'
	const validThemes: Theme[] = ['system', 'light', 'dark']
	return validThemes.includes(theme as Theme) ? (theme as Theme) : 'system'
}

const getAppliedTheme = (
	theme: Theme,
	prefersDark: boolean
): 'light' | 'dark' => {
	if (theme === 'system') return prefersDark ? 'dark' : 'light'
	return theme
}

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(() => {
		try {
			return validateTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY))
		} catch {
			return 'system'
		}
	})

	const [prefersDark, setPrefersDark] = useState(
		() => window.matchMedia('(prefers-color-scheme: dark)').matches
	)

	const toggleTheme = useCallback(() => {
		const themes: Theme[] = ['light', 'dark', 'system']
		setTheme(
			prev => themes[(themes.indexOf(prev) + 1) % themes.length] ?? 'system'
		)
	}, [])

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = (e: MediaQueryListEvent) => setPrefersDark(e.matches)
		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	useEffect(() => {
		const root = document.documentElement
		const appliedTheme = getAppliedTheme(theme, prefersDark)

		if (appliedTheme === 'dark') {
			root.setAttribute(DATA_THEME_ATTR, DARK_THEME_VALUE)
		} else {
			root.removeAttribute(DATA_THEME_ATTR)
		}

		try {
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
		} catch (error) {
			console.error('Failed to save theme to localStorage:', error)
		}
	}, [theme, prefersDark])

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
