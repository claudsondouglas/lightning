<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';
	import CardLoading from '$lib/components/CardLoading.svelte';
	import { onMount } from 'svelte';

	export let data;

	let retry = false;
	let interval : any; // i need to clean the interval to not update two times if i click to make a reload

	onMount(() => {
		interval = setInterval(() => {
			reload();
		}, 30000);
	});

	function triggerRetry() {
		retry = true;

		setTimeout(() => {
			retry = false;
		}, 1000);
	}

	function reload() {
		invalidateAll();
		triggerRetry();
		clearInterval(interval);
	}
</script>

<div class="mx-auto max-w-5xl">
	<div class="flex items-center justify-between mb-10 py-5">
		<div class="">
			<h1 class="text-4xl font-bold">Lightning</h1>
			<p>Top 100 nodes lightning em tempo real.</p>
		</div>

		<button
			class="flex cursor-pointer items-center justify-end gap-2 rounded-xl px-5 py-3 text-xs font-thin bg-black/5 hover:bg-black/20 md:text-base"
			onclick={() => reload()}
		>
			<span class="animate-pulse">
				{retry ? 'Atualizando...' : `Atualizar dados`}
			</span>

			<svg
				class="h-4 w-4 data-[animate=true]:animate-spin"
				data-animate={retry}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg
			>
		</button>
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
