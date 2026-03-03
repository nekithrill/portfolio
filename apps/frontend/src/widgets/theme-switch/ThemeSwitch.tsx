import { useTheme } from '@/app/providers/theme'
import { Switch } from '@/shared/components/ui/switch'
import type { Theme } from '@/shared/types/theme'
import { Monitor, Moon, Sun } from 'lucide-react'

const THEMES: { key: Theme; icon: React.ReactNode; ariaLabel: string }[] = [
	{ key: 'system', icon: <Monitor />, ariaLabel: 'Switch to system theme' },
	{ key: 'light', icon: <Sun />, ariaLabel: 'Switch to light theme' },
	{ key: 'dark', icon: <Moon />, ariaLabel: 'Switch to dark theme' }
]

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()

	const items = THEMES.map(({ key, icon, ariaLabel }) => ({
		key,
		icon,
		ariaLabel,
		onClick: () => setTheme(key),
		isActive: theme === key
	}))

	return <Switch items={items} />
}
