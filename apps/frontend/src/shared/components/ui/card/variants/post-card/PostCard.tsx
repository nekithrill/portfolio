import { Card } from '../../Card'
import styles from './PostCard.module.scss'
import type { PostCardProps } from './PostCard.types'

export const PostCard = ({
	title,
	description,
	date,
	tags,
	cover,
	className
}: PostCardProps) => {
	const header = cover ? (
		<img src={cover} alt={title} className={styles['post-card__cover']} />
	) : undefined

	return (
		<Card
			header={header}
			className={`${styles['post-card']} ${className ?? ''}`}
		>
			<div className={styles['post-card__content']}>
				<div className={styles['post-card__meta']}>
					<span className={styles['post-card__date']}>{date}</span>
					<div className={styles['post-card__tags']}>
						{tags.map(tag => (
							<span key={tag} className={styles['post-card__tag']}>
								{tag}
							</span>
						))}
					</div>
				</div>

				<h3 className={styles['post-card__title']}>{title}</h3>
				<p className={styles['post-card__description']}>{description}</p>
			</div>
		</Card>
	)
}
