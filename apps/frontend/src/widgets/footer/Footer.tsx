import { Logo } from '@/shared/components/ui/logo'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className={styles['footer']}>
			<Logo />

			<div className={styles['footer__text']}>
				<Link to='/privacy-policy'>{t('menu.privacy')}</Link>
				<Link to='/terms-of-service'>{t('menu.terms')}</Link>

				<p>
					&copy; 2026 <span>Nekithrill</span>.
				</p>
			</div>
		</footer>
	)
}
