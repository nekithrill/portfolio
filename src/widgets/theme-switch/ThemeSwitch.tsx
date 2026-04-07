import { useTheme } from '@/app/providers/theme'
import { Switch } from '@/shared/components/ui/switch'
import type { Theme } from '@/shared/types/theme'
import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'

interface ThemeItem {
	key: Theme
	Icon: LucideIcon
	ariaLabel: string
}

const THEMES: ThemeItem[] = [
	{ key: 'system', Icon: Monitor, ariaLabel: 'Switch to system theme' },
	{ key: 'light', Icon: Sun, ariaLabel: 'Switch to light theme' },
	{ key: 'dark', Icon: Moon, ariaLabel: 'Switch to dark theme' }
]

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()
	const ICON_SIZE = '1.4rem'

	const items = THEMES.map(({ key, Icon, ariaLabel }) => ({
		key,
		icon: <Icon size={ICON_SIZE} />,
		ariaLabel,
		onClick: () => setTheme(key),
		isActive: theme === key
	}))

	return <Switch items={items} />
}
