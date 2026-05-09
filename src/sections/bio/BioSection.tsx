import { bioData } from '@/sections/bio/BioData'
import { Card } from '@/shared/components/ui/card'
import { Divider } from '@/shared/components/ui/divider'
import { FileItem } from '@/shared/components/ui/file-container'
import { Section } from '@/shared/components/ui/section'
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react/jsx-runtime'
import styles from './BioSection.module.scss'
import { EducationCard } from './components/education-card'

export function BioSection() {
	const { t } = useTranslation()
	const { cv, education } = bioData

	return (
		<Section id='bio'>
			<h2>{t('sections.bio.title')}</h2>
			<div className={styles['bio']}>
				<div className={styles['bio__about']}>
					<p>{t('sections.bio.about.pitch')}</p>
					<Divider />
					<p>{t('sections.bio.about.firstParagraph')}</p>
					<p>{t('sections.bio.about.secondParagraph')}</p>
					<Divider />
					<p>{t('sections.bio.about.thirdParagraph')}</p>
				</div>

				<Card className={styles['bio__cv']}>
					<FileItem
						file={{
							name: cv.fileName,
							url: cv.fileUrl,
							format: cv.fileFormat,
							size: cv.fileSize
						}}
					/>
				</Card>

				<Card className={styles['bio__education']}>
					{education.map((item, index) => (
						<Fragment key={item.years}>
							{index > 0 && <Divider />}

							<EducationCard
								years={item.years}
								degree={
									item.degree ? t(`sections.bio.education.${item.degree}`) : ''
								}
								institution={t(`sections.bio.education.${item.institution}`)}
							/>
						</Fragment>
					))}
				</Card>
			</div>
		</Section>
	)
}
