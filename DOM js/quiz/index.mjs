const questions = [
  {
    question: "When do children go to school?",
    answers: [
      { text: "7yo" }, 
      { text: "4yo" }, 
      { text: "10yo" }
    ],
    // correct: 1,
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
    `<input type="radio" name="${question.answers}"> ${answer.text}`

    questionElement.appendChild(answerElement)
//  console.log(answer)

  });

  quiz.appendChild(questionElement)
});

const button = document.createElement('button')
button.classList.add('button')
button.textContent = 'next'
button.addEventListener('click', () => {
  console.log('sadf')
})
document.body.append("button")


// const questionElement = document.querySelector(".question")
// const answerElement = document.querySelectorAll(".answer-btns")
// let questionCounter = 0;
// let answerCounter = 0;

// function showQuestion() {
//   questionElement.textContent = question[questionCounter].question
// }
// showQuestion()

// for(answer of question[questionCounter]['answers']) {
// console.log(answer)
// }


// questionElement.forEach((answer) => {
//   question[questionCounter]['answers']

//   console.log(answer)
// });
