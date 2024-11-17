import * as config from '$lib/config'
import type { Note } from '$lib/types'

export const prerender = true

export async function GET({ fetch }) {
	const response = await fetch('api/notes')
	const notes: Note[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${notes
					.map(
						(note) => `
						<item>
							<title>${note.title}</title>
							<description>${note.description}</description>
							<link>${config.url}/${note.slug}</link>
							<guid isPermaLink="true">${config.url}/${note.slug}</guid>
							<pubDate>${new Date(note.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
