import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'
import { navItems } from './NavbarItems'

const ICON_SIZE = '1.4rem'

export const Navbar = () => {
	const { t } = useTranslation()
	const [activeSection, setActiveSection] = useState<string>('bio')

	useEffect(() => {
		const sections = navItems
			.map(item => document.getElementById(item.path))
			.filter(Boolean) as HTMLElement[]

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id)
					}
				})
			},
			{
				rootMargin: '-40% 0px -40% 0px',
				threshold: 0
			}
		)

		sections.forEach(sec => observer.observe(sec))
		return () => observer.disconnect()
	}, [])

	return (
		<nav className={styles['navbar']}>
			{navItems.map(({ path, labelKey, Icon }) => (
				<a
					key={path}
					href={`#${path}`}
					className={`${styles['navbar__link']} ${activeSection === path ? styles['navbar__link--active'] : ''}`}
				>
					<span>{t(labelKey)}</span>
					{Icon && <Icon size={ICON_SIZE} />}
				</a>
			))}
		</nav>
	)
}
