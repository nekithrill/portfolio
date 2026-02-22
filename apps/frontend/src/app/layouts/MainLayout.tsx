import { Background } from '@/shared/components/ui/background/Background'
import { Sidebar } from '@/widgets/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'

export function MainLayout() {
	return (
		<div className={styles['app']}>
			<Background />
			<div className={styles['app__window']}>
				<Sidebar />
				<main className={styles['app__content']}>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
