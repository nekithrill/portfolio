import { Divider } from '@/shared/components/ui/divider'
import { Clock } from '@/widgets/clock'
import { Controls } from '@/widgets/controls'
import { Footer } from '@/widgets/footer'
import { Navbar } from '@/widgets/navbar'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<aside className={styles['sidebar']}>
			{/* <AuthPanel /> */}
			{/* <Divider /> */}
			<Clock />
			<Divider />
			<Controls />
			<Divider />
			<Navbar />
			<Divider />
			<Footer />
		</aside>
	)
}
