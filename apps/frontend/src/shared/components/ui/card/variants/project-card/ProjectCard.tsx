import { Card } from '../../Card'
import styles from './ProjectCard.module.scss'
import { ProjectCardProps } from './ProjectCard.types'

export const ProjectCard = ({
	image,
	imageAlt,
	title,
	tags,
	description,
	date,
	links,
	className
}: ProjectCardProps) => {
	const header = (
		<img
			src={image}
			alt={imageAlt ?? title}
			className={styles['project-card__image']}
		/>
	)

	const footer = (
		<div className={styles['project-card__footer']}>
			{date && <span className={styles['project-card__date']}>{date}</span>}
			{links && links.length > 0 && (
				<div className={styles['project-card__links']}>
					{links.map((link, i) => (
						<a
							key={i}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className={styles['project-card__link']}
						>
							{link.icon && (
								<span className={styles['project-card__link-icon']}>
									{link.icon}
								</span>
							)}
							{link.label}
						</a>
					))}
				</div>
			)}
		</div>
	)

	return (
		<Card
			header={header}
			footer={footer}
			className={`${styles['project-card']} ${className ?? ''}`}
		>
			<div className={styles['project-card__content']}>
				<h3 className={styles['project-card__title']}>{title}</h3>

				{tags && tags.length > 0 && (
					<div className={styles['project-card__tags']}>
						{tags.map((tag, i) => (
							<span
								key={i}
								className={styles['project-card__tag']}
								style={
									tag.color
										? ({ '--tag-color': tag.color } as React.CSSProperties)
										: undefined
								}
							>
								{tag.label}
							</span>
						))}
					</div>
				)}

				<p className={styles['project-card__description']}>{description}</p>
			</div>
		</Card>
	)
}
