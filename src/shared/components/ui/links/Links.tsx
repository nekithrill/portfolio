import styles from './Links.module.scss'
import { linksData } from './LinksData'

const ICON_SIZE = '2rem'

export const Links = () => {
	return (
		<nav className={styles['links']}>
			{linksData.map(({ key, href, label, Icon }) => (
				<a
					key={key}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={label}
					className={styles['links__item']}
				>
					<Icon size={ICON_SIZE} />
				</a>
			))}
		</nav>
	)
}
