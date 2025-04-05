<script lang="ts">
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

<button
    class="rounded flex items-center gap-2 bg-gray-200 px-3 py-1 text-xs data-[active=true]:bg-green-500/30 duration-300 w-full"
    data-active={copied}
    title={value}
>
    <slot></slot>

    <div
        onclick={() => handle()}
        class="text-gray-500 hover:bg-gray-100 cursor-pointer rounded-lg p-2 inline-flex items-center justify-center"
        title="copiar"
    >
        {#if !copied}
            <span id="default-icon">
                <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><rect
                        width="8"
                        height="4"
                        x="8"
                        y="2"
                        rx="1"
                        ry="1"
                    /><path
                        d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                    /><path d="M16 4h2a2 2 0 0 1 2 2v4" /><path
                        d="M21 14H11"
                    /><path d="m15 10-4 4 4 4" /></svg
                >
            </span>
        {:else}
            <span id="success-icon">
                <svg  class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
        {/if}
    </div>
</button>
