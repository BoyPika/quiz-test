<script lang="ts">
  import 'mathlive';
  import Katex from "./lib/Katex.svelte";
  import { MathfieldElement } from "mathlive";
  function submitFormulaValue() {
    const formulaElement = document.getElementById('formula') as MathfieldElement
    console.log("LaTeX:")
    console.log(formulaElement.getValue('latex'));
    if(formulaElement.getValue('latex') === questions[currentQuestion].answer) {
      score++;
    }
    nextQuestion();
  }
  let questions = [
    /*{
      question: "\\textnormal{Which expression is equivalent to } \\sqrt{20x^{16}y^{25}}?",
      line2: "",
      line3:"",
      options: ["2x^{4}y^{5}\\sqrt{5}", "5x^{4}y^{5}\\sqrt{2}", "2x^{8}y^{12}\\sqrt{5y}", "5x^{8}y^{12}\\sqrt{2y}"],
      answer: "2x^{8}y^{12}\\sqrt{5y}"
    },
    {
      question: "\\textnormal{Which expression is equivalent to } \\sqrt[3]{6w^7} \\cdot \\sqrt[3]{4w^5}?",
      line2: "",
      line3:"",
      options: ["2w^4\\sqrt[3]{3}", "2w^4\\sqrt[3]{6}", "2w^{11}\\sqrt[3]{3w^2}", "2w^{11}\\sqrt[3]{6w^2}"],
      answer: "2w^4\\sqrt[3]{3}"
    },
    {
      question: "\\textnormal{The steps used to solve an equation are shown. }",
      line2: "",
      line3:"",
      options: ["\\textnormal{Identity property of multiplication}", "\\textnormal{Inverse property of multiplication}", "\\textnormal{Commutative property of multiplication}", "\\textnormal{Associative property of multiplication}"],
      answer: "\\textnormal{Identity property of multiplication}"
    },
    {
      question: "\\textnormal{Which expression is equivalent to the following expression}",
      line2: "\\textnormal{if no denominators equal zero?}",
      line3:"\\dfrac{\\dfrac{11-w}{30w^2}}{\\dfrac{w-11}{5w^6}}",
      options: ["-\\frac {w^4} {6}", "-\\frac {6} {w^3}", "\\frac {w^3} {6}", "\\frac {6} {w^4}"],
      answer: "-\\frac {w^4} {6}"
    },
    {
      question: "\\textnormal{What is the complete factorization of }(18x^4+12x^3-6x)?",
      line2: "",
      line3:"",
      options: ["6x^3(3x+2)", "6x(3x^3+2x^2)", "6x(3x-1)(x+1)", "6x(3x^3+2x^2-1)"],
      answer: "6x(3x^3+2x^2-1)"
    },
    {
      question: "\\textnormal{Which of these is equivalent to }i^{75}?",
      line2: "",
      line3:"",
      options: ["i", "-i", "1", "-1"],
      answer: "-i"
    },
    {
      question: "\\textnormal{For which value of }b \\textnormal{ is }x^2+bx-60 \\textnormal{ factorable over the set of integers?}",
      line2: "",
      line3:"",
      options: ["61", "23", "-7", "-16"],
      answer: "-7"
    },
    {
      question: "\\textnormal{If no denominator equals zero, which expression is equivalent to}",
      line2: "\\dfrac{25-4x^2}{6x^2+9x-15} \\cdot \\dfrac{6x^2-2x-4}{2x^2-x-10}?",
      line3:"",
      options: ["-2", "2", "\\dfrac{-2(3x+2)}{3(x+2)}", "\\dfrac{2(3x+2)}{3(x+2)}"],
      answer: "\\dfrac{-2(3x+2)}{3(x+2)}"
    },
    {
      question: "\\textnormal{Assuming the denominators do NOT equal zero,}",
      line2: "\\textnormal{which expression is equivalent to}\\dfrac{12}{x+1} + \\dfrac{1}{x-4}?",
      line3:"",
      options: ["\\dfrac{13x-47}{(x+1)(x-4)}", "\\dfrac{13}{(x+1)(x-4)}", "\\dfrac{13x-47}{2x-3}", "\\dfrac{13}{2x-3}"],
      answer: "\\dfrac{13x-47}{(x+1)(x-4)}"
    },
    {
      question: "\\textnormal{Which expression is equivalent to} \\sqrt{36x^9y^{25}},",
      line2: "\\textnormal{where } x>0 \\textnormal{ and } y>0?",
      line3:"",
      options: ["6x^3y^5", "6x^{\\frac{9}{2}}y^{\\frac{25}{2}}", "18x^3y^5", "18x^{\\frac{9}{2}}y^{\\frac{25}{2}}"],
      answer: "6x^{\\frac{9}{2}}y^{\\frac{25}{2}}"
    },
    {
      question: "\\textnormal{What nonzero value of }x\\textnormal{ is a solution to the following equation?}",
      line2: "\\dfrac{x+2}{x}+\\dfrac{x-6}{3x}=\\dfrac{2x+9}{5x}",
      line3:"",
      options: ["x=\\frac{27}{14}", "x=\\frac{17}{14}", "x=\\frac{13}{14}", "x=\\frac{5}{14}"],
      answer: "x=\\frac{27}{14}"
    },
    {
      question: "\\textnormal{How many values of }x\\textnormal{ will satisfy the equation?}",
      line2: "-2|{3x-5}|=0",
      line3:"",
      options: ["0", "1", "2", "3"],
      answer: "1"
    },
    {
      question: "\\textnormal{Which graph best represents the solutions for }y<|x+4|-1?",
      line2: "",
      line3:"",
      options: ["\\includegraphics[height=7em, width=7em]{/graphs/question13/graph-0.svg}", "\\includegraphics[height=7em, width=7em]{/graphs/question13/graph-1.svg}", "\\includegraphics[height=7em, width=7em]{/graphs/question13/graph-2.svg}", "\\includegraphics[height=7em, width=7em]{/graphs/question13/graph-3.svg}"],
      answer: "\\includegraphics[height=7em, width=7em]{/graphs/question13/graph-1.svg}"
    },
    {
      question: "\\textnormal{What is a solution of }\\sqrt{7-2x}+5=8?",
      line2: "",
      line3:"",
      options: ["x=-26", "x=\\frac{-19}{2}", "x={-13}{2}", "x=-1"],
      answer: "x=-1"
    },
    {
      question: "\\textnormal{Which is the apparent solution set of the system of equations graphed on the following grid?}",
      line2: "\\includegraphics[height=10em, width=10em]{/graphs/question15/graph-0.svg}",
      line3:"",
      options: ["\\set{(0,-5),(0,5)}", "\\set{(-3,4),(-2,-2)}", "\\set{(-4,3),(-1,0)}", "\\set{(-5,0),(-3\\frac{1}{3}),(-1,0)}"],
      answer: "\\set{(-4,3),(-1,0)}"
    },
    {
      question: "\\textnormal{This graph best represents the solution to which inequality}?",
      line2: "\\includegraphics[height=10em, width=10em]{/graphs/question16/graph-0.svg}",
      line3:"",
      options: ["|x-11|>4", "|x-11|<4", "|2x+7|>15", "|2x+7|<15"],
      answer: "|2x+7|<15"
    },
    {
      question: "\\textnormal{What value of }x\\textnormal{ makes} \\sqrt[3]{2x-5} = 3 \\textnormal{ true}?",
      line2: "",
      line3:"",
      options: [],
      answer: "16"
    },
    {
      question: "\\textnormal{What are the apparent roots of the equation graphed on the coordinate grid}?",
      line2: "\\includegraphics[height=10em, width=10em]{/graphs/question18/graph-0.svg}",
      line3:"",
      options: ["\\set{0, 3}", "\\set{-\\frac{1}{2}, 4}", "\\set{-\\frac{3}{2}, \\frac{1}{2}}", "\\set{-2, 1}"],
      answer: "\\set{-\\frac{3}{2}, \\frac{1}{2}}"
    },*/
    {
      question: "\\textnormal{What property justifies the work between Step 4 and Step 5?}",
      line2: "",
      line3:"",
      options: ["Identity property of multiplication", "Inverse property of multiplication", "Commutative property of multiplication", "Associative property of multiplication"],
      answer: "Identity property of multiplication"
    }
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
  <body>
    {#if currentQuestion < questions.length}
      <h2>Algebra 2 Practice SOL</h2>
      <h1>Question {currentQuestion + 1}</h1>
      {#if  currentQuestion === 2}
      <p><Katex math={questions[currentQuestion].question} /><br><Katex math={"\\textnormal{Step 1:   }\\frac 2 3 r = 14i"}/><br>
        <Katex math={"\\textnormal{Step 2:   }(\\frac 3 2) \\frac 2 3 r = 14 i (\\frac 3 2)"}/><br>
        <Katex math={"\\textnormal{Step 3:   }(\\frac 3 2 \\cdot \\frac 2 3)r=14i(\\frac 3 2)"}/><br>
        <Katex math={"\\textnormal{Step 4:   }1r=21i"}/><br>
        <Katex math={"\\textnormal{Step 5:   }r=21i"}/><br>
        <Katex math={"\\textnormal{What property justifies the work between Step 4 and Step 5?}"}/><br>
      </p>
      {:else}
    <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
    {/if}
    <div>
      {#if currentQuestion === 16}
        <math-field id="formula" /><br>
        <button type="submit" on:click={submitFormulaValue}>Submit</button>
      {:else}
        {#each questions[currentQuestion].options as option}
          <button on:click={() => checkAnswer(option)} on:keydown={(event) => {if (event.key === 'Enter') checkAnswer(option)}}><Katex math={option}/></button>
        {/each}
      {/if}
    </div>
  {:else}
    <h1>Quiz Finished!</h1>

    <p>Your score is {score}/{questions.length}</p>
  {/if}
  </body>
</main>
