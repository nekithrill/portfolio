import { RootLayout } from '@/app/layouts/RootLayout'
import '@/app/styles/main.scss'
import { BioSection } from '@/sections/bio/BioSection'
import { ProjectsSection } from '@/sections/projects/ProjectsSection'
import { SkillsSection } from '@/sections/skills/SkillsSection'
import '@/shared/configs/i18n/config'

export default function App() {
	return (
		<RootLayout>
			<BioSection />
			<SkillsSection />
			<ProjectsSection />
		</RootLayout>
	)
}
