<script lang="ts">
	import { CheckIcon, ClipboardCopyIcon } from '@lucide/svelte';

	export let value: string;

	let copied = false;

	function handle() {
		navigator.clipboard.writeText(value);

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div
	class="flex w-full items-center gap-2 rounded bg-gray-200 dark:bg-neutral-700 pl-3 pr-1 py-1 text-xs duration-300 data-[active=true]:bg-green-500/30"
	data-active={copied}
	title={value}
>
	<slot></slot>

	<button
		onclick={() => handle()}
		class="copy inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-500"
		title="copiar"
	>
		{#if !copied}
			<span id="default-icon">
				<ClipboardCopyIcon class="h-4 w-4" />
			</span>
		{:else}
			<span id="success-icon">
				<CheckIcon class="h-4 w-4" />
			</span>
		{/if}
	</button>
</div>
