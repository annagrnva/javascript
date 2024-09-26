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
  // отрицательный счетчик инпута

  counterDoneNum.textContent = Number(counterDoneNum.textContent) - 1;
  counterTasksNum.textContent = Number(counterTasksNum.textContent) - 1;

}

function addToDo(element) {
  const inputValue = inputText.value;
  const newElement = document.createElement('div');


  newElement.innerHTML = `
<div>
<input type="checkbox" class="check-button" name="checkbox"/>
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
  counterTasksNum.textContent = Number(counterTasksNum.textContent) + 1


  //отметка  о выполнении пункта
  const checkboxButton = newElement.querySelector("input[name='checkbox']")
  checkboxButton.addEventListener('click', () => {
    if (!(newElement.classList.contains('inputTextChecked'))) {
      newElement.classList.add('inputTextChecked')
      counterDoneNum.textContent = Number(counterDoneNum.textContent) + 1
      counterTasksNum.textContent = Number(counterTasksNum.textContent) - 1
    } else {
      newElement.classList.remove('inputTextChecked')
      counterDoneNum.textContent = Number(counterDoneNum.textContent) - 1
      counterTasksNum.textContent = Number(counterTasksNum.textContent) + 1
    }

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


