import { Card } from '../../Card'
import styles from './EducationCard.module.scss'
import { EducationCardProps } from './EducationCard.types'

export const EducationCard = ({
	years,
	degree,
	institution,
	className
}: EducationCardProps) => {
	const header = (
		<span className={styles['education-card__years']}>{years}</span>
	)

	return (
		<Card
			header={header}
			className={`${styles['education-card']} ${className ?? ''}`}
		>
			<div className={styles['education-card__content']}>
				<p className={styles['education-card__degree']}>{degree}</p>
				<p className={styles['education-card__institution']}>{institution}</p>
			</div>
		</Card>
	)
}
