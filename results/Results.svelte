<script lang="ts">
    function getURLParams() {
        return new URLSearchParams(window.location.search);
    }
    const score = getURLParams().get('score');
    const maxscore = getURLParams().get('maxscore');
    const pdfname = getURLParams().get('pdfname');
    const testname = getURLParams().get('testname');
</script>

<main>
    <h1>Results</h1>
    <p>You got {score} out of {maxscore}</p>
    <a href="http://quizpdfdatabase.kesug.com/{testname}/{pdfname}" target="_blank"><button>Download PDF</button></a><br>
    <button on:click={() => window.location.href = '/'}>Go back</button>

</main>
  