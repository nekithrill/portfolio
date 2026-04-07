import { Card } from '@/shared/components/ui/card'
import { Chip } from '@/shared/components/ui/chip'
import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import styles from './ProjectCard.module.scss'
import type { ProjectCardProps } from './ProjectCard.types'

export const ProjectCard = ({
	image,
	imageAlt,
	title,
	tags,
	description,
	demoUrl,
	repoUrl,
	className
}: ProjectCardProps) => {
	return (
		<Card className={`${styles['project-card']} ${className ?? ''}`}>
			{image && (
				<img
					src={image}
					alt={imageAlt ?? title}
					className={styles['project-card__image']}
				/>
			)}

			<div className={styles['project-card__content']}>
				<div className={styles['project-card__header']}>
					<h3 className={styles['project-card__title']}>{title}</h3>
					<div className={styles['project-card__links']}>
						{repoUrl && (
							<a
								href={repoUrl}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub repository'
								className={styles['project-card__link']}
							>
								<FiGithub size='1em' />
							</a>
						)}
						{demoUrl && (
							<a
								href={demoUrl}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Live demo'
								className={styles['project-card__link']}
							>
								<ExternalLink size='1em' />
							</a>
						)}
					</div>
				</div>

				<p className={styles['project-card__description']}>{description}</p>

				{tags && tags.length > 0 && (
					<div className={styles['project-card__tags']}>
						{tags.map(tag => (
							<Chip key={tag.id} name={tag.label} />
						))}
					</div>
				)}
			</div>
		</Card>
	)
}
