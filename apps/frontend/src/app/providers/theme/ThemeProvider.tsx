import { useMemo, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { useThemeState } from './useThemeState'

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const { theme, setTheme } = useThemeState()

	const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}