import styles from './Divider.module.scss'

interface DividerProps {
	vertical?: boolean
}

export const Divider = ({ vertical = false }: DividerProps) => (
	<hr
		data-divider
		className={`${styles['divider']} ${vertical ? styles['divider--vertical'] : ''}`}
	/>
)
