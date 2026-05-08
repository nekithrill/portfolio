import { RootLayout } from '@/app/layouts/RootLayout'
import { BioSection } from '@/sections/bio/BioSection'
import { ProjectsSection } from '@/sections/projects/ProjectsSection'
import { SkillsSection } from '@/sections/skills/SkillsSection'

export default function App() {
	return (
		<RootLayout>
			<BioSection />
			<SkillsSection />
			<ProjectsSection />
		</RootLayout>
	)
}
