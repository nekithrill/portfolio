import { Divider } from '@/shared/components/ui/divider'
import { Controls } from '@/widgets/controls'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Navbar } from '@/widgets/navbar'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

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
				<Header />
				<Divider />
				<Navbar />
				<Divider />
				<Controls />
				<Divider />
				<Footer />
			</aside>
		</>
	)
}
