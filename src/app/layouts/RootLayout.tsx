import { Sidebar } from '@/widgets/sidebar'
import { ReactNode } from 'react'
import styles from './RootLayout.module.scss'

type RootLayoutProps = {
	children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className={styles['app']}>
			<div className={styles['window']}>
				<Sidebar />
				<main className={styles['content']}>{children}</main>
			</div>
		</div>
	)
}
