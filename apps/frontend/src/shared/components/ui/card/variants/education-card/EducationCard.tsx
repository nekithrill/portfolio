import { Card, EducationCardProps } from '@/shared/components/ui/card'
import { CalendarRange, GraduationCap, University } from 'lucide-react'
import styles from './EducationCard.module.scss'

export const EducationCard = ({
	years,
	degree,
	institution,
	className
}: EducationCardProps) => {
	return (
		<Card className={`${styles['education-card']} ${className ?? ''}`}>
			<div className={styles['education-card__content']}>
				<p className={styles['education-card__degree']}>
					<GraduationCap />
					{degree}
				</p>
				<p className={styles['education-card__years']}>
					<CalendarRange />
					{years}
				</p>
				<p className={styles['education-card__institution']}>
					<University />
					{institution}
				</p>
			</div>
		</Card>
	)
}
