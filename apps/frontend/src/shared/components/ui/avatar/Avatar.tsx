import styles from './Avatar.module.scss'

interface AvatarProps {
	src?: string
	alt?: string
	size?: 'sm' | 'md' | 'lg'
}

export const Avatar = ({ src, alt = 'avatar', size = 'md' }: AvatarProps) => {
	return (
		<div className={`${styles['avatar']} ${styles[`avatar--${size}`]}`}>
			{src ? (
				<img src={src} alt={alt} className={styles['avatar__image']} />
			) : (
				<span className={styles['avatar__placeholder']} />
			)}
		</div>
	)
}
