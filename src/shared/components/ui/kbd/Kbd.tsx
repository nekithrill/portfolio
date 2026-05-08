import type { ReactNode } from 'react'
import styles from './Kbd.module.scss'

interface KbdProps {
	children: ReactNode
	className?: string
}

export const Kbd = ({ children, className }: KbdProps) => (
	<kbd className={`${styles['kbd']} ${className ?? ''}`}>{children}</kbd>
)
