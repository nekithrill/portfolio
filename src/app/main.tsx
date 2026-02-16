import App from '@/app/App'
import { RootProvider } from '@/app/providers/RootProvider'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')
if (!container) throw new Error('Root container missing in index.html')

createRoot(container).render(
	<React.StrictMode>
		<BrowserRouter>
			<RootProvider>
				<App />
			</RootProvider>
		</BrowserRouter>
	</React.StrictMode>
)
