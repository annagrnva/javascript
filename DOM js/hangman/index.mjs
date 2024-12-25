const word = 'london';

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 0;
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
  console.log(field)
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

    button.addEventListener('click', () => {
      wordField.textContent += letter
    })
    alphabetBtn.appendChild(button)
  })
}

const init = () => {
  showAlphabet()
};
init();
showField()
