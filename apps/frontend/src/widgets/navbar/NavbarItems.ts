import {
	BookUser,
	CircleUserRound,
	FolderTree,
	House,
	MessageSquareMore,
	Toolbox
} from 'lucide-react'

export const navItems = [
	{
		path: '/',
		labelKey: 'menu.home',
		Icon: House
	},
	{
		path: '/about',
		labelKey: 'menu.about',
		Icon: CircleUserRound
	},
	{
		path: '/skills',
		labelKey: 'menu.skills',
		Icon: Toolbox
	},
	{
		path: '/projects',
		labelKey: 'menu.projects',
		Icon: FolderTree
	},
	{
		path: '/blog',
		labelKey: 'menu.blog',
		Icon: MessageSquareMore
	},
	{
		path: '/contacts',
		labelKey: 'menu.contacts',
		Icon: BookUser
	}
]
