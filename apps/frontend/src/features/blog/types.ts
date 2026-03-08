export interface BlogPostData {
	id: string
	slug: string
	title: string
	description: string
	date: string
	tags: string[]
	cover?: string
	content: string
}
