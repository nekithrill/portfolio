import styles from './Chip.module.scss'

interface ChipProps {
	name: string
	variant?: 'default' | 'dashed'
	className?: string
}

export const Chip = ({ name, variant = 'default', className }: ChipProps) => {
	return (
		<div
			className={[
				styles['chip'],
				variant !== 'default' && styles[`chip--${variant}`],
				className
			]
				.filter(Boolean)
				.join(' ')}
		>
			{name}
		</div>
	)
}
