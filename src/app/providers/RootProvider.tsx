import { KeyboardInit } from '@/app/providers/keyboard'
import { LanguageProvider } from '@/app/providers/language'
import { ThemeProvider } from '@/app/providers/theme'
import type { ReactNode } from 'react'

interface RootProviderProps {
	children: ReactNode
}

export const RootProvider = ({ children }: RootProviderProps) => {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<KeyboardInit />
				{children}
			</ThemeProvider>
		</LanguageProvider>
	)
}
