import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

export interface LinkItem {
	key: string
	href: string
	label: string
	Icon: IconType
}

export const linksData: LinkItem[] = [
	{
		key: 'github',
		href: 'https://github.com/nekithrill',
		label: 'GitHub',
		Icon: FaGithub
	},
	{
		key: 'telegram',
		href: 'https://t.me/nekithrill',
		label: 'Telegram',
		Icon: FaTelegram
	},
	{
		key: 'linkedin',
		href: 'https://linkedin.com/in/nekithrill',
		label: 'LinkedIn',
		Icon: FaLinkedin
	}
]
