import { Code, Folders, ScanFace, type LucideIcon } from 'lucide-react'

export interface NavItem {
	path: string
	labelKey: string
	Icon?: LucideIcon
}

export const navItems: NavItem[] = [
	{ path: 'bio', labelKey: 'menu.bio', Icon: ScanFace },
	{ path: 'skills', labelKey: 'menu.skills', Icon: Code },
	{ path: 'projects', labelKey: 'menu.projects', Icon: Folders }
]
