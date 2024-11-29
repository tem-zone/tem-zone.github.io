<script>
	let { children } = $props();
</script>

<style>
    :global(:root) {
        --primary: #ca93f7;
        --secondary: #000000;
        --background-color: rgb(211, 157, 255);
        /* background-color: var(--primary); */
        background-color: #000000;
        text-align: center;
        font-family: monospace;
    }

    :global(h1) {
        /* font-weight: 500; */
        letter-spacing: -1;
        font-size: 70px;
        margin-block: 0;
    }
    :global(body) {
        margin: 0;
    }
</style>

{@render children()}