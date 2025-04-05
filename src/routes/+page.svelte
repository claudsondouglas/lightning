<script lang="ts">
	export let data;
</script>

<div class="mx-auto max-w-5xl">
	<div class="mb-10 py-5">
		<h1 class="text-4xl font-bold">Lightning</h1>
		<p>Top 100 nodes lightning em tempo real.</p>
	</div>

	{#await data.nodes}
		loading...
	{:then nodes}
		{JSON.stringify(nodes)}
	{:catch error}
		{error}
	{/await}
</div>
