import { Clock } from '@/widgets/clock'
import { LocaleSwitch } from '@/widgets/locale-switch'
import { ThemeSwitch } from '@/widgets/theme-switch'
import styles from './Controls.module.scss'

export const Controls = () => {
	return (
		<div className={styles['controls']}>
			<Clock />
			<div className={styles['controls__switches']}>
				<ThemeSwitch />
				<LocaleSwitch />
			</div>
		</div>
	)
}
