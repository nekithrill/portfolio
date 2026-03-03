import logo from '@/shared/assets/logo.svg'
import styles from '@/shared/components/ui/logo/Logo.module.scss'

export const Logo = () => (
	<img src={logo} className={styles['logo']} alt='nekithrill logo' />
)
