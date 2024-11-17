<script lang="ts">
	import type { PageData } from './$types';

	let { data, children } = $props<{ data: PageData }>();

	// console.log(data);
	// console.log(data?.url);
	
	// console.log(data?.url === '/notes');
	
</script>

<nav class="max-w-xl mx-auto">
    <div class="flex justify-between flex-col sm:flex-row items-center py-8">
        <a href="/" class="flex items-center space-x-4">
            <div class="font-bold text-4xl">Tom Nagengast</div>
        </a>
        <div class="space-x-4 pt-2 nav-items">
            <a
                href="/"
                class="px-2 py-1 rounded hover:bg-blue-200 hover:text-blue-700 {data?.url === '/' ? 'bg-blue-200 text-blue-700' : 'text-gray-800'}"
            >
                README
            </a>
            <a
                href="/notes"
                class="px-2 py-1 rounded hover:bg-blue-200 hover:text-blue-700 {data?.url === '/notes' ? 'bg-blue-200 text-blue-700' : 'text-gray-800'}"
            >
                Notes
            </a>
        </div>
    </div>
</nav>
