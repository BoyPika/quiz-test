<script lang="ts">
    import Katex from "./Katex.svelte";

    export let question: any;

    let checkAnswerh = (event: Event) => {
        event.preventDefault(); // Prevents the form from submitting normally
        let selectedAnswer = (document.querySelector('input[name="answerchoices"]:checked') as HTMLInputElement).value;
        // Now you can use the selectedAnswer for further processing
        console.log(selectedAnswer);
    }
</script>

<form on:submit|preventDefault={checkAnswerh}>
    {#each question.answer as answer, index (index)}
        <input type="radio" id="answer{index}" name="answerchoices" value={index}>
        <label for="answer{index}"><Katex math={answer}/></label><br>
    {/each}
    <input type="submit" value="Submit">
</form>