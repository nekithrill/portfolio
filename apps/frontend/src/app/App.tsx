import { RootLayout } from '@/app/layouts/RootLayout'
import '@/app/styles/main.scss'
import { AboutPage } from '@/pages/about/AboutPage'
// import { AdminPage } from '@/pages/admin/AdminPage'
// import { LoginPage } from '@/pages/auth/LoginPage'
// import { RegisterPage } from '@/pages/auth/RegisterPage'
// import { ProfilePage } from '@/pages/user/ProfilePage'
import { BlogPage } from '@/pages/blog/BlogPage'
import { ContactsPage } from '@/pages/contacts/ContactsPage'
import { HomePage } from '@/pages/home/HomePage'
import { PrivacyPage } from '@/pages/privacy/PrivacyPage'
import { ProjectsPage } from '@/pages/projects/ProjectsPage'
import { SkillsPage } from '@/pages/skills/SkillsPage'
import { TermsPage } from '@/pages/terms/TermsPage'
import '@/shared/configs/i18n/config'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<HomePage />} />
				{/* <Route path='admin' element={<AdminPage />} /> */}
				{/* <Route path='auth/login' element={<LoginPage />} /> */}
				{/* <Route path='auth/register' element={<RegisterPage />} /> */}
				{/* <Route path='profile' element={<ProfilePage />} /> */}
				<Route path='about' element={<AboutPage />} />
				<Route path='skills' element={<SkillsPage />} />
				<Route path='projects' element={<ProjectsPage />} />
				<Route path='blog' element={<BlogPage />} />
				<Route path='contacts' element={<ContactsPage />} />
				<Route path='privacy-policy' element={<PrivacyPage />} />
				<Route path='terms-of-service' element={<TermsPage />} />
			</Route>
		</Routes>
	)
}
