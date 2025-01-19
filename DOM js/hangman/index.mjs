const word = 'cat';

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 6;
let userAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetBtn = document.querySelector(".hangman-alphabet_btns")
// const btns = document.querySelectorAll(".btn")
let gameActive = true;

function showField() {

  for (let i = 0; i < word.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('hangman-word_line');
    cell.textContent = '_';
    wordField.appendChild(cell)
  };
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
  counter.classList.add(".hangman-live_counter")
  counter.textContent = `You have ${liveCounter} lives left`;
  if (liveCounter > 0) {
    liveCounter = liveCounter - 1
  }
  checkGameOver()
   
};

function showAlphabet() {

  alphabet.forEach(letter => {
    const button = document.createElement('div');
    button.classList.add('btn')
    button.textContent = letter;

    let idxWord = word.indexOf(letter)

    button.addEventListener('click', () => {  
       if (!gameActive) return;
      const lines = document.querySelectorAll(".hangman-word_line")
      if (idxWord != -1) {
        userAnswers[idxWord] = letter
      } else {
        lifeCount();
      };

      lines[idxWord].textContent = letter;
      checkGameOver()

    });

    alphabetBtn.appendChild(button)

  })
};

function checkGameOver() {
  const gameResult = document.querySelector(".hangman-result-game")
  if (liveCounter <= 0) {
   gameResult.textContent = 'You lose the game'
   gameActive = false
  } else if (userAnswers.length === word.length) {
    gameResult.textContent = 'You win the game'
    gameActive = false
  };
}

const playAgainBtn = document.querySelector(".hangman-btn")
playAgainBtn.addEventListener('click', (checkGameOver))
 console.log(playAgainBtn) 




const init = () => {

  showAlphabet()
};
init();
showField()

