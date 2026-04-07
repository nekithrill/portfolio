import { skillsData } from '@/sections/skills/SkillsData'
import { Card } from '@/shared/components/ui/card'
import { Section } from '@/shared/components/ui/section'
import { useTranslation } from 'react-i18next'
import styles from './SkillsSection.module.scss'

export function SkillsSection() {
	const { t } = useTranslation()

	return (
		<Section id='skills' className={styles['skills']}>
			<h2>{t('sections.skills.tech.title')}</h2>
			<div className={styles['skills__grid']}>
				{skillsData.map(section => (
					<Card key={section.id} className={styles['skills__card']}>
						<h3 className={styles['skills__card-title']}>{section.title}</h3>

						<ul className={styles['skills__list']}>
							{section.items.map(item => (
								<li key={item.label} className={styles['skills__row']}>
									<span className={styles['skills__label']}>{item.label}</span>
									<span className={styles['skills__value']}>{item.value}</span>
								</li>
							))}
						</ul>
					</Card>
				))}
			</div>
		</Section>
	)
}
