import { projectsData } from '@/sections/projects/ProjectsData'
import { Section } from '@/shared/components/ui/section'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from './components/project-card'
import styles from './ProjectsSection.module.scss'

export function ProjectsSection() {
	const { t } = useTranslation()

	return (
		<Section id='projects' className={styles['projects']}>
			<h2>{t('sections.projects.title')}</h2>

			{projectsData.map(({ id, ...project }) => (
				<ProjectCard
					key={id}
					{...project}
					className={styles['projects__card']}
				/>
			))}
		</Section>
	)
}
