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


const quiz = document.querySelector(".quiz-container");
const nextBtn = document.querySelector('.next-btn');
const questionElement = document.createElement('div');
const answerElement = document.createElement('div');
const radioChecked = document.querySelector('input[type="radio"]:checked');

let questionIndex = 0;
let answerNumber = 0;
let correctAnswers = 0;
let falseAnswers = 0;

function showQuestion() {
  const questionData = questions[questionIndex];
  const questionElement = document.createElement('div');
  questionElement.innerHTML =
    `<div>${questionData.question}</div>`;

  questionData.answers.forEach((answer, index) => {
    const answerElement = document.createElement('div');
    answerElement.innerHTML =
      `<input class="radio-btn" type="radio" value="${questionData.answers[index++]}
      "name="${questionData.answers}"> ${answer}`

    questionElement.appendChild(answerElement);
  });
  quiz.appendChild(questionElement);

};

const inputError = document.createElement('div');
document.body.append(inputError);

function showError() {
  const radioChecked = document.querySelector('input[type="radio"]:checked');
  console.log(radioChecked)

  if (!radioChecked) {
    inputError.innerHTML = `
<div class="input-error">
<span class="input-error_text">choose the variant</span>
</div>
` } else {
    return inputError.innerText = "";
  };
};

function showResults() {
  const result = document.createElement('div');
  result.innerHTML =
    `
  <div class="result-answers">
  <div class="correct-answers">correct answers:${correctAnswers}</div>
  <div class="false-answers">false answers:${falseAnswers}</div>
  </div>
  `
  document.body.appendChild(result);
};

nextBtn.addEventListener('click', () => {
  showError()
  if (questionIndex === questions.length - 1) {
    questionIndex = 0;
  } else {
    questionIndex += 1;
    showQuestion(questionIndex)
  };
});
showResults()

const init = () => {
  showQuestion(0)
}
init()



{/* <div id="app">
  <div id="book">

  </div>
  <div>
    <div>
      <button id="prevButton">Назад</button>
      <button id="nextButton">Вперед</button>
    </div>
    <button id="selectButton">Выбрать</button>


    <div>
      Ваш выбор: <b id="userChoice"></b>
    </div>
  </div>

  <script>
    const book = document.querySelector('#book');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');

    const choiseField = document.querySelector('#userChoice');
    const selectButton = document.querySelector('#selectButton');

    let currentBook = 0;

    const books = [
      {
        title: 'Война и Мир',
        description: "Много страниц, людей, активностей ...",
        pages: '999',
				id: 101,
      },
      {
        title: 'Преступление и наказание',
        description: "Страх и ненависть в Питере",
        pages: '500',
				id: 777,
      },
      {
        title: 'Нравственные письма Сеннеки Луцилию ',
        description: "Философия..",
        pages: '300',
				id: 50,
      }
    ]


    const insertBook = (bookNumber) => {
      book.innerHTML = `
<div>Заголовок: ${books[bookNumber].title}</div>
  <div>Описание: ${books[bookNumber].description}</div>
  <div>Количество страниц: ${books[bookNumber].pages}</div>
</div>
`
    }

    nextButton.addEventListener('click', () => {
      if (currentBook === books.length - 1) {
        currentBook = 0;
      } else {
        currentBook += 1;
      }

      insertBook(currentBook);
    })


    selectButton.addEventListener('click', () => {
				choiseField.innerHTML = books[currentBook].title;
    })


    const init = () => {
      insertBook(0);
    }


    init(); */}