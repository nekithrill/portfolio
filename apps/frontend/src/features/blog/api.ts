import { api } from '@/shared/configs/axios/config'
import type { BlogPostData } from './types'

export const getBlogPosts = async (): Promise<BlogPostData[]> => {
	const response = await api.get('/api/posts')
	return response.data
}

export const getBlogPost = async (slug: string): Promise<BlogPostData> => {
	const response = await api.get(`/api/posts/${slug}`)
	return response.data
}
