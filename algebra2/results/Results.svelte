<script lang="ts">
    function getURLParams() {
        return new URLSearchParams(window.location.search);
    }
    const score = getURLParams().get('score');
    const pdfname = getURLParams().get('pdfname');
    console.log(score)
    console.log(pdfname)
</script>

<main>
    <h1>Results</h1>
    <p>You got {score} out of 38</p>
    <button on:click={() => window.location.href = '/'}>Go back</button>
    <a href="http://quizpdfdatabase.kesug.com/{pdfname}" target="_blank"><button>Download PDF</button></a>
</main>
  