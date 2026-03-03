import { ProjectCardProps } from '@/shared/components/ui/card'

export const projectsData: Array<ProjectCardProps & { id: string }> = [
	{
		id: 'project-example-1',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Placeholder-1',
		title: 'Placeholder-1',
		tags: [
			{ label: 'React', color: '#dbeafe' },
			{ label: 'TypeScript', color: '#ede9fe' },
			{ label: 'SCSS', color: '#dcfce7' }
		],
		description: 'Описание проекта...',
		links: [{ label: 'Live Demo', href: '#' }]
	},
	{
		id: 'project-example-2',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Placeholder-2',
		title: 'Placeholder-2',
		tags: [
			{ label: 'Vue.js', color: '#dcfce7' },
			{ label: 'Vuex', color: '#fef9c3' }
		],
		description: 'Описание проекта...',
		links: [{ label: 'Live Demo', href: '#' }]
	},
	{
		id: 'project-example-3',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Placeholder-3',
		title: 'Placeholder-3',
		tags: [
			{ label: 'React', color: '#dbeafe' },
			{ label: 'TypeScript', color: '#ede9fe' },
			{ label: 'SCSS', color: '#dcfce7' }
		],
		description: 'Описание проекта...',
		links: [{ label: 'Live Demo', href: '#' }]
	},
	{
		id: 'project-example-4',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Placeholder-4',
		title: 'Placeholder-4',
		tags: [
			{ label: 'Vue.js', color: '#dcfce7' },
			{ label: 'Vuex', color: '#fef9c3' }
		],
		description: 'Описание проекта...',
		links: [{ label: 'Live Demo', href: '#' }]
	}
]
