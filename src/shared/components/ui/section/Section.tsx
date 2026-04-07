import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
	id: string
	children: ReactNode
	className?: string
}

export const Section = ({ id, children, className }: SectionProps) => (
	<section id={id} className={`${styles['section']} ${className ?? ''}`.trim()}>
		{children}
	</section>
)
