import { Kbd } from '@/shared/components/ui/kbd'
import { Switch } from '@/shared/components/ui/switch'
import { useThemeStore } from '@/shared/store/themeStore'
import type { Theme } from '@/shared/types/theme'
import { Monitor, Moon, Sun } from 'lucide-react'
import styles from './ThemeSwitch.module.scss'

const options = [
	{
		value: 'system' as Theme,
		icon: <Monitor size={'1.4rem'} />,
		ariaLabel: 'Switch to system theme'
	},
	{
		value: 'light' as Theme,
		icon: <Sun size={'1.4rem'} />,
		ariaLabel: 'Switch to light theme'
	},
	{
		value: 'dark' as Theme,
		icon: <Moon size={'1.4rem'} />,
		ariaLabel: 'Switch to dark theme'
	}
]

export const ThemeSwitch = () => {
	const { theme, setTheme } = useThemeStore()

	return (
		<div className={styles['theme-switch']}>
			<Switch options={options} value={theme} onChange={setTheme} />
			<Kbd>T</Kbd>
		</div>
	)
}
