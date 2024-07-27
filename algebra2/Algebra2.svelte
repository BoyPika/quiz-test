<script lang="ts">
    import 'mathlive';
    import Katex from "../src/lib/Katex.svelte";
    import { MathfieldElement } from "mathlive";
    let answers = [];
    let questions = [
      {
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
        options: ["x=-26", "x=\\frac{-19}{2}", "x=\\frac{-13}{2}", "x=-1"],
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
      },
      {
        question: "\\textnormal{If no denominator is equal to zero, what is the solution set for the following equation}?",
        line2: "\\dfrac{3x-4}{x^2}=\\dfrac{3}{2x}",
        line3:"",
        options: ["\\set{\\frac{8}{3}}", "\\set{\\frac{8}{9}}", "\\set{-\\frac{2}{3}, 2}", "\\set{-\\frac{2}{3}, \\frac{2}{3}}"],
        answer: "\\set{\\frac{8}{3}}"
      },
      {
        question: "\\textnormal{What is the solution set for the following system of equations}?",
        line2: "\\begin{cases} y=4x+2\\\\ y=x^2+x-8\\end{cases}",
        line3:" ",
        options: ["\\set{(-5,-18),(2,10)}", "\\set{(-1,-2),(6,26)}", "\\set{(-6,-22),(1,6)}", "\\set{(-2,-6),(5,22)}"],
        answer: "\\set{(-2,-6),(5,22)}"
      },
      {
        question: "\\textnormal{Identify all the points where the graph of } h(x) =(x+1)(x^2+8x+16)",
        line2: "\\textnormal{intersects the x-axis.}",
        line3:"",
        options: [],
        answer: 'A',
        answer2: 'E',
        wanswer: 'B',
        wanswer2: 'C',
        wanswer3: 'D',
        wanswer4: 'F'
      },
      {
        question: "\\textnormal{The function } f(x)=(1-x)^2-4 \\textnormal{ is decreasing throughout the interval—}",
        line2: "",
        line3: "",
        options: ["-4<x<\\infin", "-\\infin<x<1", "-1<x<3", "-\\infin<x<\\infin"],
        answer: "-\\infin<x<1"
      },
      {
        question: "\\textnormal{Given: }f(x)=4x^4-15\\textnormal{and}g(x)=2x+11",
        line2: "\\textnormal{What is the value of }g(f(x))?",
        line3: "",
        options: ["8x^5+44x^4-30x-165", "8x^5-165", "8x^4-4", "8x^4-19"],
        answer: "8x^4-19"
      },
      {
        question: "\\textnormal{A normally distributed data set has a mean of } 0 \\textnormal{ and a standard deviation of }0.5\\textnormal{.}",
        line2: "\\textnormal{Which is closest to the percent of values between } -1 \\textnormal{ and }1 ?",
        line3: "",
        options: ["34\\%", "50\\%", "68\\%", "95\\%"],
        answer: "95\\%"
      },
      {
        question: "\\textnormal{Point A lies on the graph of } f(x)=\\frac{1}{2}+2",
        line2: "\\textnormal{ Locate the image of Point A that lies on the graph of }f^{-1}(x)",
        line3:"\\includegraphics[height=10em, width=10em]{/graphs/question25/graph-0.svg}",
        options: ["(2,1)", "(-2,-1)", "(1,-2)", "(1,2)"],
        answer: "(1,-2)"
      },
      {
        question: "\\textnormal{Which equation best represents this graph? }",
        line2: "\\includegraphics[height=10em, width=10em]{/graphs/question26/graph-0.svg}",
        line3:"",
        options: ["f(x)=3(\\frac{1}{5})^x", "f(x)=3\\sqrt{5x}", "f(x)=\\frac{1}{3}\\log{(5x)}", "f(x)=\\frac{1}{3}(5)^x"],
        answer: "f(x)=3(\\frac{1}{5})^x"
      },
      {
        question: "\\textnormal{If }f(x)=x^2+3x\\textnormal{ and }g(x)=2x^2\\textnormal{, what is }g(f(-1))?",
        line2: "",
        line3:"",
        options: ["-4", "0", "8", "10"],
        answer: "8"
      },
      {
        question: "\\textnormal{The volume of a cone }(V)\\textnormal{ varies jointly with its height }(h)\\textnormal{ and the square of its radius }(r).",
        line2: "\\textnormal{If }k\\textnormal{ is the constant of proportionality, which of the following equations represents}",
        line3:"\\textnormal{the correct relationship between volume, radius, and height}?",
        options: ["V=k(rh)^2", "V=\\frac{kr^2}{h}", "V=\\frac{k}{r^2h}", "V=kr^2h"],
        answer: "V=kr^2h"
      },
      {
        question: "\\textnormal{What is the equation of the horizontal asymptote of the graph of the following equation}?",
        line2: "f(x)=4^{(x+1)}-10",
        line3:"",
        options: ["y=4", "y=0", "y=-1", "y=-10"],
        answer: "y=-10"
      },
      {
        question: "\\textnormal{As }x\\textnormal{ approaches negative infinity, which of the following describes the end behavior of }",
        line2: "f(x)=-x^7+bx^3+c?",
        line3:"",
        options: ["f(x)\\textnormal{ approaches }c", "f(x)\\textnormal{ approaches }0", "f(x)\\textnormal{ approaches }\\infin", "f(x)\\textnormal{ approaches }-\\infin"],
        answer: "f(x)\\textnormal{ approaches }\\infin"
      },
      {
        question: "\\textnormal{Jessica paid \\$23,000 for her car and kept a record of its value. }", //TODO Fix CSS
        line2: "",
        line3:"\\textnormal{Assuming the relationship is exponential, which equation best models the curve of best fit for the data}?",
        options: ["y=21,000(1.20)^x", "y=22,300(2.60)^x", "y=23,100(0.85)^x", "y=23,500(0.70)^x"],
        answer: "y=23,100(0.85)^x"
      },
      {
        question: "\\textnormal{ What is the sum of the infinite geometric series } 9,-6,4,-\\frac{8}{3},...?",
        line2: "",
        line3:"",
        options: ["\\frac{29}{3}", "\\frac{25}{3}", "\\frac{27}{5}", "\\frac{18}{5}"],
        answer: "\\frac{27}{5}"
      },
      {
        question: "\\textnormal{ Which number is a zero of } f(x)=7x^2+16x-48?",
        line2: "",
        line3:"",
        options: ["12", "4", "\\frac{12}{7}", "\\frac{4}{7}"],
        answer: "\\frac{12}{7}"
      },
      {
        question: "\\textnormal{ Which function is the inverse of } g(x)=x^3+11?",
        line2: "",
        line3:"",
        options: ["g^{-1}(x)=\\sqrt[3]{x-11}", "g^{-1}(x)=\\sqrt[3]{x+11}", "g^{-1}(x)=x-\\sqrt[3]{11}", "g^{-1}(x)=x+\\sqrt[3]{11}"],
        answer: "g^{-1}(x)=\\sqrt[3]{x-11}"
      },
      {
        question: "\\textnormal{ What is the domain of } g(x)=\\log{(x-1)}?",
        line2: "",
        line3:"",
        options: ["\\set{x|x>10}", "\\set{x|x>9}", "\\set{x|x>1}", "\\set{x|x>0}"],
        answer: "\\set{x|x>1}"
      },
      {
        question: "\\textnormal{ A scientist obtained a sample that contained 80 grams of radioactive Barium-122 that decays exponentially over time.}",
        line2: "\\textnormal{The amount of Barium-122 that remained in the sample at observed times is shown in the table.}",
        line3:"\\textnormal{If the radioactive decay continues at the same rate, }",//TODO Fix CSS
        line4:"\\textnormal{which is closest to the amount of the sample of Barium-122 remaining at 5 minutes?}",
        options: ["8.3\\textnormal{ grams}", "10.0\\textnormal{ grams}", "11.7\\textnormal{ grams}", "14.1\\textnormal{ grams}"],
        answer: "14.1\\textnormal{ grams}"
      },
      {
        question: "\\textnormal{ What is the sum of the first 20 terms of the arithmetic sequence shown?}",
        line2: "\\frac{1}{3}, \\frac{2}{3}, 1, \\frac{4}{3}, \\frac{5}{3}, ...",
        line3:"",
        options: ["5", "20", "70", "140"],
        answer: "70"
      },
      {
        question: "\\textnormal{ What is the number of possible permutations of 8 objects taken 3 at a time?}",
        line2: "",
        line3:"",
        options: [],
        answer: "336"
      },
    ];
  
    let currentQuestion = 0;
    let score = 0;
  
    function submitAnswer() {
      if (currentQuestion === 16 || currentQuestion === 37) {
        const formulaElement = document.getElementById('formula') as MathfieldElement;
        answers.push(formulaElement.getValue('ascii-math'));
        if(formulaElement.getValue('latex') === questions[currentQuestion].answer) {
          score++;
        }
      } else {
        const formElement = document.querySelector('#MultiChoice');
        if(formElement) {
          const checkboxes = formElement.querySelectorAll('input[type="checkbox"]');
          let checkedValues = Array.from(checkboxes).filter((checkbox: HTMLInputElement) => checkbox.checked).map((checkbox: HTMLInputElement) => checkbox.name);
          answers.push(checkedValues)
          if (checkedValues.includes(questions[currentQuestion].answer) && checkedValues.includes(questions[currentQuestion].answer2) && !checkedValues.includes(questions[currentQuestion].wanswer) && !checkedValues.includes(questions[currentQuestion].wanswer2) && !checkedValues.includes(questions[currentQuestion].wanswer3) && !checkedValues.includes(questions[currentQuestion].wanswer4)){
            score++;
          }
        }
      }
      nextQuestion();
    }
  
    function checkAnswer(selectedOption) {
      console.log(selectedOption);
      if (selectedOption === questions[currentQuestion].answer) {
        score++;
      }
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
      const e = answers[4]
      const f = answers[5]
      const g = answers[6]
      const h = answers[7]
      const i = answers[8]
      const j = answers[9]
      const k = answers[10]
      const l = answers[11]
      const m = answers[12]
      const n = answers[13]
      const o = answers[14]
      const p = answers[15]
      const q = answers[16]
      const r = answers[17]
      const s = answers[18]
      const t = answers[19]
      const u = answers[20].toString()
      const v = answers[21]
      const w = answers[22]
      const x = answers[23]
      const y = answers[24]
      const z = answers[25]
      const aa = answers[26]
      const ab = answers[27]
      const ac = answers[28]
      const ad = answers[29]
      const ae = answers[30]
      const af = answers[31]
      const ag = answers[32]
      const ah = answers[33]
      const ai = answers[34]
      const aj = answers[35]
      const ak = answers[36]
      const al = answers[37]
      let result = null
      const res = await fetch('http://71.127.135.195:8081/alg2', {
        method: 'POST',
        body: JSON.stringify({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al}),
      })
      const json = await res.json()
      result = JSON.stringify(json);
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
        {:else if currentQuestion === 20}
          <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
          <form id="MultiChoice" on:submit|preventDefault={submitAnswer}>
            <input type="checkbox" name="A" id="A">
            <label for="A"><Katex math="(-4, 0)"/></label>
            <input type="checkbox" name="B" id="B">
            <label for="B"><Katex math="(1, 0)"/></label> <br>
            <input type="checkbox" name="C" id="C">
            <label for="C"><Katex math="(-2, 0)"/></label>
            <input type="checkbox" name="D" id="D">
            <label for="D"><Katex math="(4, 0)"/></label> <br>
            <input type="checkbox" name="E" id="E">
            <label for="E"><Katex math="(-1, 0)"/></label>
            <input type="checkbox" name="F" id="F">
            <label for="F"><Katex math="(16, 0)"/></label> <br>
            <button type="submit">Submit</button>
          </form>
        {:else if currentQuestion === 30}
          <p><Katex math={questions[currentQuestion].question} /></p>
          <table>
            <tr>
              <th>Number of Years <Katex math="(x)" /></th>
              <th>Value (in dollars)<Katex math="(y)" /></th>
            </tr>
            <tr>
              <td>0</td>
              <td>23,000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>16,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>14,000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>12,000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>10,000</td>
            </tr>
          </table>
          <p><Katex math={questions[currentQuestion].line3}/></p>
  
          {:else if currentQuestion === 35}
          <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/></p>
          <table>
            <tr>
              <th>Time (minutes)</th>
              <th>Mass of Remaining Barium-122 (grams)</th>
            </tr>
            <tr>
              <td>0</td>
              <td>80.0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>56.6</td>
            </tr>
            <tr>
              <td>2</td>
              <td>40.0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>28.3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>20.0</td>
            </tr>
          </table>
          <p><Katex math={questions[currentQuestion].line3}/><br><Katex math={questions[currentQuestion].line4}/></p>
        {:else}
      <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
      {/if}
      <div>
        {#if currentQuestion === 16 || currentQuestion === 37}
          {#if currentQuestion === 16}
          <math-field readonly id="formula">x=\placeholder[answer]</math-field><br>
          {:else if currentQuestion === 37}
          <math-field readonly id="formula">\placeholder[answer]</math-field><br>
          {/if}
          <button type="submit" on:click={submitAnswer}>Submit</button>
        {:else}
          {#each questions[currentQuestion].options as option}
            <button on:click={() => checkAnswer(option)} on:keydown={(event) => {if (event.key === 'Enter') checkAnswer(option)}}><Katex math={option}/></button>
          {/each}
        {/if}
      </div>
    {:else}
      <h1>Quiz Finished!</h1>
      <button on:click={() => submitAnswers()}>submit answers</button>
      <p>Your score is {score}/{questions.length}</p>
    {/if}
    </body>
  </main>
  