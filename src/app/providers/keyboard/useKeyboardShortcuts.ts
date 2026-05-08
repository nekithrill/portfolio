// keyboard/useKeyboardShortcuts.ts
import { useEffect } from 'react'

const KEYMAP: Record<string, string> = {
	е: 't',
	д: 'l',
	'1': '1',
	'2': '2',
	'3': '3'
}

const SECTIONS: Record<string, string> = {
	'1': '#bio',
	'2': '#skills',
	'3': '#projects'
}

interface Shortcuts {
	toggleTheme: () => void
	toggleLanguage: () => void
}

export const useKeyboardShortcuts = ({
	toggleTheme,
	toggleLanguage
}: Shortcuts) => {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (
				['INPUT', 'TEXTAREA', 'SELECT'].includes(
					(e.target as HTMLElement).tagName
				)
			)
				return
			if (e.metaKey || e.ctrlKey || e.altKey) return

			const key = KEYMAP[e.key] ?? e.key.toLowerCase()

			switch (key) {
				case 't':
					toggleTheme()
					break
				case 'l':
					toggleLanguage()
					break
				default: {
					const section = SECTIONS[key]
					if (section) {
						document
							.querySelector(section)
							?.scrollIntoView({ behavior: 'smooth' })
					}
				}
			}
		}

		window.addEventListener('keydown', handler)
		return () => window.removeEventListener('keydown', handler)
	}, [toggleTheme, toggleLanguage])
}
