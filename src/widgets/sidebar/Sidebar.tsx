import { Menu, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'

interface SidebarProps {
	children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<>
			<button
				className={styles['sidebar__burger']}
				type='button'
				onClick={() => setIsOpen(prev => !prev)}
				aria-label='Toggle menu'
			>
				{isOpen ? <X size={20} /> : <Menu size={20} />}
			</button>

			{isOpen && (
				<button
					type='button'
					className={styles['sidebar__overlay']}
					onClick={() => setIsOpen(false)}
					aria-label='Close menu'
					tabIndex={-1}
				/>
			)}

			<aside
				className={`${styles['sidebar']} ${isOpen ? styles['sidebar--open'] : ''}`}
			>
				{children}
			</aside>
		</>
	)
}
