import { HomePage } from '@/pages/home'
import { Content } from '@/shared/components/ui/content'
import { Divider } from '@/shared/components/ui/divider'
import { useKeyboardShortcuts } from '@/shared/hooks/useKeyboardShortcuts'
import { Controls } from '@/widgets/controls'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Navbar } from '@/widgets/navbar'
import { Sidebar } from '@/widgets/sidebar'
import styles from './App.module.scss'

export const App = () => {
	useKeyboardShortcuts()

	return (
		<div className={styles['app']}>
			<Sidebar>
				<Header />
				<Divider />
				<Navbar />
				<Divider />
				<Controls />
				<Divider />
				<Footer />
			</Sidebar>

			<Content>
				<HomePage />
			</Content>
		</div>
	)
}
