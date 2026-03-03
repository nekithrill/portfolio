import { useLanguage } from '@/app/providers/language'
import { Switch } from '@/shared/components/ui/switch'
import { LANGUAGES } from '@/shared/types/locale'

export const LocaleSwitch = () => {
	const { language, setLanguage } = useLanguage()

	const items = Object.values(LANGUAGES).map(lang => ({
		key: lang.value,
		label: lang.label,
		onClick: () => setLanguage(lang.value),
		isActive: language === lang.value
	}))

	return <Switch items={items} />
}
