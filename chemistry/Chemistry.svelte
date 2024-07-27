<script lang="ts">
    import 'mathlive';
    import Katex from "../src/lib/Katex.svelte";

    let questions = [
      {
        question: "\\textnormal{A student measures the mass of a 1.00 g aluminum rod as 0.99 g.}",
        line2: "\\textnormal{The best estimate of the percent error associated with this measurement is —}",
        line3:"",
        options: ["0.01\\%", "0.1\\%", "1\\%", "10\\%"],
        answer: "1\\%"
      },
      {
        question: "\\textnormal{The most efficient way to determine whether a reaction is an exothermic chemical reaction is to use —}",
        line2: "",
        line3:"",
        options: ["\\textnormal{an oxygen probe}", "\\textnormal{a temperature probe}", "\\textnormal{a pressure probe}", "\\textnormal{a pH probe}"],
        answer: "\\textnormal{a temperature probe}"
      },
    ];
  
    let currentQuestion = 0;
    let score = 0;
  
    function checkAnswer(selectedOption) {
      console.log(selectedOption);
      if (selectedOption === questions[currentQuestion].answer) {
        score++;
      }
      nextQuestion();
    }
  
    function nextQuestion() {
      if (currentQuestion < questions.length + 1) {
        currentQuestion++;
      }
    }
  </script>
  
  <main>
      {#if currentQuestion < questions.length}
        <h2>Chemistry Practice SOL</h2>
        <h1>Question {currentQuestion + 1}</h1>
        <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
      <div>
        {#each questions[currentQuestion].options as option}
          <button on:click={() => checkAnswer(option)} on:keydown={(event) => {if (event.key === 'Enter') checkAnswer(option)}}><Katex math={option}/></button>
        {/each}
      </div>
    {:else}
      <h1>Quiz Finished!</h1>
  
      <p>Your score is {score}/{questions.length}</p>
    {/if}
  </main>
  