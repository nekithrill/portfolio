import { Page } from '@/shared/components/ui/page'
import { Section } from '@/shared/components/ui/section'
import { LoginForm } from '@/widgets/login-form'
import { useTranslation } from 'react-i18next'
import styles from './LoginPage.module.scss'

export const LoginPage = () => {
	const { t } = useTranslation()

	return (
		<Page className={styles['login']}>
			<Section className={styles['login__section']}>
				<Section.Header title={t('auth.login')} as='h1' />
				<Section.Content className={styles['login__form']}>
					<LoginForm />
				</Section.Content>
			</Section>
		</Page>
	)
}
