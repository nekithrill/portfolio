import { useLanguage } from '@/app/providers/language'
import { Kbd } from '@/shared/components/ui/kbd'
import { Switch } from '@/shared/components/ui/switch'
import { LANGUAGES, type Language } from '@/shared/types/locale'
import styles from './LocaleSwitch.module.scss'

const options = Object.values(LANGUAGES).map(lang => ({
	value: lang.value as Language,
	label: lang.label
}))

export const LocaleSwitch = () => {
	const { language, setLanguage } = useLanguage()

	return (
		<div className={styles['locale-switch']}>
			<Switch options={options} value={language} onChange={setLanguage} />
			<Kbd>L</Kbd>
		</div>
	)
}
