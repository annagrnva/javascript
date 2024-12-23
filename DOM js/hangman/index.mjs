const word = 'london';

const alphabet = 'a b c'
// 'd', 'e', 'f', 'g', 'h',
//   'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
//   'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
;


let liveCounter = 0;
let usersAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetField = document.querySelector(".hangman-alphabet_btns")

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


alphabetField.innerHTML = alphabet
console.log(alphabetField)

alphabetField.addEventListener("click", () => {
  
})
showField()