import { Card } from '@/shared/components/ui/card'
import { GraduationCap, University } from 'lucide-react'
import styles from './BioCard.module.scss'

export interface BioCardProps {
	years: string
	degree: string
	institution: string
	className?: string
}

export const BioCard = ({
	years,
	degree,
	institution,
	className
}: BioCardProps) => {
	return (
		<Card className={`${styles['bio-card']} ${className ?? ''}`}>
			<h3 className={styles['bio-card__years']}>{years}</h3>
			<p className={styles['bio-card__degree']}>
				<GraduationCap />
				{degree}
			</p>
			<p className={styles['bio-card__institution']}>
				<University />
				{institution}
			</p>
		</Card>
	)
}
