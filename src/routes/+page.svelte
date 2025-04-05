<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import CardLoading from '$lib/components/CardLoading.svelte';

	export let data;
</script>

<div class="mx-auto max-w-5xl">
	<div class="mb-10 py-5">
		<h1 class="text-4xl font-bold">Lightning</h1>
		<p>Top 100 nodes lightning em tempo real.</p>
	</div>

	<main class="mb-10">
		<div class="grid gap-5 md:grid-cols-2">
			{#await data.nodes}
				{#each Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`) as item}
					<CardLoading />
				{/each}
			{:then nodes: NodeItem[]}
				{#each nodes as node, index}
					<Card {node} index={index + 1} />
				{/each}
			{:catch error}
				<h2>Ocorreu um erro inesperado, recarregue a página.</h2>
			{/await}
		</div>
	</main>
</div>
