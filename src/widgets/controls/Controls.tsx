import { LocaleSwitch } from '@/features/locale-switch'
import { ThemeSwitch } from '@/features/theme-switch'
import styles from './Controls.module.scss'

export const Controls = () => {
	return (
		<div className={styles['controls']}>
			<ThemeSwitch />
			<LocaleSwitch />
		</div>
	)
}
