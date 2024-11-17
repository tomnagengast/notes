import { json } from '@sveltejs/kit'
import type { Note } from '$lib/types'

async function getNotes() {
	let notes: Note[] = []

	const paths = import.meta.glob('/src/notes/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Note, 'slug'>
			const note = { ...metadata, slug } satisfies Note
			note.published && notes.push(note)
		}
	}

	notes = notes.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return notes
}

export async function GET() {
	const notes = await getNotes()
	return json(notes)
}
