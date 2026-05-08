import App from '@/app/App'
import { RootProvider } from '@/app/providers/RootProvider'
import '@/app/styles/main.scss'
import '@/shared/configs/i18n/config'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) throw new Error('Root container missing in index.html')

createRoot(container).render(
	<StrictMode>
		<RootProvider>
			<App />
		</RootProvider>
	</StrictMode>
)
