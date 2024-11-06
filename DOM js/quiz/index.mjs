const questions = [
  {
    question: "When do children go to school?",
    answers: ["7yo", "4yo", "10yo"],
    correct: 1,
  },

  {
    question: "When is NY in Russia?",
    answers: ["30 Dec", "31 Dec", "1 Jen"],
    correct: 2,
  },
];

questionIndex = 0;
const quiz = document.querySelector(".quiz-container")

function showQuestion() {

  const questionData = questions[questionIndex];
  const questionElement = document.createElement('div');
  questionElement.innerHTML =
    `<div>${questionData.question}</div>`;

  questionData.answers.forEach(answer => {
    const answerElement = document.createElement('div');
    answerElement.innerHTML =
      `<input class="radio-btn" type="radio" value="${questionData.correct}" name="${questionData.answers}"> ${answer}`

    questionElement.appendChild(answerElement)
  });

  //     function clearQuestion() {
  // questionElement.innerHTML = '';
  //     }

  quiz.appendChild(questionElement)
}

const button = document.createElement('div')
button.innerHTML = `
<div class="container-btn">
<button class="button">next</button>
</div>
`
document.body.append(button)

button.addEventListener('click', () => {

  const radioChecked = document.querySelector('input[type="radio"]:checked')
  console.log(radioChecked)

  if (!radioChecked) {
    return
  }
})

showQuestion()