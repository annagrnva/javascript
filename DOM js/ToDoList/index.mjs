const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counterTasksNum = document.querySelector("#counter-tasks-num");
// const counterDone = document.querySelector("#counter-done");
const counterDoneNum = document.querySelector("#counter-done-num");


let count = 1;
let counterTasks = 0;
let counterDone = 0;


function deleteToDo(element) {
  element.remove();
  count--;
  // отрицательный счетчик инпута Сколько всего задач
  counterTasksNum.textContent = --counterTasks;

}

function addToDo(element) {
  const inputValue = inputText.value;
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
  deleteButton.addEventListener('click', () => deleteToDo(newElement))
  count++
  inputText.value = "";

  // положительный счетчик инпута Сколько всего задач
  counterTasksNum.textContent = ++counterTasks;

  //отметка  о выполнении пункта
  const radioButton = newElement.querySelector("input[name='radio']")
  radioButton.addEventListener('click', () => {
    if (!(newElement.classList.contains('inputTextChecked'))) {
      newElement.classList.add('inputTextChecked')
    } else {
      newElement.classList.remove('inputTextChecked')
    }
    // положительный и отрицательный счетчики Выполнено
    if (counterDoneNum.textContent = ++counterDone) {
      counterTasksNum.textContent = --counterTasks
    } else { }
  })
}

// добавление пунктов по клику
container.addEventListener("submit", (event) => {
  event.preventDefault()
  const inputValue = inputText.value;
  if (inputValue.length === 0) {
    return inputValue
  };

  addToDo();


})


