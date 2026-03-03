import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { navItems } from './NavbarItems'

export const Navbar = () => {
	const { t } = useTranslation()

	return (
		<nav className={styles['navbar']}>
			{navItems.map(item => {
				const Icon = item.Icon
				return (
					<NavLink
						key={item.path || item.labelKey}
						to={item.path}
						end
						className={({ isActive }) =>
							isActive
								? `${styles['navbar__link']} ${styles['navbar__link--active']}`
								: styles['navbar__link']
						}
					>
						{Icon && <Icon />}
						{t(item.labelKey)}
					</NavLink>
				)
			})}
		</nav>
	)
}
