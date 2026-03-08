import { LanguageProvider } from '@/app/providers/language'
import { ThemeProvider } from '@/app/providers/theme'
import type { ReactNode } from 'react'

interface RootProviderProps {
	children: ReactNode
}

export const RootProvider = ({ children }: RootProviderProps) => {
	return (
		<LanguageProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</LanguageProvider>
	)
}
