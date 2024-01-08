<script>
    export let questionText;
    import Katex from "./Katex.svelte";
</script>


<h1>
    <Katex math={questionText} />
</h1>