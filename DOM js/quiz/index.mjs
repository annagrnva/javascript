const question = [
  {
    question: "When do children go to school?",
    answers: [
      {text: "7yo", correct: true},
      {text: "4yo", correct: true},
      {text: "10yo", correct: true},
    ]
  },
];

const questionElement = document.querySelector(".question")
const answerElement = document.querySelectorAll(".answer-btns")
let questionCounter = 0;
let answerCounter = 0;

function showQuestion() {
  questionElement.textContent = question[questionCounter].question
}
showQuestion()
