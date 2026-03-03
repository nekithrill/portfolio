import React from 'react'

export interface ProjectCardTag {
	label: string
	color?: string
}

export interface ProjectCardLink {
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
	date?: string
	links?: ProjectCardLink[]
	className?: string
}
