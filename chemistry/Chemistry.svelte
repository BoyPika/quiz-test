<script lang="ts">
  import 'mathlive';
  import Katex from "../src/lib/Katex.svelte";
  let answers = [];
  let questions = [
    {
      question: "\\textnormal{A student measures the mass of a 1.00 g aluminum rod as 0.99 g.}",
      line2: "\\textnormal{The best estimate of the percent error associated with this measurement is —}",
      line3:"",
      options: ["0.01\\%", "0.1\\%", "1\\%", "10\\%"]
    },
    {
      question: "\\textnormal{The most efficient way to determine whether a reaction is an exothermic chemical reaction is to use —}",
      line2: "",
      line3:"",
      options: ["\\textnormal{an oxygen probe}", "\\textnormal{a temperature probe}", "\\textnormal{a pressure probe}", "\\textnormal{a pH probe}"]
    },
    {
      question: "", //TODO Page 6 2Al(C2H3O2)3 + 3BaSO4 -> Al2(SO4)3 + 3Ba(C2H3O2)2
      line2: "\\textnormal{Which type of chemical reaction does this equation represent?}",
      line3:"",
      options: ["\\textnormal{Synthesis}", "\\textnormal{Neutralization}", "\\textnormal{Oxidation-reduction}", "\\textnormal{Double-replacement}"]
    },
    {
      question: "\\textnormal{What is the oxidation number of an oxide ion?}",
      line2: "",
      line3:"",
      options: []
    },
  ];

  let currentQuestion = 0;

  function checkAnswer(selectedOption) {
    answers.push(selectedOption)
    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestion < questions.length + 1) {
      currentQuestion++;
    }
  }
  async function submitAnswers() {
    const a = answers[0] // bad fucking code but IDK how to make better
    const b = answers[1]
    const c = answers[2]
    const d = answers[3]
    let result = null
    const res = await fetch('https://answerchecker.fly.dev/chem', {
      method: 'POST',
      body: JSON.stringify({a, b, c, d}),
    })
    const json = await res.json()
    result = JSON.stringify(json);
  }
</script>

<main>
  <body>
  {#if currentQuestion < questions.length}
    <h2>Chemistry Practice SOL</h2>
    <h1>Question {currentQuestion + 1}</h1>
    <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
    {#if currentQuestion === 3}
      <math-field readonly id="formula">\placeholder[answer]</math-field><br>
    {/if}
    <div>
      {#each questions[currentQuestion].options as option}
        <button on:click={() => checkAnswer(option)} on:keydown={(event) => {if (event.key === 'Enter') checkAnswer(option)}}><Katex math={option}/></button>
      {/each}
    </div>
  {:else}
    <h1>Quiz Finished!</h1>
    <button on:click={() => submitAnswers()}>submit answers</button>
  {/if}
  </body>
</main>
  