import type { ReactNode } from 'react'
import styles from './Page.module.scss'

interface PageProps {
	children: ReactNode
	className?: string
}

export const Page = ({ children, className }: PageProps) => (
	<div className={`${styles['page']} ${className ?? ''}`.trim()}>
		{children}
	</div>
)
