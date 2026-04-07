export interface ProjectCardTag {
	id: string
	label: string
}

export interface ProjectCardProps {
	image?: string
	imageAlt?: string
	title: string
	tags?: ProjectCardTag[]
	description: string
	demoUrl?: string
	repoUrl?: string
	className?: string
}
