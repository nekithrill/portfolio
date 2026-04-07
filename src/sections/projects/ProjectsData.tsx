import type { ProjectCardProps } from '@/sections/projects/components/project-card'

export const projectsData: Array<ProjectCardProps & { id: string }> = [
	{
		id: 'project-example-1',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Portfolio App',
		title: 'Portfolio App',
		tags: [
			{ id: 'tag-react', label: 'React' },
			{ id: 'tag-typescript', label: 'TypeScript' },
			{ id: 'tag-scss', label: 'SCSS' },
			{ id: 'tag-vite', label: 'Vite' }
		],
		description:
			'Personal portfolio built with React and TypeScript. Features a sidebar layout, multi-language support, theme switching and sections for bio, skills and projects.',
		demoUrl: '#',
		repoUrl: 'https://github.com/nekithrill/portfolio'
	},
	{
		id: 'project-example-2',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Project Two',
		title: 'Project Two',
		tags: [
			{ id: 'tag-react', label: 'React' },
			{ id: 'tag-typescript', label: 'TypeScript' }
		],
		description:
			'Second project description goes here. Built with React and TypeScript.',
		repoUrl: 'https://github.com/nekithrill'
	},
	{
		id: 'project-example-3',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Project Three',
		title: 'Project Three',
		tags: [
			{ id: 'tag-react', label: 'React' },
			{ id: 'tag-typescript', label: 'TypeScript' }
		],
		description:
			'Third project description goes here. Built with React and TypeScript.',
		repoUrl: 'https://github.com/nekithrill'
	},
	{
		id: 'project-example-4',
		image: '/src/shared/assets/images/portfolio.png',
		imageAlt: 'Project Four',
		title: 'Project Four',
		tags: [
			{ id: 'tag-react', label: 'React' },
			{ id: 'tag-typescript', label: 'TypeScript' }
		],
		description:
			'Fourth project description goes here. Built with React and TypeScript.',
		repoUrl: 'https://github.com/nekithrill'
	}
]
