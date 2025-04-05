<script lang="ts">
    export let active, onclick
</script>

<button
    class="font-light data-[active=true]:bg-purple-500 dark:data-[active=true]:bg-purple-800 data-[active=true]:text-white p-3 px-5 border-b-1 last:border-none border-gray-200 dark:border-neutral-700 text-left cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-700"
    data-active={active}
    onclick={onclick}
>
    <slot></slot>
</button>
