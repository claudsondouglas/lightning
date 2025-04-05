<script lang="ts">
	export let node;
</script>

<div class="bg-white border-2 border-gray-200 p-5">
	{node?.publicKey}<br />
	<h2>{node?.alias}</h2>
	channels: {node?.channels}<br/>
	{JSON.stringify(node?.country)}O país onde esse node está localizado.<br />
	capacidade: {node?.capacity} SATS<br />
	Visto pela primeira vez em {node?.firstSeen}<br />
	Atualizado em {node?.updatedAt}<br/>
</div>
