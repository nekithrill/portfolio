import type { ProjectCardProps } from '@/sections/projects/components/project-card'
import portfolioImg from '@/shared/assets/images/portfolio.png'

export const projectsData: Array<ProjectCardProps & { id: string }> = [
	{
		id: 'project-example-1',
		image: portfolioImg,
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
		image: portfolioImg,
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
		image: portfolioImg,
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
		image: portfolioImg,
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
