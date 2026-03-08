import type React from 'react'

export interface ProjectCardTag {
	id: string
	label: string
	color?: string
}

export interface ProjectCardLink {
	id: string
	label: string
	href: string
	icon?: React.ReactNode
}

export interface ProjectCardProps {
	image: string
	imageAlt?: string
	title: string
	tags?: ProjectCardTag[]
	description: string
	links?: ProjectCardLink[]
	className?: string
}
