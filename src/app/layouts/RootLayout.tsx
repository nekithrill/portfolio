import { Content } from '@/shared/components/ui/content'
import { Sidebar } from '@/widgets/sidebar'
import type { ReactNode } from 'react'
import styles from './RootLayout.module.scss'

type RootLayoutProps = {
	children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className={styles['app']}>
			<Sidebar />
			<Content>{children}</Content>
		</div>
	)
}
