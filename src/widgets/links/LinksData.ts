import { IconType } from 'react-icons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiTelegram2Line } from 'react-icons/ri'

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
