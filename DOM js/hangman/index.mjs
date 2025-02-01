const words = ['cat', 'duck', 'mouse'];

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 6;
let userAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetBtn = document.querySelector(".hangman-alphabet_btns");
let gameActive = true;
let currentWord = 0;
const gameResult = document.querySelector(".hangman-result-game");


function showField() {
  wordField.innerHTML = '';
  const wordArray = words.map(word => word.split(''));
  const idxWord = wordArray[currentWord];

  idxWord.forEach(letter => {
    const cell = document.createElement('div');
    cell.classList.add('hangman-word_line');
    cell.textContent = '_';
    wordField.appendChild(cell);
  })
};

function lifeCount() {
  const counter = document.querySelector(".hangman-live_counter");
  counter.classList.add(".hangman-live_counter");
  counter.textContent = `You have ${liveCounter} lives left`;
  if (liveCounter > 0) {
    liveCounter = liveCounter - 1
  }
  checkGameOver()
};

function showAlphabet() {
  alphabet.forEach(letter => {
    const button = createButton(letter);
    alphabetBtn.appendChild(button);
  });
};

function createButton(letter) {
  const button = document.createElement('div');
  button.classList.add('btn');
  button.textContent = letter;

  button.addEventListener('click', () => buttonClick(letter));

  return button;
};

function buttonClick(letter) {
  if (!gameActive) return;
  const idxWord = words[currentWord];
  const wordLetter = idxWord.indexOf(letter);
  const lines = document.querySelectorAll(".hangman-word_line");

  if (wordLetter != -1) {
    userAnswers[wordLetter] = letter;
    lines[wordLetter].textContent = letter;
  } else {
    lifeCount();
  };

  checkGameOver();
};

function nextButton() {
  if (!gameActive) return;
  gameResult.textContent = ' '
  const nextwordBtn = document.querySelector(".hangman-btn_next-word")
  nextwordBtn.addEventListener('click', () => {
    if (!gameActive) return;
    const nextWordMessage = document.querySelector(".hamgman-nextWord_message")
    currentWord++
    if (currentWord >= words.length) {
      nextWordMessage.textContent = 'You have no more words';
      currentWord = 0
    }
    showField()

  })

}
function checkGameOver() {
  if (liveCounter <= 0) {
    gameResult.textContent = 'You lose the game';
    gameActive = false;
  } else if (userAnswers.length === words.length) {
    gameResult.textContent = 'You win the game';
    gameActive = false;
  };

};

function resetGame() {
  liveCounter = 6;
  userAnswers = [];
  gameActive = true;

  const lines = document.querySelectorAll(".hangman-word_line");
  lines.forEach(line => {
    line.classList.add('hangman-word_line')
    line.textContent = '_';

  });
  lifeCount();
  const gameResult = document.querySelector(".hangman-result-game");
  gameResult.textContent = ' ';

}

const playAgainBtn = document.querySelector(".hangman-btn");
playAgainBtn.addEventListener('click', () => {
  if (!gameActive) {
    resetGame();
  }
});

showAlphabet()
showField()
nextButton()
