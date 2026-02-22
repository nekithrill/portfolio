import { ReactNode } from 'react'

export interface ProjectData {
	id: string
	title: string
	subtitle?: string
	content?: string | ReactNode
	image?: string
	footer?: string | ReactNode
	icon?: ReactNode
}

export const projectsData: ProjectData[] = [
	{
		id: 'project-example-1',
		title: 'Placeholder-1',
		subtitle: 'React, TypeScript, SCSS',
		content: 'Описание проекта...',
		image: '/src/shared/assets/images/portfolio.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		id: 'project-example-2',
		title: 'Placeholder-2',
		subtitle: 'Vue.js, Vuex',
		content: 'Описание проекта...',
		image: '/src/shared/assets/images/task-manager.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		id: 'project-example-3',
		title: 'Placeholder-3',
		subtitle: 'React, TypeScript, SCSS',
		content: 'Описание проекта...',
		image: '/src/shared/assets/images/portfolio.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		id: 'project-example-4',
		title: 'Placeholder-4',
		subtitle: 'Vue.js, Vuex',
		content: 'Описание проекта...',
		image: '/src/shared/assets/images/task-manager.png',
		footer: 'Live Demo →',
		icon: null
	}
]
