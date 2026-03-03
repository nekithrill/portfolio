import { Divider } from '@/shared/components/ui/divider'
import { LocaleSwitch } from '@/widgets/locale-switch'
import { ThemeSwitch } from '@/widgets/theme-switch'
import styles from './Controls.module.scss'

export const Controls = () => {
	return (
		<div className={styles['controls']}>
			<ThemeSwitch />
			<Divider vertical />
			<LocaleSwitch />
		</div>
	)
}
