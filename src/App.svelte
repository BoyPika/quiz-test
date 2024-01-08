<script>
  import Katex from "./lib/Katex.svelte";
  let questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    // Add more questions here
  ];

  let currentQuestion = 0;
  let score = 0;

  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
    }
    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
    } else {
      // Quiz is finished, show the score or redirect to another page
      alert(`Quiz finished, you scored ${score}/${questions.length}`);
      // You can redirect to another page using window.location.href = "https://example.com";
    }
  }
</script>

<main>
  {#if currentQuestion < questions.length}
    <h1>Question {currentQuestion + 1}</h1>
    <p>{questions[currentQuestion].question}</p>
    <ul>
      {#each questions[currentQuestion].options as option}
        <button on:click={() => checkAnswer(option)} on:keydown={(event) => {if (event.key === 'Enter') checkAnswer(option)}}><Katex math={option}/></button>
      {/each}
    </ul>
  {:else}
    <h1>Quiz Finished!</h1>
    <p>Your score is {score}/{questions.length}</p>
  {/if}
</main>
