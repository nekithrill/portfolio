import { Page } from '@/shared/components/ui/page'
import { Section } from '@/shared/components/ui/section'
import { RegisterForm } from '@/widgets/register-form'
import { useTranslation } from 'react-i18next'
import styles from './RegisterPage.module.scss'

export const RegisterPage = () => {
	const { t } = useTranslation()

	return (
		<Page className={styles['register']}>
			<Section className={styles['register__section']}>
				<Section.Header title={t('auth.register')} as='h1' />
				<Section.Content className={styles['register__form']}>
					<RegisterForm />
				</Section.Content>
			</Section>
		</Page>
	)
}
