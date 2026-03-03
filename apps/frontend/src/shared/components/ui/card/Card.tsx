import styles from './Card.module.scss'
import { CardProps } from './Card.types'

export const Card = ({ header, footer, children, className }: CardProps) => {
	return (
		<div className={`${styles['card']} ${className ?? ''}`}>
			{header && <div className={styles['card__header']}>{header}</div>}
			<div className={styles['card__body']}>{children}</div>
			{footer && <div className={styles['card__footer']}>{footer}</div>}
		</div>
	)
}
