import { bioData } from '@/sections/bio/BioData'
import { Card } from '@/shared/components/ui/card'
import { FileItem } from '@/shared/components/ui/file-container'
import { Section } from '@/shared/components/ui/section'
import { useTranslation } from 'react-i18next'
import styles from './BioSection.module.scss'
import { EducationCard } from './components/education-card'

export function BioSection() {
	const { t } = useTranslation()

	const { cv, education } = bioData

	return (
		<Section id='bio'>
			<Card>
				<h2>{t('sections.bio.about.title')}</h2>
				<div className={styles['bio__about']}>
					<p>{t('sections.bio.about.textFrontend')}</p>
					<p>{t('sections.bio.about.textBackend')}</p>

					<FileItem
						file={{
							name: cv.fileName,
							url: cv.fileUrl,
							format: cv.fileFormat,
							size: cv.fileSize
						}}
					/>
				</div>
			</Card>

			<Card className={styles['bio__education']}>
				<h2>{t('sections.bio.education.title')}</h2>

				{education.map(item => (
					<EducationCard
						key={item.years}
						years={item.years}
						degree={
							item.degree ? t(`sections.bio.education.${item.degree}`) : ''
						}
						institution={t(`sections.bio.education.${item.institution}`)}
					/>
				))}
			</Card>
		</Section>
	)
}
