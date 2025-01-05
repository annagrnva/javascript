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
  let field = word.split('')
    .map(
      function (letter) {
        if (usersAnswers.includes(letter)) {
          return letter
        } else {
          return '_'
        }
      }
    )
    .join(' ')
  wordField.innerHTML = `${field}`
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

function showAlphabet() {
  alphabet.forEach(letter => {
    const button = document.createElement('div');
    button.classList.add('btn')
    button.textContent = letter;
    // let idxAlphabet = alphabet.indexOf(letter)
    let idxWord = word.indexOf(letter)

    button.addEventListener('click', () => {
      if (idxWord != -1) {
        usersAnswers[idxWord] = letter
      };
      wordField[idxWord].textContent = letter
    });

    alphabetBtn.appendChild(button)
  })
}

const init = () => {
  showAlphabet()
};
init();
showField()
