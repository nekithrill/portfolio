import type { ReactNode } from 'react'
import styles from './Card.module.scss'

export type CardProps = {
	children?: ReactNode
	className?: string
}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`${styles['card']} ${className ?? ''}`}>{children}</div>
	)
}
