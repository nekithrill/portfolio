import { Code, Folders, ScanFace, type LucideIcon } from 'lucide-react'

export interface NavItem {
	path: string
	labelKey: string
	hotkey: string
	Icon?: LucideIcon
}

export const navItems: NavItem[] = [
	{ path: 'bio', labelKey: 'menu.bio', hotkey: '1', Icon: ScanFace },
	{ path: 'skills', labelKey: 'menu.skills', hotkey: '2', Icon: Code },
	{ path: 'projects', labelKey: 'menu.projects', hotkey: '3', Icon: Folders }
]
