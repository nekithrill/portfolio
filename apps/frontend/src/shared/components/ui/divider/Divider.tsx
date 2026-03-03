import styles from './Divider.module.scss'

interface DividerProps {
	vertical?: boolean
}

export const Divider = ({ vertical = false }: DividerProps) => (
	<hr
		className={`${styles.divider} ${vertical ? styles['divider--vertical'] : ''}`}
	/>
)
