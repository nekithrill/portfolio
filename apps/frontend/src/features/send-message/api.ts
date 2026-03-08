import type { ContactFormData } from './types'
// import { api } from '@/shared/configs/axios/config'

export const sendContactForm = async (data: ContactFormData) => {
	// TODO: заменить на реальный запрос
	// return api.post('/api/contact', data)
	await new Promise(resolve => setTimeout(resolve, 1000))
	console.log(data)
}
