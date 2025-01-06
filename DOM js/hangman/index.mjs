const word = 'cat';

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 6;
let usersAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetBtn = document.querySelector(".hangman-alphabet_btns")

// const btns = document.querySelectorAll(".btn")

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

const lines = document.querySelectorAll(".hangman-word_line")
function showAlphabet() {
  alphabet.forEach(letter => {
    const button = document.createElement('div');
    button.classList.add('btn')
    button.textContent = letter;

    let idxWord = word.indexOf(letter)

    button.addEventListener('click', () => {
      if (idxWord != -1) {
        usersAnswers[idxWord] = letter
      };

      lines[idxWord].textContent = letter
    });
    alphabetBtn.appendChild(button)
  })
};

const init = () => {
  showAlphabet()
};
init();
showField()
