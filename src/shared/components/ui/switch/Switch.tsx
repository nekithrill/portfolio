import type { ReactNode } from 'react'
import styles from './Switch.module.scss'

type IconOption<T extends string> = {
	value: T
	icon: ReactNode
	ariaLabel: string
	label?: never
}

type LabelOption<T extends string> = {
	value: T
	label: string
	ariaLabel?: string
	icon?: never
}

type SwitchOption<T extends string> = IconOption<T> | LabelOption<T>

interface SwitchProps<T extends string> {
	options: SwitchOption<T>[]
	value: T
	onChange: (value: T) => void
}

export const Switch = <T extends string>({
	options,
	value,
	onChange
}: SwitchProps<T>) => {
	return (
		<div className={styles['switch']}>
			{options.map(option => (
				<button
					type='button'
					key={option.value}
					className={[
						styles['switch__option'],
						value === option.value && styles['switch__option--active']
					]
						.filter(Boolean)
						.join(' ')}
					aria-label={option.ariaLabel ?? option.label}
					aria-pressed={value === option.value}
					onClick={() => onChange(option.value)}
				>
					{option.icon ?? option.label}
				</button>
			))}
		</div>
	)
}
