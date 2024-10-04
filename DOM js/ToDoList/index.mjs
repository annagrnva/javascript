const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counterTasksNum = document.querySelector("#counter-tasks-num");
const counterDoneNum = document.querySelector("#counter-done-num");
const newElement = document.createElement('div');



let count = 1;
let countEdit = 1;
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
<span class ="input-edit-text-${countEditBtn}">${inputValue}</span>
<button class="newElement-edit-button-${countEdit}">Edit</button>
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
  const editText = document.querySelector(`.input-edit-text-${countEdit}`)
  console.log(editText)
  editButton.addEventListener('click', () => {

    if (editButton.textContent === 'Edit') {
      editText.value = inputText.innerText;
      editButton.textContent = 'Save';
      inputText.focus();
    } else {
      inputText.setAttribute('contentEditable', true);
      editButton.textContent = 'Edit';
    }


  })
  countEdit++
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


