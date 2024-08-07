// const nameInput = document.querySelector("#name-input");
// const surnameInput = document.querySelector("#surname-input");

// const userForm = document.querySelector("#user-form");
// const output = document.querySelector("#output");
// const googleLink = document.querySelector("#google-link");

// userForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const nameValue = nameInput.value;
//   const surnameValue = surnameInput.value;
//   const radioInput = document.querySelector("input[name='sex']:checked");
//   const radioInputValue = radioInput.value;

//   output.insertAdjacentHTML(
//     "beforeend",
//     ` 
//     <div class="user-info">
//       <div>Имя Пользователя: ${nameValue}</div>
//       <div>Фамилия Пользователя: ${surnameValue}</div>
//       <div>Пол Пользователя: ${radioInputValue}</div>
//     </div>
//     `
//   );
//   nameInput.value = "";
//   surnameInput.value = "";
// });



const nameInput = document.querySelector('#name-input');
const midnameInput = document.querySelector('#midname-input')
const surnameInput = document.querySelector('#surname-input');
// const button = document.querySelector('#button');

const userForm = document.querySelector('#user-form');
const output = document.querySelector('#output');


// console.log(button)
userForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const midnameValue = midnameInput.value;
  const surnameValue = surnameInput.value;

  // console.log(nameValue)
  // console.log(midnameValue)
  // console.log(surnameValue)


  const radioInput = document.querySelector("input[name='sex']:checked")
  const radioInputValue = radioInput.value;
  // console.log(radioInputValue)

  output.insertAdjacentHTML(
    "beforeend",
    `
    <div class="user-info">
      <div>Имя Пользователя: ${nameValue}</div>
       <div>Фамилия Пользователя: ${surnameValue}</div>
       <div>Отчество Пользователя: ${midnameValue}</div>
       <div>Пол Пользователя: ${radioInputValue}</div>
     </div>
  `
  );
  // nameInput.value = "";
  // midnameInput.value = "";
  // surnameInput.value = "";
})

