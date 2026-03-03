import { Content } from '@/widgets/content'
import { Sidebar } from '@/widgets/sidebar'
import styles from './RootLayout.module.scss'

export function RootLayout() {
	return (
		<div className={styles['app']}>
			<div className={styles['app__window']}>
				<Sidebar />
				<Content />
			</div>
		</div>
	)
}
