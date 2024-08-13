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
    },//1
    {
      question: "\\textnormal{The most efficient way to determine whether a reaction is an exothermic chemical reaction is to use —}",
      line2: "",
      line3:"",
      options: ["\\textnormal{an oxygen probe}", "\\textnormal{a temperature probe}", "\\textnormal{a pressure probe}", "\\textnormal{a pH probe}"]
    },//2
    {
      question: "2\\textnormal{Al}(\\textnormal{C}_2\\textnormal{H}_3\\textnormal{O}_2)_3 + 3\\textnormal{BaSO}_4 \\rightarrow \\textnormal{Al}_2(\\textnormal{SO}_4)_3 + 3\\textnormal{Ba}(\\textnormal{C}_2\\textnormal{H}_3\\textnormal{O}_2)_2",
      line2: "\\textnormal{Which type of chemical reaction does this equation represent?}",
      line3:"",
      options: ["\\textnormal{Synthesis}", "\\textnormal{Neutralization}", "\\textnormal{Oxidation-reduction}", "\\textnormal{Double-replacement}"]
    },//3
    {
      question: "\\textnormal{What is the oxidation number of an oxide ion?}",
      line2: "",
      line3:"",
      options: []
    },//4
    {
      question: "\\textnormal{What is the molarity of a solution with 0.2 moles of potassium permanganate}",
      line2: "(\\textnormal{K}\\textnormal{Mn}\\textnormal{O}_4)\\textnormal{ dissolved in enough water to make a 500.0 mL solution?}",
      line3:"",
      options: ["\\textnormal{0.0004 M}", "\\textnormal{0.1 M}", "\\textnormal{0.4 M}", "\\textnormal{100 M}"]
    },//5
    {
      question: "\\textnormal{When 92.0 g of ethanol }(\\textnormal{C}_2\\textnormal{H}_5\\textnormal{OH})\\textnormal{are vaporized at its boiling point of 78.3}\\degree\\textnormal{C, it requires}",
      line2: "\\textnormal{78.6 kJ of energy. What is the approximate molar heat of vaporization of ethanol in kJ/mol?}",
      line3:"",
      options: ["0.854", "1.17", "39.3", "78.3"]
    },//6
    {
      question: "\\textnormal{What is the density of an aqueous solution that has a mass of 10.081 g and 12.5 mL?}",
      line2: "",
      line3:"",
      options: []
    },//7
    {
      question: "\\textnormal{Which element has 16 neutrons, 15 protons, and 15 electrons?}",
      line2: "",
      line3:"",
      options: ["\\textnormal{Sulfur (S)}", "\\textnormal{Phosphorus (P)}", "\\textnormal{Gallium (Ga)}", "\\textnormal{Zinc (Zn)}"]
    },//8
    {
      question: "\\textnormal{Al}(s) + 3\\textnormal{AgNO}_3(aq) \\rightarrow \\textnormal{Al}(\\textnormal{NO}_3)_3(aq) + 3\\textnormal{Ag}(s)",
      line2: "\\textnormal{This equation represents which type of chemical reaction?}",
      line3:"",
      options: ["\\textnormal{Single-replacement}", "\\textnormal{Double-replacement}", "\\textnormal{Decomposition}", "\\textnormal{Synthesis}"]
    },//9
    {
      question: "\\textnormal{In the formula for barium chloride, }(\\textnormal{BaCl}_2)\\textnormal{, }",
      line2: "\\textnormal{barium (Ba) is written first because it is a —}",
      line3:"",
      options: ["\\textnormal{a single atom}", "\\textnormal{a larger atom}", "\\textnormal{the positive ion}", "\\textnormal{the negative ion}"]
    },//10
    {
      question: "\\textnormal{Which of these laboratory techniques is best to separate a solid from a liquid }",
      line2: "\\textnormal{to recover the liquid?}",
      line3:"",
      options: ["\\textnormal{Titration}", "\\textnormal{Chromatography}", "\\textnormal{Filtering}", "\\textnormal{Vaporization}"]
    },//11
    {
      question: "\\textnormal{Which of these is NOT required to ensure that stock solutions are free of contamination?}",
      line2: "",
      line3:"",
      options: ["\\textnormal{Store all solutions in brown bottles}", "\\textnormal{Do not place dropping pipettes in stock solution bottles}", "\\textnormal{Never return excess chemicals to stock bottles}", "\\textnormal{Replace tops on reagent bottles after use}"]
    },//12
    {
      question: "\\textnormal{Which of these values is most responsible for}",
      line2: "\\textnormal{changing the boiling and freezing points of a solvent?}",
      line3:"",
      options: ["\\textnormal{Molar mass of the solvent}", "\\textnormal{Electronegativity of the solvent}", "\\textnormal{Weight of the solute particles}", "\\textnormal{Number of the solute particles}"]
    },//13
    {
      question: "\\textnormal{What is the name of the compound with the formula NH}_4\\textnormal{NO}_3\\textnormal{?}",
      line2: "",
      line3:"",
      options: ["\\textnormal{Ammonium nitrate}", "\\textnormal{Nitrogen nitrate}", "\\textnormal{Nitrogen hydrogen oxide}", "\\textnormal{Ammonium nitrogen trioxide}"]
    },//14
    {
      question: "\\textnormal{Calculate the number of moles of Li}_3\\textnormal{PO}_4\\textnormal{ in 2.2 L of a 0.60 M Li}_3\\textnormal{PO}_4\\textnormal{ solution}",
      line2: "",
      line3:"",
      options: []
    },//15
    {
      question: "\\textnormal{Which element has 16 neutrons, 15 protons, and 15 electrons?}",
      line2: "",
      line3:"",
      options: ["\\textnormal{Sulfur (S)}", "\\textnormal{Phosphorus (P)}", "\\textnormal{Gallium (Ga)}", "\\textnormal{Zinc (Zn)}"]
    },//16
  ];
  let currentQuestion = 0;

  function checkAnswer(selectedOption) {
    answers.push(selectedOption)
    console.log(selectedOption)
    nextQuestion();
  }

  function submitAnswer() {
      if (currentQuestion === 3 || currentQuestion === 6 || currentQuestion === 14) {
        const formulaElement = document.getElementById('formula') as MathfieldElement;
        answers.push(formulaElement.getValue('ascii-math'));
        console.log(formulaElement.getValue('ascii-math'))
      } else {
        const formElement = document.querySelector('#MultiChoice');
        if(formElement) {
          const checkboxes = formElement.querySelectorAll('input[type="checkbox"]');
          let checkedValues = Array.from(checkboxes).filter((checkbox: HTMLInputElement) => checkbox.checked).map((checkbox: HTMLInputElement) => checkbox.name);
          answers.push(checkedValues)
          console.log(checkedValues)
        }
      }
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
    const u = answers[20]
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
    const am = answers[38]
    const an = answers[39]
    const ao = answers[40]
    const ap = answers[41]
    const aq = answers[42]
    const ar = answers[43]
    const as = answers[44]
    const at = answers[45]
    const res = await fetch('https://answerchecker.fly.dev/chem', {
      method: 'POST',
      body: JSON.stringify({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at}),
    })
    const json = await res.json()
    const score = json["score"]
    const pdfname = json["pdf"]
    window.location.assign("/chemistry/results/?score=" + score +"&pdfname=" + pdfname)
  }
</script>

<main>
  <body>
  {#if currentQuestion < questions.length}
    <h2>Chemistry Practice SOL</h2>
    <h1>Question {currentQuestion + 1}</h1>
    <p><Katex math={questions[currentQuestion].question} /><br><Katex math={questions[currentQuestion].line2}/><br><Katex math={questions[currentQuestion].line3} /></p>
    {#if currentQuestion === 3 || currentQuestion === 6 || currentQuestion === 14}
      {#if currentQuestion === 3 || currentQuestion === 14}
        <math-field readonly id="formula">\placeholder[answer]</math-field><br>
      {:else if currentQuestion === 6}
        <math-field readonly id="formula">\placeholder [answer]\ g/mL</math-field><br>
      {/if}
      <button type="submit" on:click={submitAnswer}>Submit</button>
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
  