import { MainLayout } from '@/app/layouts/MainLayout'
import '@/app/styles/main.scss'
import { AboutPage } from '@/pages/about/AboutPage'
import { ContactsPage } from '@/pages/contacts/ContactsPage'
import { HomePage } from '@/pages/home/HomePage'
import { PrivacyPage } from '@/pages/privacy/PrivacyPage'
import { ProjectsPage } from '@/pages/projects/ProjectsPage'
import { SkillsPage } from '@/pages/skills/SkillsPage'
import { Background } from '@/shared/components/ui/background/Background'
import '@/shared/configs/i18n/config'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Background
				lineColor='var(--clr-grid-line)'
				lineWidth={2}
				cellSize={192}
				speed={2.5}
			/>

			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='skills' element={<SkillsPage />} />
					<Route path='projects' element={<ProjectsPage />} />
					<Route path='contacts' element={<ContactsPage />} />
					<Route path='privacy' element={<PrivacyPage />} />
				</Route>
			</Routes>
		</>
	)
}
