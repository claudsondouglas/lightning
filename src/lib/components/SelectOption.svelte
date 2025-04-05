<script lang="ts">
    export let active, onclick
</script>

<button
    class="font-light data-[active=true]:bg-purple-500 data-[active=true]:text-white p-3 px-5 border-b-1 last:border-none border-gray-200 text-left cursor-pointer hover:bg-purple-100"
    data-active={active}
    onclick={onclick}
>
    <slot></slot>
</button>
