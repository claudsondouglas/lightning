<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<div class="mx-auto max-w-5xl">
	<div class="mb-10 py-5">
		<h1 class="text-4xl font-bold">Lightning</h1>
		<p>Top 100 nodes lightning em tempo real.</p>
	</div>

	<main class="mb-10">
		{#await data.nodes}
			loading...
		{:then nodes}
			<div class="grid gap-10 md:grid-cols-2">
				{#each nodes as node, index}
					<Card {node} index={index + 1} />
				{/each}
			</div>
		{:catch error}
			oxi
			{error}
		{/await}
	</main>
</div>
