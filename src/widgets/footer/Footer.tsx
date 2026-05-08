import { Links } from '@/shared/components/ui/links'
import { Logo } from '@/shared/components/ui/logo'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<Logo />
			<Links />

			<p>
				&copy; 2026 <span>Nekithrill</span>.
			</p>
		</footer>
	)
}
