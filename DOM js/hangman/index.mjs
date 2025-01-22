const words = ['cat', 'dog', 'pig'];

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 6;
let userAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetBtn = document.querySelector(".hangman-alphabet_btns");
// const btns = document.querySelectorAll(".btn")
let gameActive = true;

function showField() {
  words.forEach((word) => {
    word.split('')
     console.log(word)
    // wordField.innerHTML = `${word}`

  })
  // words.forEach(word => {
  //   for (let i = 0; i < word.length; i++) {
  //     const cell = document.createElement('div');
  //     console.log(cell)
  //     cell.classList.add('hangman-word_line');
  //     cell.textContent = '_';
  //     wordField.appendChild(cell);
  //   };
  // })
};

// function showAlphabet() {
//   btns.forEach(btn => {
//   btn.addEventListener('click', (btn) => {
//     let currentBtn = btn.currentTarget
//     console.log(currentBtn)
//     //  wordField.textContent += currentBtn
//   })
// })
// }
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

  const idxWord = words.indexOf(letter);
  const lines = document.querySelectorAll(".hangman-word_line");

  if (idxWord != -1) {
    userAnswers[idxWord] = letter;
    lines[idxWord].textContent = letter;
  } else {
    lifeCount();
  };

  checkGameOver();
};

function checkGameOver() {
  const gameResult = document.querySelector(".hangman-result-game");
  if (liveCounter <= 0) {
    gameResult.textContent = 'You lose the game';
    gameActive = false;
  } else if (userAnswers.length === words.length) {
    gameResult.textContent = 'You win the game';
    gameActive = false;
  };
}


function resetGame() {
  liveCounter = 6;
  userAnswers = [];
  gameActive = true;

  const lines = document.querySelectorAll(".hangman-word_line");
  lines.forEach(line => {
    line.classList.add('hangman-word_line')
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
