const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counterTasksNum = document.querySelector("#counter-tasks-num");
const counterDoneNum = document.querySelector("#counter-done-num");
const newElement = document.createElement('div');



let count = 1;
let countEdit = 1;
let countSave = 1;
let countEditBtn = 1;



function deleteToDo(element) {
  element.remove();
  count--;

  // отрицательный счетчик инпута
  if (element.classList.contains('inputTextChecked')) {
    counterDoneNum.textContent = Number(counterDoneNum.textContent) - 1
  } else {
    counterTasksNum.textContent = Number(counterTasksNum.textContent) - 1
  }
}

function addToDo(element) {
  const inputValue = inputText.value;
  const newElement = document.createElement('div');


  newElement.innerHTML = `
<div>
<input type="checkbox" class="check-button" name="checkbox"/>
<span class = "text-span">${inputValue}</span>
<input type="text" class ="input-edit-text-${countEditBtn}" name="text"/>
<button class="newElement-edit-button-${countEdit}">Edit</button>
<button class="newElement-save-button-${countSave}">Save</button>
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

  //кнопка Редактировать
  const editButton = document.querySelector(`.newElement-edit-button-${countEditBtn}`)
  const saveButton = document.querySelector(`.newElement-save-button-${countSave}`)
  const editText = document.querySelector(`.input-edit-text-${countEdit}`)
  const textSpan = document.querySelector(`.text-span`)


  editText.style.display = 'none';
  saveButton.style.display = 'none';

  editButton.addEventListener('click', () => {
    textSpan.style.display = 'none'
    editText.style.display = 'block'
    saveButton.style.display = 'block';
  })

  saveButton.addEventListener('click', (element) => {
    const elementSave = document.createElement('div');
      elementSave.innerHTML = `
  <div>
  <span class = "text-span">${inputValue}</span>
  <input type="text" class ="input-edit-text-${countEditBtn}" name="text"/>
  </div>
  `
    editButton.style.display = 'none'
    editText.appendChild(elementSave)

    console.log(elementSave)
  })

  countEdit++
  countSave++
  countEditBtn++

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