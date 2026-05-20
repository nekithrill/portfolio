import { BioSection } from '@/pages/home/sections/bio'
import { ProjectsSection } from '@/pages/home/sections/projects'
import { SkillsSection } from '@/pages/home/sections/skills'

export const HomePage = () => {
	return (
		<>
			<BioSection />
			<SkillsSection />
			<ProjectsSection />
		</>
	)
}
