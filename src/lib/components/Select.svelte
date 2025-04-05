<script lang="ts">
	import { slide } from 'svelte/transition';
	import SelectOption from './SelectOption.svelte';

	export let value, onValueChange, label;
	export let options: {
		key: string;
		order: string;
		label: string;
	}[] = [];

	let open = false;

	function clickOutside(element: HTMLElement, callbackFunction: any) {
		function onClick(event: any) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: any) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
</script>

<div
	class="relative"
	use:clickOutside={() => {
		open = false;
	}}
>
	<button
		class="flex w-full cursor-pointer flex-col rounded-xl bg-white p-3 px-5 text-left duration-300 hover:bg-gray-200 md:w-auto md:min-w-[250px]"
		onclick={() => (open = !open)}
	>
		<span class="-mb-1 text-xs font-thin opacity-45">{label}</span>
		{value.label}

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute top-1/2 right-3 -translate-y-1/2 duration-300 data-[open=true]:rotate-90"
			data-open={open}><path d="m9 18 6-6-6-6" /></svg
		>
	</button>
	{#if open}
		<div
			class="absolute inset-x-0 top-[calc(100%_+_5px)] z-10 flex flex-col overflow-hidden rounded-2xl bg-white drop-shadow-xl"
			transition:slide
		>
			{#each options as option}
				<SelectOption
					active={value.key == option.key}
					onclick={() => {
						onValueChange(option);
						open = false;
					}}
				>
					{option.label}
				</SelectOption>
			{/each}
		</div>
	{/if}
</div>
