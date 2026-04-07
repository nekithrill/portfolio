import { Card } from '@/shared/components/ui/card'
import { CalendarRange, GraduationCap, University } from 'lucide-react'
import styles from './EducationCard.module.scss'

export interface EducationCardProps {
	years: string
	degree: string
	institution: string
	className?: string
}

export const EducationCard = ({
	years,
	degree,
	institution,
	className
}: EducationCardProps) => {
	return (
		<Card className={`${styles['education-card']} ${className ?? ''}`}>
			<h3 className={styles['education-card__years']}>
				<CalendarRange />
				{years}
			</h3>
			<p className={styles['education-card__degree']}>
				<GraduationCap />
				{degree}
			</p>
			<p className={styles['education-card__institution']}>
				<University />
				{institution}
			</p>
		</Card>
	)
}
