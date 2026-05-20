import type { IconType } from 'react-icons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiTelegram2Line } from 'react-icons/ri'
import styles from './Links.module.scss'

interface LinkItem {
	key: string
	href: string
	label: string
	Icon: IconType
}

const ICON_SIZE = '2rem'

const links: LinkItem[] = [
	{
		key: 'github',
		href: 'https://github.com/nekithrill',
		label: 'GitHub',
		Icon: FiGithub
	},
	{
		key: 'telegram',
		href: 'https://t.me/nekithrill',
		label: 'Telegram',
		Icon: RiTelegram2Line
	},
	{
		key: 'linkedin',
		href: 'https://linkedin.com/in/nekithrill',
		label: 'LinkedIn',
		Icon: FiLinkedin
	}
]

export const Links = () => {
	return (
		<nav className={styles['links']}>
			{links.map(({ key, href, label, Icon }) => (
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
