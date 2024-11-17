import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const notes = import.meta.glob<{
			default: any;
			metadata: any;
		}>('../../../notes/*.md')
		const matchingNote = Object.keys(notes).find((note) => note.endsWith(`${params.slug}.md`))
		if (!matchingNote) throw new Error(`Could not find ${params.slug}`)
		const note = await notes[matchingNote]()

		return {
			content: note.default,
			meta: note.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
