import type { ReactNode } from 'react'
import styles from './Switch.module.scss'

type IconItem = {
	key: string
	isActive: boolean
	onClick: () => void
	icon: ReactNode
	ariaLabel: string
	label?: never
}

type LabelItem = {
	key: string
	isActive: boolean
	onClick: () => void
	label: string
	icon?: never
	ariaLabel?: string
}

type SwitchItem = IconItem | LabelItem

interface SwitchProps {
	items: SwitchItem[]
}

export const Switch = ({ items }: SwitchProps) => {
	return (
		<div className={styles['switch']}>
			{items.map(({ key, isActive, onClick, icon, label, ariaLabel }) => (
				<button
					type='button'
					key={key}
					onClick={onClick}
					className={`${styles['switch__button']}${isActive ? ` ${styles['switch__button--active']}` : ''}`}
					aria-label={ariaLabel ?? label}
					aria-pressed={isActive}
				>
					{icon ?? label}
				</button>
			))}
		</div>
	)
}
