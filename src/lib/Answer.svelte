<script>
    export let answer1Text;
    export let answer2Text;
    export let answer3Text;
    export let answer4Text;
    export let checkAnswerh;
    import Katex from "./Katex.svelte";
</script>



<form on:submit={checkAnswerh}>
    <input type="radio" id="answerbuttons" name="answerchoices">
    <label for="answerbuttons"><Katex math={answer1Text}/></label>
    <input type="radio" id="answerbuttons2" name="answerchoices">
    <label for="answerbuttons2"><Katex math={answer2Text}/></label><br>
    <input type="radio" id="answerbuttons3" name="answerchoices">
    <label for="answerbuttons3"><Katex math={answer3Text}/></label>
    <input type="radio" id="answerbuttons4" name="answerchoices">
    <label for="answerbuttons4"><Katex math={answer4Text}/></label><br>
    <input type="submit" value="Submit">
</form>