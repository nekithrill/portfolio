import type { ProjectCardProps } from '@/pages/home/sections/projects/components/project-card'
import portfolioImg from '@/shared/assets/images/portfolio.png'

export const projectsData: Array<ProjectCardProps & { id: string }> = [
	{
		id: 'portfolio',
		image: portfolioImg,
		imageAlt: 'Portfolio App',
		title: 'Portfolio App',
		tags: [
			{ id: 'tag-react', label: 'React' },
			{ id: 'tag-typescript', label: 'TypeScript' },
			{ id: 'tag-zustand', label: 'Zustand' },
			{ id: 'tag-scss', label: 'SCSS' },
			{ id: 'tag-vite', label: 'Vite' },
			{ id: 'tag-i18next', label: 'i18next' }
		],
		description:
			'Personal portfolio built with React and TypeScript. Features a sidebar layout, multi-language support, theme switching and sections for bio, skills and projects.',
		demoUrl: '#',
		repoUrl: 'https://github.com/nekithrill/portfolio'
	},
	{
		id: 'scss-style-system',
		image: portfolioImg,
		imageAlt: 'SCSS style system',
		title: 'SCSS style system',
		tags: [
			{ id: 'tag-css', label: 'CSS' },
			{ id: 'tag-scss', label: 'SCSS' }
		],
		description:
			'A scalable CSS structure built with SCSS. Focused on BEM methodology, custom mixins, and theme variables to maintain a consistent visual style across complex layouts.',
		demoUrl: '#',
		repoUrl: 'https://github.com/nekithrill/scss-style-system'
	}
]
