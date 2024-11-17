<script lang="ts">
	import Header from './header.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'

	let { children, data } = $props()
</script>

<div class="container mx-auto max-w-4xl px-4 lg:px-0 text-gray-800">
	
		<Header {data} />
		<main class="max-w-xl mx-auto">
		{@render children?.()}
	</main>
</div>
