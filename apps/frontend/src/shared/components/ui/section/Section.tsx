import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionRootProps {
	children: ReactNode
	className?: string
}

interface SectionHeaderProps {
	title?: string
	as?: 'h1' | 'h2' | 'h3'
	children?: ReactNode
	className?: string
}

interface SectionContentProps {
	children: ReactNode
	className?: string
}

interface SectionFooterProps {
	children?: ReactNode
	className?: string
}

const SectionRoot = ({ children, className }: SectionRootProps) => (
	<section className={`${styles['section']} ${className ?? ''}`.trim()}>
		{children}
	</section>
)

const SectionHeader = ({
	title,
	as: Tag = 'h2',
	children,
	className
}: SectionHeaderProps) => {
	if (!title && !children) return null

	return (
		<header
			className={`${styles['section__header']} ${className ?? ''}`.trim()}
		>
			{title && <Tag className={styles['section__title']}>{title}</Tag>}
			{children}
		</header>
	)
}

const SectionContent = ({ children, className }: SectionContentProps) => (
	<div className={`${styles['section__content']} ${className ?? ''}`.trim()}>
		{children}
	</div>
)

const SectionFooter = ({ children, className }: SectionFooterProps) => {
	if (!children) return null

	return (
		<footer
			className={`${styles['section__footer']} ${className ?? ''}`.trim()}
		>
			{children}
		</footer>
	)
}

export const Section = Object.assign(SectionRoot, {
	Header: SectionHeader,
	Content: SectionContent,
	Footer: SectionFooter
})
