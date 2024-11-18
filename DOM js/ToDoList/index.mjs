const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counterTasksNum = document.querySelector("#counter-tasks-num");
const counterDoneNum = document.querySelector("#counter-done-num");

let count = 1;

function deleteToDo(element) {
  element.remove();
  count--;

  // отрицательный счетчик инпута
  if (element.classList.contains('inputTextChecked')) {
    counterDoneNum.textContent = Number(counterDoneNum.textContent) - 1
  } else {
    counterTasksNum.textContent = Number(counterTasksNum.textContent) - 1
  }
};

function toggleCompleteStatusToDo(element) {
    if (!(element.classList.contains('inputTextChecked'))) {
      element.classList.add('inputTextChecked')
      counterDoneNum.textContent = Number(counterDoneNum.textContent) + 1
      counterTasksNum.textContent = Number(counterTasksNum.textContent) - 1
    } else {
      element.classList.remove('inputTextChecked')
      counterDoneNum.textContent = Number(counterDoneNum.textContent) - 1
      counterTasksNum.textContent = Number(counterTasksNum.textContent) + 1
    };
};


function addToDo(element) {
  const inputValue = inputText.value;
  const newElement = document.createElement('div');

  newElement.innerHTML = `
<div>
<input type="checkbox" class="check-button" name="checkbox"/>
<span class = "text-span-${count}">${inputValue}</span>
<input type="text" class ="input-edit-text-${count}" name="text"/>
<button class="newElement-edit-button-${count}">Edit</button>
<button class="newElement-save-button-${count}" style="display:none;">Save</button>
<button class="newElement-delete-button-${count}">Delete</button>

</div>
`
  result.appendChild(newElement);

  // удаление пунктов
  const deleteButton = document.querySelector(
    `.newElement-delete-button-${count}`
  );
  deleteButton.addEventListener('click', () => deleteToDo(newElement))

  //отметка  о выполнении пункта
  const checkboxButton = newElement.querySelector("input[name='checkbox']")
  checkboxButton.addEventListener('click', () => 
    toggleCompleteStatusToDo(newElement));

  //кнопка Редактировать
  const editButton = document.querySelector(`.newElement-edit-button-${count}`)
  const saveButton = document.querySelector(`.newElement-save-button-${count}`)
  const editText = document.querySelector(`.input-edit-text-${count}`)
  const textSpan = document.querySelector(`.text-span-${count}`)

  editText.style.display = 'none';

  editButton.addEventListener('click', () => {
    editText.value = textSpan.textContent;
    editText.style.display = 'inline-block';
    textSpan.style.display = 'none';
    editButton.style.display = 'none';
    saveButton.style.display = 'inline';

  });

  saveButton.addEventListener('click', () => {
    textSpan.textContent = editText.value;
    editText.style.display = 'none';
    textSpan.style.display = 'inline-block';
    editButton.style.display = 'inline';
    saveButton.style.display = 'none';

  });

  count++
  inputText.value = "";
   // положительный счетчик инпута Сколько всего задач
   counterTasksNum.textContent = Number(counterTasksNum.textContent) + 1
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