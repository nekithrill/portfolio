import { Outlet } from 'react-router-dom'
import styles from './Content.module.scss'

export const Content = () => {
	return (
		<main className={styles['content']}>
			<Outlet />
		</main>
	)
}
