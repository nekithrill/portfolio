export type SkillItem = {
	label: string
	value: string
}

export type SkillSection = {
	id: string
	title: string
	items: SkillItem[]
}

export const skillsData: SkillSection[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		items: [
			{ label: 'Frameworks', value: 'React' },
			{ label: 'Languages', value: 'TypeScript / JavaScript' },
			{ label: 'State', value: 'Redux / Zustand' },
			{ label: 'Styling', value: 'CSS / SCSS' },
			{ label: 'Markup', value: 'HTML' }
		]
	},
	{
		id: 'backend',
		title: 'Backend',
		items: [
			{ label: 'Runtime', value: 'Node.js' },
			{ label: 'Frameworks', value: 'Express.js / NestJS' },
			{ label: 'API', value: 'REST' }
		]
	},
	{
		id: 'tools',
		title: 'Tools & Workflow',
		items: [
			{ label: 'Bundlers', value: 'Vite' },
			{ label: 'Linting', value: 'ESLint / Stylelint / Biome' },
			{ label: 'Formatting', value: 'Prettier' },
			{ label: 'Containerization', value: 'Docker' },
			{ label: 'VCS', value: 'Git' }
		]
	},
	{
		id: 'principles',
		title: 'Engineering Principles',
		items: [
			{ label: 'Architecture', value: 'SOLID' },
			{ label: 'Simplicity', value: 'KISS' },
			{ label: 'Maintainability', value: 'DRY' },
			{ label: 'Efficiency', value: 'YAGNI' }
		]
	},
	{
		id: 'exploring',
		title: 'Currently Exploring',
		items: [
			{ label: 'Learning', value: 'WebSockets / Realtime' },
			{ label: 'Interest', value: 'Microservices' },
			{ label: 'Next', value: 'Advanced NestJS patterns' }
		]
	}
]
