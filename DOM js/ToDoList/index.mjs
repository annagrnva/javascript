const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counter = document.querySelector("#counter");
const counterTasks = document.querySelector("#counter-tasks");
const counterTasksNum = document.querySelector("#counter-tasks-num");
const counterDone = document.querySelector("#counter-done");
const counterDoneNum = document.querySelector("#counter-done-num");

let count = 1;

// добавление пунктов по клику
container.addEventListener("submit", (event) => {
  event.preventDefault()
  const inputValue = inputText.value;
  if (inputValue.length === 0) {
    return inputValue
  };

  const newElement = document.createElement('div');
  newElement.innerHTML = `
<div>
<input type="radio" class="radio-button" name="radio"/>
<span>${inputValue}</span>
<button class="newElement-edit-button">Edit</button>
<button class="newElement-delete-button-${count}">Delete</button>

</div>
`
  result.appendChild(newElement);

  // удаление пунктов
  const deleteButton = document.querySelector(`.newElement-delete-button-${count}`)
  deleteButton.addEventListener('click', () => {
    newElement.remove();
    count--

  })
  count++
  inputText.value = "";

  // счетчик инпута Сколько всего задач

  counterTasksNum.textContent = ++counterTasksNum.textContent;
  
  // счетчик радио-кнопки при нажатии Выполнено
  const radioInput = document.querySelector("input[name='radio']")
  radioInput.addEventListener('click', () => {
    // if(counterDoneNum) {

    // }
   // counterDoneNum.textContent = ++counterDoneNum.textContent;
  


  })

})

