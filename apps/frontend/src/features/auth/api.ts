import type { LoginFormData, RegisterFormData } from './types'

export const login = async (data: LoginFormData) => {
	// TODO: заменить на реальный запрос
	// return api.post('/auth/login', data)
	await new Promise(resolve => setTimeout(resolve, 1000))
	console.log('login', data)
}

export const register = async (data: RegisterFormData) => {
	// TODO: заменить на реальный запрос
	// return api.post('/auth/register', data)
	await new Promise(resolve => setTimeout(resolve, 1000))
	console.log('register', data)
}
