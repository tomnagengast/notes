<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()	
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="space-y-8">
		{#each data.notes as note}
			<li class="border-t border-slate-400 pt-8">
				<a href={`/notes/${note.slug}`} class="title">{note.title}</a>
				<p class="date">{formatDate(note.date)}</p>
				<p class="description">{note.description}</p>
			</li>
		{/each}
	</ul>
</section>
