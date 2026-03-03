import styles from './Chip.module.scss'

interface ChipProps {
	name: string
	className?: string
}

export const Chip = ({ name, className }: ChipProps) => {
	return <div className={`${styles['chip']} ${className ?? ''}`}>{name}</div>
}
