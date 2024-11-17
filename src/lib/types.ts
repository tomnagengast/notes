export type Categories = 'sveltekit' | 'svelte'

export type Note = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
