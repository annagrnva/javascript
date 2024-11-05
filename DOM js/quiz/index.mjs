const questions = [
  {
    question: "When do children go to school?",
    answers: [
      { text: "7yo" },
      { text: "4yo" },
      { text: "10yo" }
    ],
    correct: 1,
  },
];

const quiz = document.querySelector(".quiz-container")

questions.forEach(question => {
  const questionElement = document.createElement('div');
  questionElement.innerHTML =
    `<div>${question.question}</div>`;

  question.answers.forEach(answer => {
    const answerElement = document.createElement('div');
    answerElement.innerHTML =
      `<input class="radio-btn" type="radio" value="${question.correct}" name="${question.answers}"> ${answer.text}`

    questionElement.appendChild(answerElement)
  });

  quiz.appendChild(questionElement)
});

const radioBtnSelect = document.querySelector(`.radio-btn`)

// radioBtnSelect.addEventListener('click', () => {
//   console.log('sdf')
// })

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

