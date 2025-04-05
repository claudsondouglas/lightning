<script lang="ts">
	import * as _ from 'remeda';
	import { invalidateAll } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';
	import CardLoading from '$lib/components/CardLoading.svelte';
	import Select from '$lib/components/Select.svelte';
	import { onMount } from 'svelte';

	export let data;

	let orderBy = {
		key: 'channels',
		order: 'desc',
		label: 'canais'
	};

	let retry = false;
	let interval: any; // i need to clean the interval to not update two times if i click to make a reload

	onMount(() => {
        const interval = setInterval(() => {
            reload();
        }, 60000);

        return () => clearInterval(interval);
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
    }
</script>

<div class="flex flex-col-reverse justify-between gap-2 py-5 md:flex-row md:gap-5">
	<div class="">
		<Select
			value={orderBy}
			onValueChange={(value: any) => {
				orderBy = value;
			}}
			label={'Ordem'}
			options={[
				{
					key: 'channels',
					order: 'desc',
					label: 'Canais (desc)'
				},
				{
					key: 'capacity',
					order: 'desc',
					label: 'Capacidade (desc)'
				}
			]}
		/>
	</div>

	<div class="flex justify-end">
		<button
			class="flex cursor-pointer items-center justify-end gap-2 rounded-xl lg:bg-black/5 md:px-5 md:py-3 text-xs font-thin hover:bg-black/20 md:text-base"
			onclick={() => reload()}
			title="automatic reload after 1 minute"
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
</div>

<main class="mb-10">
	<div class="flex flex-col gap-5 md:grid md:grid-cols-2">
		{#await data.nodes}
			{#each Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`) as item}
				<CardLoading />
			{/each}
		{:then nodes: NodeItem[]}
			{#each _.sortBy(nodes, [_.prop(orderBy.key as any), orderBy.order as any]) as node, index}
				<Card {node} index={index + 1} />
			{/each}
		{:catch error}
			<h2>Ocorreu um erro inesperado, recarregue a página.</h2>
		{/await}
	</div>
</main>
