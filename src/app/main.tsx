import App from '@/app/App'
import '@/app/styles/main.scss'
import '@/shared/configs/i18n/config'
import '@/shared/store/languageStore'
import '@/shared/store/themeStore'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) throw new Error('Root container missing in index.html')

createRoot(container).render(
	<StrictMode>
		<App />
	</StrictMode>
)
