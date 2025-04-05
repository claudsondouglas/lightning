<script lang="ts">
	import formatSatoshisToBitcoins from '$lib/utils/formatSatoshisToBitcoins';
	import formatUnixToDatetime from '$lib/utils/formatUnixToDatetime';
	import getLocalizedValue from '$lib/utils/getLocalizedValue';
	import { KeyRound } from '@lucide/svelte';
	import CardCopyButton from './CardCopyButton.svelte';

	export let node : NodeItem, index: number;
</script>

<div class="cardnode bg-white p-5 w-full">
	<div class="flex items-center justify-between gap-3">
		<div class="flex items-center gap-3">
			<span class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white"
				>{index}</span
			>
			<h2 class="text-lg font-bold md:text-xl">
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
			<span class="font-light">{node.channels.toLocaleString('pt-BR', {})}</span>
		</div>
		<div class="flex items-center gap-1">
			<strong>Capacidade:</strong>
			<span class="font-light">
				{formatSatoshisToBitcoins(node.capacity)} BTC
			</span>
		</div>

		<div class="flex gap-1">
			<strong>Localização:</strong>
			<span class="font-light">
				{!getLocalizedValue(node.city) && !getLocalizedValue(node.country) ? 'Desconhecida' : ''}
				{getLocalizedValue(node.city)}
				{getLocalizedValue(node.city) && '/'}
				{getLocalizedValue(node.country)}
			</span>
		</div>
	</div>

	<div class="mt-3 border-t border-gray-200 pt-3 flex flex-col gap-2">
		<div class="text-xs font-light">
			<div id="placement-1" class="bg-transparent text-gray-500">
				Visto pela primeira em {formatUnixToDatetime(node.firstSeen)} e atualizado em {formatUnixToDatetime(
					node.updatedAt
				)}
			</div>
		</div>

		<CardCopyButton value={node.publicKey}>
			<span>
				<KeyRound class="w-4 text-gray-600" />
			</span>
			<span class="flex-1 truncate">{node.publicKey}</span>
		</CardCopyButton>
	</div>
</div>
