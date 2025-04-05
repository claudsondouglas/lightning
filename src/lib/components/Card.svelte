<script lang="ts">
	import formatSatoshisToBitcoins from "$lib/utils/formatSatoshisToBitcoins";
	import formatUnixToDatetime from "$lib/utils/formatUnixToDatetime";
	import getLocalizedValue from "$lib/utils/getLocalizedValue";

	export let node, index;
</script>

<div class="bg-white p-5">
    <div class="flex items-center gap-3">
        <span
        class="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center"
        >{index}</span
        >
        <h2 class="text-lg md:text-xl font-bold" data-field="alias">
            {node.alias}
        </h2>
    </div>
	channels: {node?.channels}<br/>
	{ getLocalizedValue(node?.city) } / {getLocalizedValue(node?.country)}<br />
	capacidade: {formatSatoshisToBitcoins(node?.capacity)} BTC<br />
	Visto pela primeira vez em {formatUnixToDatetime(node?.firstSeen)}<br />
	Atualizado em {node?.updatedAt}<br/>
    {node?.publicKey}<br />
</div>
