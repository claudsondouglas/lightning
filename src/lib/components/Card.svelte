<script lang="ts">
	import formatSatoshisToBitcoins from '$lib/utils/formatSatoshisToBitcoins';
	import formatUnixToDatetime from '$lib/utils/formatUnixToDatetime';
	import getLocalizedValue from '$lib/utils/getLocalizedValue';

	export let node, index;
</script>

<div class="bg-white p-5 cardnode">
	<div class="flex items-center justify-between gap-3">
		<div class="flex items-center gap-3">
			<span
				class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white"
				>{index}</span
			>
			<h2 class="text-lg font-bold md:text-xl" data-field="alias">
				{node.alias}
			</h2>
		</div>
		<div class="flex items-center gap-2 text-sm font-light">
			<span class="hidden md:block">{getLocalizedValue(node.city)}</span>
			{#if node.iso_code}
				<img
					src={`https://flagcdn.com/w40/${node.iso_code?.toLowerCase()}.webp`}
					class="h-5 w-7 object-cover"
					alt={node.iso_code}
				/>
			{/if}
		</div>
	</div>
	<div class="mt-3">
		<div>
			<strong>Canais:</strong>
			<span data-field="channels">{node.channels.toLocaleString('pt-BR', {})}</span>
		</div>
		<div class="flex items-center gap-1">
			<strong>Capacidade:</strong>
			{formatSatoshisToBitcoins(node.capacity)} BTC
		</div>

		<div class="flex gap-1">
			<strong>Localização:</strong>
			{!getLocalizedValue(node.city) && !getLocalizedValue(node.country) ? 'Não informado' : ''}
			{getLocalizedValue(node.city)}
			{getLocalizedValue(node.city) && '/'}
			{getLocalizedValue(node.country)}
		</div>

        <div class="flex gap-1">
			<strong>Visto pela primeira:</strong> {formatUnixToDatetime(node.firstSeen)}
        </div>

        <div class="flex gap-1">
			<strong>Ultima atualização:</strong> {formatUnixToDatetime(node.updatedAt)}
        </div>
	</div>

	<div class="bg-gray-100 truncate p-2 mt-5 text-sm">
		<span class="flex-1 truncate">{node.publicKey}</span>
    </div>
</div>
