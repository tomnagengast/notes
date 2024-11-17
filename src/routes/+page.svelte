<script lang="ts">
	import * as config from '$lib/config'

	// Calculate years of experience
	const codingYears = new Date().getFullYear() - new Date('2012-09-01').getFullYear()
	const dataYears = new Date().getFullYear() - new Date('2014-10-01').getFullYear()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="text-7xl font-bold my-4 title">README</div>

	<div class="text-xl mb-4">
		I'm <a href="https://twitter.com/tomnagengast">@tomnagengast</a>,
		a data engineer, full-stack developer, and entrepreneur.
	</div>
	<div class="text-xl mb-4">
		I've been hooked on web development for {codingYears} years now and immersed in the data world
		for almost {dataYears} years.
	</div>
	<div class="text-xl mb-4">
		I wasn't always a nerd though - I grew up in the <a href="https://cinquaincellars.com/">wine
			industry</a>,
		got <a href="https://uclabruins.com/sports/track-and-field/roster/thomas-nagengast/1943">pretty good at
			sports-ing</a>, and even started my own <a href="https://bajkawine.com">wine label</a> before I
		turned
		my attention to the keys.
	</div>
	<div class="text-xl mb-4">
		My path to tech is kind of a long story, but you can <a
			href="https://www.getdbt.com/data-careers/tom-nagengast">dive in</a> if you're interested.
	</div>
	<div class="text-xl mb-4">
		Right now, I'm building notes at <a href="https://cable.tech">Cable</a>.
	</div>
</section>
